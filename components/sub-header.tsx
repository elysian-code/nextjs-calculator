"use client";

import Icons from "./icons";

interface Props {
  // children?: React.ReactNode
}
export default function SubHeader({}: Props) {
  return (
    <div className="flex mx-4 space-x-2 items-center ">
      <button className="w-10 h-10 inline-flex items-center justify-center hover:bg-gray-200 rounded-md">
        <Icons.Menu className="" />
      </button>
      <h1 className="font-bold text-xl">Standard</h1>
      <div>
        <button className="w-8 inline-flex items-center justify-center h-8 hover:bg-gray-200 rounded-md">
          <Icons.ExpandUp />
        </button>
      </div>
    </div>
  );
}
