import { NextRequest, NextResponse } from "next/server";
// import { DEFAULT_TOKENS } from "../../../../app/config";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { FetchOptions } from "@/app/api/types";

interface RouteProps {
  params: {
    taskId: string;
  };
  req: NextRequest;
}

export async function GET({ req, params }: RouteProps) {
  try {
    // Attempt to fetch with retries
    const options: FetchOptions = {
      method: "GET",
      headers: {},
    };

    // http://localhost:3003/tasks?${params.taskId}

    const externalApiResponse = await fetchWithRetry(
      `http://localhost:3003/tasks?taskId=${params.taskId}`,
      options,
      3, // Number of retries
      500, // Initial backoff time in ms
    );

    if (!externalApiResponse.ok) {
      throw new Error(`HTTP error! Status: ${externalApiResponse.status}`);
    }

    const data = await externalApiResponse.json();

    console.log(`backend data: ${data}`);

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
