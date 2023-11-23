import CalculatorHeader from "@/components/calculator-header";
import "./globals.css";
import {Inter} from "next/font/google"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculator",
  description: "Generated by Next.js",
};
const inter = Inter({
  subsets: ['latin']
})
export default function RootLayout({
  children, 
}: {
   
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
      <CalculatorHeader />
        {children}</body>
    </html>
  );
}
