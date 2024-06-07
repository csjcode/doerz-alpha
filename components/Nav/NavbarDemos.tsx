import Link from "next/link";
import React from "react";

type Props = {};

function NavbarDemos({}: Props) {
  return (
    <div>
      <div className="border-bottom w-full border-zinc-600 bg-zinc-300 py-2 dark:bg-zinc-900">
        <div className="flex w-full flex-row items-center justify-center space-x-2">
          <Link href="/cards/">
            <div className="mx-2 min-w-24 rounded-lg border border-zinc-800 px-6 py-2 text-zinc-800 hover:border-slate-500 dark:text-zinc-300 dark:hover:border-slate-700">
              Cards
            </div>
          </Link>
          <Link href="/transactions/">
            <div className="mx-2 min-w-24 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:hover:border-slate-700">
              Transactions
            </div>
          </Link>
          <Link href="/inbox/">
            <div className="mx-2 min-w-24 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:hover:border-slate-700">
              Inbox
            </div>
          </Link>
          <Link href="/wallets/">
            <div className="mx-2 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:hover:border-slate-700">
              Wallet
            </div>
          </Link>
          <Link href="/market/">
            <div className="mx-2 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:hover:border-slate-700">
              Market
            </div>
          </Link>
          <Link href="/swap/">
            <div className="mx-2 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:hover:border-slate-700">
              Swap
            </div>
          </Link>
          <Link href="/basket/">
            <div className="mx-2 rounded-lg border border-zinc-800 px-6 py-2 hover:border-slate-500 dark:hover:border-slate-700">
              Basket
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarDemos;
