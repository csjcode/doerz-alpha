import { NextRequest, NextResponse } from "next/server";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { FetchOptions } from "@/app/api/types";

export async function GET(req: NextRequest, { params }: { params: { taskIdName: string } }) {
  const { taskIdName } = params;
  console.log(`params.taskIdName ${taskIdName}`);

  try {
    const options: FetchOptions = {
      method: "GET",
      headers: {},
    };

    const externalApiResponse = await fetchWithRetry(
      `http://localhost:3003/tasks?taskIdName=${taskIdName}`,
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
