"use client";

// import { TwitterApi } from "twitter-api-v2";

import { authClient } from "@/lib/auth-client";

// const twitterClient = new TwitterApi("<YOUR_APP_USER_TOKEN>");

// const readOnlyClient = twitterClient.readOnly;

// const user = await readOnlyClient.v2.userByUsername("plhery");
// await twitterClient.v2.tweet("Hello, this is a test.");

const signIn = async () => {
  await authClient.signIn.social({
    provider: "twitter",
    callbackURL: "/dashboard",
  });
};

export default function Home() {
  return (
    <>
      <button onClick={signIn}>Login with google</button>
    </>
  );
}
