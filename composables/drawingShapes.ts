export default function shapes(canvas:HTMLCanvasElement){
    const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    let startx =0;
    let starty =0;
    let snapshot: ImageData;
    function drawing(e:MouseEvent){
       snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);
    }
    function drawShape(e:MouseEvent){
        const localx = e.clientX;
        const localy = e.clientY;

        console.log({startx,starty,localx,localy})
        ctx.putImageData(snapshot,0,0)
        ctx.beginPath()
        ctx.strokeRect(startx,starty,localx-startx,localy-starty);
        ctx.stroke()
    }
    canvas.addEventListener("mousedown",(e:MouseEvent)=>{
       startx = e.clientX;
       starty = e.clientY;
       drawing(e)
       canvas.addEventListener("mousemove",drawShape)
    })
    canvas.addEventListener("mouseup",()=>{
        canvas.removeEventListener("mousemove",drawShape)
    })
}