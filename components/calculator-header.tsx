import Icons from "./icons";

export default function CalculatorHeader() {
  return (
    <header className="grid grid-cols-12">
      <div className="col-span-12 flex h-12 justify-between">
        <div className="ml-3 flex items-center space-x-3 p-2">
          <Icons.Calculator className="h-5 w-5" />
          <span className="text-sm text-gray-600">Calculator</span>
        </div>
        <div className="flex-1"></div>
        <div className="flex">
          <button className="flex h-8 w-12 items-center justify-center text-gray-500 hover:bg-gray-200">
            <Icons.Minimize className="h-4 w-4" />
          </button>
          <button className="flex h-8 w-12 items-center justify-center hover:bg-gray-200">
            <Icons.Windows className="" />
          </button>
          <button className="flex h-8 w-12 items-center justify-center hover:bg-red-600 group">
            <Icons.Close className="group-hover:text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
