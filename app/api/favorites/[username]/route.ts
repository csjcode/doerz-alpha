import { NextRequest, NextResponse } from "next/server";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { FetchOptions } from "@/app/api/types";

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
  const { username } = params;
  return handleGet(username);
}

export async function POST(req: NextRequest, { params }: { params: { username: string } }) {
  return handlePost(req);
}

export async function PUT(req: NextRequest, { params }: { params: { username: string } }) {
  return handlePut(req);
}

async function handleGet(username: string) {
  console.log(`params.username ${username}`);

  try {
    const options: FetchOptions = {
      method: "GET",
      headers: {},
    };

    const externalApiResponse = await fetchWithRetry(
      `http://localhost:3003/favorites?username=${username}`,
      options,
      3, // Number of retries
      500, // Initial backoff time in ms
    );

    if (!externalApiResponse.ok) {
      throw new Error(`HTTP error! Status: ${externalApiResponse.status}`);
    }

    const data = await externalApiResponse.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

async function handlePost(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('POST request body:', body);

    // Your POST logic here
    // e.g., save the data to a database

    return NextResponse.json({ message: "POST request received", data: body }, {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

async function handlePut(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('PUT request body:', body);

    // Assuming body contains the updated favorite entry
    const options: FetchOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    };

    const externalApiResponse = await fetchWithRetry(
      `http://localhost:3003/favorites/${body.id}`,
      options,
      3, // Number of retries
      500, // Initial backoff time in ms
    );

    if (!externalApiResponse.ok) {
      throw new Error(`HTTP error! Status: ${externalApiResponse.status}`);
    }

    const data = await externalApiResponse.json();

    return NextResponse.json(data, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Something went wrong" }, {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
