import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
        href="/trpc-example"
      >
        <h3 className="text-2xl font-bold">tRPC example</h3>
        <div className="text-lg">Basic tRPC example to show his power</div>
      </Link>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
        href="/rsc-example"
      >
        <h3 className="text-2xl font-bold">
          Client component to Server component
        </h3>
        <div className="text-lg">Spoiler for later 😶‍🌫️</div>
      </Link>
    </div>
  );
}
