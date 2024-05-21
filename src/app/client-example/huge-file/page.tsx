"use client";

import { HUGE_OBJECT } from "~/resources/hugeobject";

export default function ClientHugeFileExample() {
  const randomElement = HUGE_OBJECT[0];

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl text-white">{randomElement}</p>
      </div>
    </>
  );
}
