import React from 'react'
import { cn } from "@/utils/cn";

interface btnprops {
    name:any;
    click: () => void;
    id: number;
}

const Button= ({name, click, id}:btnprops) => {
  return (
    <button
          onClick={click}
          className={cn(
            "inline-flex items-center justify-center rounded-md shadow-sm border bg-white hover:bg-gray-100 hover:bg-opacity-50",
            name == "=" && "bg-blue-700 text-white hover:bg-opacity-75",
            (id < 8 || ["x", "-", "+"].includes(name as any)) &&
              "bg-gray-100  bg-opacity-50 hover:bg-opacity-100"
          )}
          key={id}
        >
          {name}
        </button>
  )
}

export default Button