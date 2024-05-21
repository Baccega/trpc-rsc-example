"use client";
import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/react";

// type RouterOutput = inferRouterOutputs<AppRouter>;

export default function TrpcExample() {
  const hello = api.post.hello.useQuery({text: "world"});

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {hello?.data?.greeting ?? "Loading tRPC query..."}
        </p>
      </div>

      <CrudShowcase />
    </>
  );
}

function CrudShowcase() {
  const latestPost = api.post.getLatest.useQuery();

  if (latestPost.error) {
    return <p>Error: {latestPost.error.message}</p>;
  }

  if (latestPost.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">
          Your most recent post: {latestPost.data?.name}
        </p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
