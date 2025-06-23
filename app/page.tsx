import Image from "next/image";

export default function Home() {
  return (
    <>
     <div className="back" >
      <div className="sticky top-10 w-[500px] h-13 border-2 border-black rounded-lg z-10 mt-2 m-auto px-2 py-1" >
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/square.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/diamond.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/circle.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/arrow.svg"} alt="squareicon" width={24} height={24} className="w-full h-full rotate-90" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1 " >
        <Image src={"/icons/line.svg"} alt="squareicon" width={24} height={24} className="w-[80%] h-full rotate-90 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/pencil.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/text.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/image.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/eraser.svg"} alt="squareicon" width={24} height={24} className="w-full h-full" />
       </button>
       <button className="w-10 h-full border hover:bg-blue-200/70 rounded-sm active:bg-blue-200/70 mx-1" >
        <Image src={"/icons/install.svg"} alt="squareicon" width={24} height={24} className="w-[80%] h-[80%] m-auto" />
       </button>
      </div>
      <canvas id="canvas" ></canvas>
     </div>
    </>
  );
}
