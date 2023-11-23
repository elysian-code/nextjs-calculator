import { cn } from "@/utils/cn";

export default function OptionPanel() {
  let buttons = [
    { name: "MC", disabled: true },
    { name: "MR", disabled: true },
    { name: "M+" },
    { name: "M-" },
    { name: "MS" },
  ];
  return (
    <div className="">
      {buttons.map((b, i) => (
        <button
          onClick={() => {
            console.log(b.name);
          }}
          className={cn(
            "w-16 h-10 inline-flex items-center justify-center text-sm rounded-md",
            b.disabled ? "opacity-30" : "hover:bg-gray-200"
          )}
          disabled={b.disabled}
          key={i}
        >
          {b.name}
        </button>
      ))}
    </div>
  );
}
