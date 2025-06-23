"use client"
import ToolBar from "@/components/toolbar";
import { useEffect,useRef } from "react";
import canvasPanning from "@/composables/panning";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    if(canvasRef.current){
      canvasPanning(canvasRef.current)
    }
  },[])
  return (
    <>
     <div className="back" >
      <ToolBar/>
      <canvas ref={canvasRef} id="canvas" ></canvas>
     </div>
    </>
  );
}
