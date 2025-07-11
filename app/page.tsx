import { TwitterApi } from "twitter-api-v2";

const twitterClient = new TwitterApi("<YOUR_APP_USER_TOKEN>");

const readOnlyClient = twitterClient.readOnly;

const user = await readOnlyClient.v2.userByUsername("plhery");
await twitterClient.v2.tweet("Hello, this is a test.");


export default function Home() {
  return (
    <>
      <div></div>
    </>
  );
}
