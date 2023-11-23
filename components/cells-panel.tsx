import calculatorCells from "@/utils/calculator-cells";
import { cn } from "@/utils/cn";
import Button from "./Button";

interface eventProps {
  handleButtonClick: (value:string) =>void;
  handleOperator: (value:string) =>void;
  handleEqualTo: (value:string) =>void;
  op2: (value:string) =>void;
}

export default function CellsPanel({handleButtonClick,handleOperator,handleEqualTo,op2}:eventProps) {
  const cells = calculatorCells({handleButtonClick,handleOperator,handleEqualTo,op2});
  return (
    <div className="grid m-1 bg-gray-50 grid-cols-4 flex-1 gap-1">
      {cells.cells.map((cell, i) => (
        <Button name = {cell.Icon ? <cell.Icon /> : cell.name} click={cell.onclick} id = {i} />
        
      ))}
    </div>
  );
}
