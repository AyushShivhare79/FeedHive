import { NextRequest, NextResponse } from "next/server";
import { TwitterApi } from "twitter-api-v2";

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  const client = new TwitterApi({
    appKey: process.env.TWITTER_API_KEY!,
    appSecret: process.env.TWITTER_API_SECRET!,
    accessToken: process.env.TWITTER_ACCESS_TOKEN_KEY!,
    accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET!,
  });

  console.log("Text: ", text);
  try {
    const response = await client.v2.tweet(text);

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error posting tweet:", error);
    return NextResponse.json({ message: "Failed to post tweet!" });
  }
}
