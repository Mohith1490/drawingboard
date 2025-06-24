"use client"
import Image from "next/image"
import { useTool } from "@/stores/useTools";
import { useEffect } from "react";

export let selectedtool:String;

export default function ToolBar(){
  const tool = useTool((state)=>state.tool)
  const setTool = useTool((state)=>state.setTool);
  useEffect(()=>{
   selectedtool = tool
  },[tool])
    return (
        <>
         <div className="sticky top-10 w-[460px] h-13 border-2 border-black bg-white rounded-lg z-10 mt-2 m-auto px-2 py-1" >
       <button onClick={()=>setTool("panning")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "panning" ? "bg-blue-200/30" : "" } mx-1`} >
        <Image src={"/icons/hand.svg"} alt="squareicon" width={20} height={20} className="w-8 h-8 m-auto" />
       </button>
       <button onClick={()=>setTool("square")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "square" ? "bg-blue-200/30" : "" } mx-1`} >
        <Image src={"/icons/square.svg"} alt="squareicon" width={20} height={20} className="w-8 h-8 m-auto" />
       </button>
       <button onClick={()=>setTool("circle")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "circle" ? "bg-blue-200/30" : "" } mx-1`}  >
        <Image src={"/icons/circle.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button onClick={()=>setTool("arrow")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "arrow" ? "bg-blue-200/30" : "" } mx-1`}  >
        <Image src={"/icons/arrow.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto rotate-90" />
       </button>
       <button onClick={()=>setTool("line")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "line" ? "bg-blue-200/30" : "" } mx-1 `}>
        <Image src={"/icons/line.svg"} alt="squareicon" width={24} height={24} className="w-[80%] h-full rotate-90 m-auto" />
       </button>
       <button onClick={()=>setTool("pencil")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "pencil" ? "bg-blue-200/30" : "" } mx-1`}  >
        <Image src={"/icons/pencil.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button onClick={()=>setTool("text")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "text" ? "bg-blue-200/30" : "" } mx-1`}  >
        <Image src={"/icons/text.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button onClick={()=>setTool("eraser")} className={`w-10 h-full hover:bg-blue-200/30 rounded-sm ${tool === "eraser" ? "bg-blue-200/30" : "" } mx-1`}  >
        <Image src={"/icons/eraser.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button onClick={()=>setTool("clear")} className={`w-10 h-full hover:bg-red-200/90 rounded-sm ${tool === "image" ? "bg-blue-200/30" : "" } mx-1`}  >
        <Image src={"/icons/clear.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
      </div>
        </>
    )
}