
import React from 'react'

import  {useState,useRef,useEffect} from 'react';
import jsPDF from 'jspdf'


export default function Canvas(props) {

 const canvasRef=useRef(null);
 const contextRef=useRef(null);
 const [isDrawing,setIsDrawing]=useState(false);
let canvas=canvasRef.current;
 useEffect(()=>{
    canvas=canvasRef.current;
   canvas.width=window.innerWidth/2;
   canvas.height=window.innerHeight/2;
    canvas.style.width= `$(window.innerWidth)px`;
   canvas.style.height=`$(window.innerHeight)px`;

   const context= canvas.getContext('2d');
   context.lineCap="round";
   context.lineWidth=5;
   contextRef.current=context;

 },[])

 const startDrawing=({nativeEvent})=>{
     const {offsetX, offsetY}=nativeEvent;
     contextRef.current.beginPath();
     contextRef.current.moveTo(offsetX,offsetY);
     setIsDrawing(true);
 }

 const stopDrawing=()=>{
     contextRef.current.closePath()
     setIsDrawing(false);

 }
let pdf;
 function printCanvas() {
    let width = canvas.width; 
    let height = canvas.height;

    var doc=new jsPDF();
   
    if(width > height){
      pdf = new jsPDF('l', 'px', [width, height]);
    }
    else{
      pdf = new jsPDF('p', 'px', [height, width]);
    }
    
    width = doc.internal.pageSize.getWidth();
    height = doc.internal.pageSize.getHeight();
    pdf.addImage(canvas, 'PNG', 0, 0,width+500,height);
    pdf.save("download.pdf");
  }

 const draw=({nativeEvent})=>{
     if(!isDrawing){
       return;
     }
     const{offsetX,offsetY}=nativeEvent;
     contextRef.current.lineTo(offsetX,offsetY);
     contextRef.current.stroke()
     contextRef.current.strokeStyle=props.color
 }
   return (
       <div  >
           <canvas className="Canvas"
               onMouseDown={startDrawing}
               onMouseUp={stopDrawing}
               onMouseMove={draw}
               ref={canvasRef}
           />
           <button className="download" id="pdf" onClick={printCanvas}>Download the PDF</button>
       </div>
   )
}
