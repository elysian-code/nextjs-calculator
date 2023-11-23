import Icons from "@/components/icons";


export interface handleprops{
  handleButtonClick: (value:string) => void;
  handleOperator: (value:string) => void;
  handleEqualTo: (value:string) =>void;
  op2: (value:string) =>void;
}
export default function calculatorCells({handleButtonClick,handleOperator,handleEqualTo,op2}:handleprops) {
  // const numberClassName = 'bg-white '
  return {
    cells: [
      { name: "%" ,onclick: () => op2('%')},
      { name: "CE" ,onclick: () => op2('CE')},
      { name: "C" ,onclick: () => op2('C')},
      { Icon: Icons.Backspace ,onclick: () => op2('BS')},
      { name: "1/x" ,onclick: () => op2('1/x')},
      { name: "x²" ,onclick: () => op2('SQ')},
      { Icon: Icons.SquareRoot ,onclick: () => op2('sqr')},
      { name: "/" ,onclick: () => handleOperator('/')},
      { name: "7" ,onclick: () => handleButtonClick('7')},
      { name: "8" ,onclick: () => handleButtonClick('8')},
      { name: "9" ,onclick: () => handleButtonClick('9')},
      { name: "x" ,onclick: () => handleOperator('*')},
      { name: "4" ,onclick: () => handleButtonClick('4')},
      { name: "5" ,onclick: () => handleButtonClick('5')},
      { name: "6" ,onclick: () => handleButtonClick('6')},
      { name: "-" ,onclick: () => handleOperator('-')},
      { name: "1" ,onclick: () => handleButtonClick('1')},
      { name: "2" ,onclick: () => handleButtonClick('2')},
      { name: "3" ,onclick: () => handleButtonClick('3')},
      { name: "+" ,onclick: () => handleOperator('+')},
      { Icon: Icons.PlusMinus ,onclick: () => op2('-/+')},
      { name: "0" ,onclick: () => handleButtonClick('0')},
      { name: "." ,onclick: () => handleButtonClick('.')},
      { name: "=" ,onclick: () => handleEqualTo('=')},
    ],
  };
}


