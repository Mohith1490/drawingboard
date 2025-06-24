import Shapes from './Shapes';
import { selectedtool } from '@/components/toolbar';

export default function canvasPanning(canvas: HTMLCanvasElement){
const ctx = canvas?.getContext("2d") as CanvasRenderingContext2D; 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const viewportTransform = {
  x:0,
  y:0,
  scale:1
}

ctx.translate(canvas.width/2,canvas.height/2);

const render = () => {
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(viewportTransform.scale, 0, 0, viewportTransform.scale, viewportTransform.x, viewportTransform.y);
  HandlingTools(canvas)
}
render()
function updateZooming(e:WheelEvent){
  const oldScale = viewportTransform.scale;
  const oldX = viewportTransform.x;
  const oldY = viewportTransform.y;

  const localX = e.clientX;
  const localY = e.clientY;

  const previousScale = viewportTransform.scale;

  const newScale = Math.min(Math.max(viewportTransform.scale += e.deltaY * -0.01,0.125),4);
  // max and min the user can zoom

  const newX = localX - (localX - oldX) * (newScale / previousScale);
  const newY = localY - (localY - oldY) * (newScale / previousScale);

  viewportTransform.x = newX;
  viewportTransform.y = newY;
  viewportTransform.scale = newScale;
}

// let previousX = 0, previousY = 0;

// const updatePanning = (e:MouseEvent) => {
//   const localX = e.clientX;
//   const localY = e.clientY;

//   viewportTransform.x += localX - previousX; // current x position then adding mouse x position ex localx = 250 prevx = 230 new = x + 20
//   viewportTransform.y += localY - previousY; // same here

//   previousX = localX; // updating previous values 
//   previousY = localY;
// }

//   const onMouseMove = (e:MouseEvent) => {
//     updatePanning(e)
//     render()
//   }
  
//   canvas.addEventListener("mousedown", (e) => {
//   previousX = e.clientX;
//   previousY = e.clientY;
  
//   canvas.addEventListener("mousemove", onMouseMove);
// })

// canvas.addEventListener("mouseup", () => {
//   canvas.removeEventListener("mousemove", onMouseMove);
// })

// function mouseWheel(e:WheelEvent){
//   updateZooming(e);
//   render()
// }
// canvas.addEventListener("wheel",mouseWheel)
}



function HandlingTools(canvas:HTMLCanvasElement){
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
  const shapes = new Shapes(canvas);
  let startx =0;
  let starty =0;
  let snapshot: ImageData;
  let frames:ImageData[] = [];
  
  function drawing(){
    snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);
    ctx.beginPath()
  }
  function drawShape(e:MouseEvent){
      ctx.putImageData(snapshot,0,0)
      shapes.SelectShape(selectedtool,e,startx,starty)
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