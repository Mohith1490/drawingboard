"use client"
import ToolBar from "@/components/toolbar";
import { useEffect,useRef } from "react";
import canvasPanning from "@/composables/panning";
import Image from "next/image";

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(()=>{
    if(canvasRef.current){
      canvasPanning(canvasRef.current)
    }
  },[])
  function downloadImage(){    
    if(typeof window !== "undefined" && canvasRef.current != null){
      var anchor = document.createElement("a");
      anchor.href = canvasRef.current?.toDataURL("image/png");
      anchor.download = "IMAGE.PNG";
      anchor.click()
    }
  }
  return (
    <>
     <div className="back" >
      <ToolBar/>
      <canvas ref={canvasRef} id="canvas" ></canvas>
      <div className="w-12 h-10 absolute right-2 top-2 " >
           <button onClick={downloadImage} className={`w-10 h-full border-2 hover:bg-blue-200/30 rounded-sm mx-1`}>
            <Image src={"/icons/install.svg"} alt="squareicon" width={24} height={24} className="w-6 h-8 m-auto" />
           </button>
      </div>
     </div>
    </>
  );
}
