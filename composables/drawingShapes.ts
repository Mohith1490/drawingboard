import Shapes from "./Shapes"

export default function HandlingMouseEvent(canvas:HTMLCanvasElement){
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    const shapes = new Shapes(canvas);
    let startx =0;
    let starty =0;
    let snapshot: ImageData;
    let frames:ImageData[] = [];
    function drawing(){
       snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);       
    }
    function drawShape(e:MouseEvent){
        const localx = e.clientX;
        const localy = e.clientY;

        ctx.putImageData(snapshot,0,0)
        shapes.drawCircle(e,startx,starty)
    }
    canvas.addEventListener("mousedown",(e:MouseEvent)=>{
       startx = e.clientX;
       starty = e.clientY;
       drawing()
       canvas.addEventListener("mousemove",drawShape)
    })
    canvas.addEventListener("mouseup",()=>{
        frames.push(snapshot);       
        canvas.removeEventListener("mousemove",drawShape)
    })
}