import { NextRequest, NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';

const connection = new Connection('https://api.devnet.solana.com', 'confirmed');

// curl -X GET "http://localhost:3000/api/tasks/doerzalpha-sd2sd/validate?walletAddress=UeJ1WAZZAA7pdW1mT2kHwuJFdRe8oLf9uWgyjkh5L6D&mintAddress=Xxgwt97Pn5zZGMjrHhZRczgy2i3mSx5cwexE8UEwVjY&tokenAmount=1"

export async function GET(
  req: NextRequest,
  { params }: { params: { taskIdName: string } }
) {
  const { taskIdName } = params;
  const { searchParams } = new URL(req.url);
  const walletAddress = searchParams.get('walletAddress');
  const mintAddress = searchParams.get('mintAddress');
  const tokenAmount = searchParams.get('tokenAmount');

  if (!walletAddress || !mintAddress || !tokenAmount) {
    return NextResponse.json(
      { isValid: false, error: 'Missing required query parameters' },
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  try {
    const walletPublicKey = new PublicKey(walletAddress);
    const mintPublicKey = new PublicKey(mintAddress);
    const expectedTokenAmount = parseFloat(tokenAmount);

    // Get parsed token accounts by owner
    const response = await connection.getParsedTokenAccountsByOwner(walletPublicKey, { mint: mintPublicKey });

    const accounts = response.value.map((accountInfo) => ({
      pubkey: accountInfo.pubkey.toBase58(),
      mint: accountInfo.account.data.parsed.info.mint,
      owner: accountInfo.account.data.parsed.info.owner,
      decimals: accountInfo.account.data.parsed.info.tokenAmount.decimals,
      amount: accountInfo.account.data.parsed.info.tokenAmount.uiAmount,
    }));

    // Check if there is an account with the required token amount
    const isValid = accounts.some(account => account.amount >= expectedTokenAmount);

    return NextResponse.json({ isValid }, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { isValid: false, error: error.message || 'Something went wrong' },
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
