import { ragChat } from "@/lib/rag-chat"
import { redis } from "@/lib/redis"
import { ChatWrapper } from "@/components/chatWrapper"

function reconstructUrl({url}: {url: string[]}) {
  const decodedComponents = url.map((component) => decodeURIComponent(component));
  return decodedComponents.join('/');
}

const Page = async ({params}: {
  params: {
    url: string | string[] | undefined
  }
}) => {

  const reconstructedUrl = reconstructUrl({url: params.url as string[]});
  console.log(params);

  const isAlreadyIndexed = await redis.sismember("indexed-urls", reconstructedUrl);

  const sessionId = "mock-session-id";

  if(isAlreadyIndexed) {
    await ragChat.context.add({
    type: "html",
    source: reconstructedUrl,
    config: {chunkOverlap: 50, chunksize: 200},
  });

    await redis.sadd("indexed-urls", reconstructedUrl);
  }

  return <ChatWrapper sessionId={sessionId} />
}
;

export default Page;
