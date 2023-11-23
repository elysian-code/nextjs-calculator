"use client";
import SubHeader from "@/components/sub-header";
import DisplayPanel from "@/components/display-panel";
import OptionPanel from "@/components/option-panel";
import CellsPanel from "@/components/cells-panel";
import History from "@/components/history";
import { useState } from "react";
import { log } from "console";
import { privateEncrypt, sign } from "crypto";

/* interface User {
  id: number;
  username: string;
  email: string;
  password: string;
} */
export interface ICalc {
  value: any;
  lastValue: string;
  lastSign: string;
  change: boolean;
  operator: string;
  chOp: boolean;
  operand: string;
  expression: string;
  history: {
    expression: string;
    value: string;
  }[];
}


export default function Calculator() {
  // let value = 0;
  const [calc, setCalc] = useState<ICalc>({
    value: "0",
    lastValue: "",
    lastSign: "",
    change: true,
    operator: "",
    chOp: false,
    operand: "",
    expression: "",
    history: [],
  });

  const handleButtonClick = (value:string) => {

    if ((calc.operator == "" && (calc.value == "0" ||calc.lastSign=="=")) && value != ".") {
      
      setCalc((prevCalc: ICalc) =>({
            ...prevCalc,
            operand: "",
            operator: "",
            lastValue: "",
            expression: "",
            value: value,
            chOp: false,
            lastSign: "",
          
          }))
          return
    }if (calc.operator == "" && (calc.value == "0" ||calc.lastSign=="=") && value == ".") {
      
      setCalc((prevCalc: ICalc) =>({
        ...prevCalc,
        operand: "",
        operator: "",
        lastValue: "",
        expression: "",
        value: "0" + value,
        chOp: false,
        lastSign: "",
        
       
      }))
    } else if (calc.operator != "" && (calc.value == "0" || calc.change) && value != ".") {
      
      setCalc((prevCalc: ICalc) => ({
        ...prevCalc, 
        value: value,
        chOp: false,
        change: false,
        

      }))
    } else if (calc.operator != "" && (calc.value == "0" || calc.change) && value == ".") {
      
      setCalc((prevCalc: ICalc) => ({
        ...prevCalc, 
        value: "0" + value,
        chOp: false,
        change: false,
        expression: prevCalc.operand + " "+ prevCalc.operator

      }))
      
    } else {
      
      setCalc((prevCalc: ICalc) => ({
        ...prevCalc, 
        value: prevCalc.value + value,
        chOp: false

      }))
    }
    
  }

  const handleOperator = (sign:string) => {
    if (calc.operator == "" && calc.lastValue == "") {
      
      setCalc((prevCalc: ICalc) => ({
        
        ...prevCalc,
        operand: prevCalc.value,
        operator: sign,
        expression: prevCalc.value + " " + sign,
        lastSign: "",
        chOp: true,
        change: true,
        
       
      }))
    } else if (calc.operator != "" && (calc.lastValue == "" && !calc.chOp)) {
      
      setCalc((prevCalc) => ({
        ...prevCalc,
        
        value: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value).toString()),
        operand: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value).toString()),
        operator: sign,
        expression: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value).toString()) + " " + sign,
        change: true,
        chOp: true,
        history: [...prevCalc.history,{expression: prevCalc.operand + "  " +
         prevCalc.operator + "  " + prevCalc.value + " " + "=",
         value: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value))}]
        
        
      }))
    } else if (calc.operator != "" && (calc.lastSign=="=" || calc.chOp)){
      
      setCalc((prevCalc) => ({
        ...prevCalc,

        operator: sign,
        expression: prevCalc.value + " " + sign,
        operand: prevCalc.value,
        lastSign: "",
        change: true,
        lastValue: "",
        
      }))
    }
  }

  const handleEqualTo = (sign: string) => {
    if (calc.operator != "" && calc.lastValue != "") {
      setCalc((prevCalc) => ({
        ...prevCalc,
        value: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.lastValue)),
        operand: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.lastValue)),
        expression: prevCalc.operand + " " + prevCalc.operator + " " + prevCalc.lastValue + " " + "=",
        lastSign: sign,
        history: [...prevCalc.history,{expression: prevCalc.operand + "  " +
         prevCalc.operator + "  " + prevCalc.lastValue + " " + "=",
         value: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.lastValue))}]
      }))
    } else if (calc.operator !== "" && calc.lastValue== "") {
      setCalc((prevCalc) =>({
        ...prevCalc,
        value: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value)),
        operand: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value)),
        expression: prevCalc.operand + " " + prevCalc.operator + " " + prevCalc.value + " " + "=",
        lastValue: prevCalc.value,
        lastSign: sign,
        change: true,
        history: [...prevCalc.history,{expression: prevCalc.operand + "  " +
         prevCalc.operator + "  " + prevCalc.value + " " + "=",
         value: String(eval(prevCalc.operand + prevCalc.operator + prevCalc.value))}]
      }))
    }
  }

  const backspace = () => {
    setCalc(prevCalc => ({
      ...prevCalc,
      value: prevCalc.value.slice(0, -1)
    }))
  }

  const pCent = () => {
    setCalc(prevCalc => ({
      ...prevCalc,
      value: String(eval((prevCalc.value || "0") + "/" + "100" + "*" + (prevCalc.operand || "0"))),
      change: true
    }))
  }

  const clear = () => {
    
    setCalc((prevCalc: ICalc) =>({
      ...prevCalc,
      operand: "",
      operator: "",
      lastValue: "",
      expression: "",
      value: "0",
      chOp: false,
      lastSign: "",

    }))
  }

  const sqrt = () => {
    setCalc(prevCalc => ({
      ...prevCalc,
      value: String(Math.sqrt(prevCalc.value))
    }))
  }

  const CE = () => {
    setCalc(prevCalc => ({
      ...prevCalc,
      value: "0"
    }))
  }

  const div = () => {
    setCalc(prevCalc => ({
      ...prevCalc,
      value: String(eval('1'+'/'+prevCalc.value))
    }))
  }

  const SQ = ()=> {
    setCalc(prevCalc => ({
      ...prevCalc,
      value: String(Number(prevCalc.value)**2)
    }))
  }

  const minP = () => {
    setCalc(prevCalc => ({
      ...prevCalc,
    value: prevCalc.value * -1
    }))
  }

  const op2 = (sign:string) => {
    switch(sign){
      case "BS":
        backspace();
        break
      case "%":
        pCent()
        break
      case "C":
        clear()
        break
      case "CE":
        CE()
        break
      case "1/x":
        div()
        break
      case "sqr":
        sqrt()
        break
      case "SQ":
        SQ()
        break
      case "-/+":
        minP()
        break

    }
  }


  return (
    <div className="grid grid-cols-12 flex-1">
      <div className="col-span-9 flex flex-col">
        <SubHeader />
        <DisplayPanel calc={calc} />
        <OptionPanel />
        <CellsPanel handleButtonClick={handleButtonClick}
         handleOperator={handleOperator} handleEqualTo={handleEqualTo} op2={op2} />
      </div>
      <div className="col-span-3">
        <History calc={calc}/>
      </div>
    </div>
  );
}
