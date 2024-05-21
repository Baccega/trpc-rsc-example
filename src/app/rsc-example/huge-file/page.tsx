import Link from "next/link";
import { HUGE_OBJECT } from "~/resources/hugeobject";

export function getRandomElement<T>(items: readonly T[]): T | undefined {
  if (items.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

export default async function RscHugeFileExample() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
        <Link
          className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 hover:bg-white/20"
          href="/client-example/huge-file"
        >
          <h3 className="text-2xl font-bold">Huge file example (Server components)</h3>
          <div className="text-lg">Show what rsc allows you to do</div>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">
          {getRandomElement(HUGE_OBJECT)}
        </p>
      </div>
    </>
  );
}
