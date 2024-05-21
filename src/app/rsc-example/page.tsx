import Link from "next/link";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function RscExample() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
          href="/rsc-example/huge-file"
        >
          <h3 className="text-2xl font-bold">Huge file example</h3>
          <div className="text-lg">Show what rsc allows you to do</div>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello ? hello.greeting : "Loading tRPC query..."}
        </p>
      </div>

      <CrudShowcase />
    </>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
