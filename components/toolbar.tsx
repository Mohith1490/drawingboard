import Image from "next/image"


export default function ToolBar(){
    return (
        <>
         <div className="sticky top-10 w-[500px] h-13 border-2 border-black bg-white rounded-lg z-10 mt-2 m-auto px-2 py-1" >
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/square.svg"} alt="squareicon" width={20} height={20} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/diamond.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/circle.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/arrow.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto rotate-90" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1 " >
        <Image src={"/icons/line.svg"} alt="squareicon" width={24} height={24} className="w-[80%] h-full rotate-90 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/pencil.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/text.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/image.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/eraser.svg"} alt="squareicon" width={24} height={24} className="w-8 h-8 m-auto" />
       </button>
       <button className="w-10 h-full border hover:bg-blue-200/30 rounded-sm active:bg-blue-200/30 mx-1" >
        <Image src={"/icons/install.svg"} alt="squareicon" width={24} height={24} className="w-6 h-8 m-auto" />
       </button>
      </div>
        </>
    )
}