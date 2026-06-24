import { Navbar } from "@/components/layout/Navbar";

export default function CommonLayout({children}: {readonly children: React.ReactNode}) {
  return (
    <div>
     <Navbar></Navbar> 
      {children}</div>
  )
}