import rough from "roughjs";

export default class Shapes {
    rc: any;
    ctx:CanvasRenderingContext2D;
    constructor(canvas:HTMLCanvasElement) {
        this.rc = rough.canvas(canvas);
        this.ctx = canvas.getContext("2d")!
    }

    SelectedShape(name:string,event:MouseEvent,startX:number,startY:number){
        switch (name) {
            case "rectangle":
                this.drawRect(event,startX,startY)
                break;
            case "circle":

            default:
                break;
        }
    }

    
    drawRect(event:MouseEvent,startX:number,startY:number) { // rectangle shape logic 
       const toX = event.clientX;
       const toY = event.clientY;

       return this.rc.rectangle(startX,startY,toX-startX,toY-startY)
    }

    drawCircle(event:MouseEvent,startX:number,startY:number){
       const toX = event.clientX;
       const toY = event.clientY; 
       const distance = Math.sqrt((toX-startX)**2 + (toY-startY)**2)
      return this.rc.circle(startX,startY,distance*Math.PI*0.8);
    }

    drawLine(event:MouseEvent,startX:number,startY:number){
         const toX = event.clientX;
         const toY = event.clientY; 
         return this.rc.line(startX,startY,toX,toY)
    }

    drawPencil(event:MouseEvent){
        this.ctx.strokeStyle = "balck"
        this.ctx.lineWidth = 3;
        this.ctx.lineTo(event.offsetX,event.offsetY)
        this.ctx.stroke()
    }

    drawArrow(event:MouseEvent,startX:number,startY:number){
       const toX = event.clientX;
       const toY = event.clientY; 
        this.rc.line(startX, startY, toX, toY);

    // Calculate direction of the line
    const angle = Math.atan2(toY - startY, toX - startX);

    // Arrowhead size
    const headLength = 25;
    const angle1 = angle - Math.PI / 6; // 30 degrees
    const angle2 = angle + Math.PI / 6;

    // Calculate points for arrowhead triangle
    const arrowHead = [
        [toX - headLength * Math.cos(angle1), toY - headLength * Math.sin(angle1)],
        [toX, toY],
        [toX - headLength * Math.cos(angle2), toY - headLength * Math.sin(angle2)]
    ];
    // Draw arrowhead
    this.rc.polygon(arrowHead, { fill: 'black' });
    }
}