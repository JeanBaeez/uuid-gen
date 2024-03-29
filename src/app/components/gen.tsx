"use client";

import { useState } from "react";
import { uuid } from "uuidv4";
export default function Component() {
  const [uuidValue, setUuid] = useState("");
  const [copied, setCopied] = useState(false);
  const generateUUID = () => {
    setUuid(uuid());
  };
  const copyUUID = () => {
    navigator.clipboard.writeText(uuidValue);
    setCopied(true);
  };
  return (
    <div className=" flex justify-center items-center  mx-auto">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            UUID Generator
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Generate a random UUIDv4 with a single click.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <button
            onClick={generateUUID}
            className="inline-flex h-10 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-2 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950"
          >
            Generate UUID
          </button>
        </div>
        <div className="w-full flex items-center h-10 max-w-sm rounded-lg border border-gray-200 border-dashed p-4   gap-2 text-sm/95%   justify-center">
          <p> {uuidValue} </p>
        </div>
        <button
          disabled={!uuidValue}
          onClick={copyUUID}
          className="inline-flex h-9 items-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 text-sm font-medium shadow-sm gap-2 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950"
        >
          {copied ? "Copied!" : "Copy UUID"}
        </button>
      </div>
    </div>
  );
}
