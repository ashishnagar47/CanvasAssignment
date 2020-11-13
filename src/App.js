//import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Canvas from './Canvas'


function App() {
  
      let [color,setColor]=useState("blue")
      

      function redColor(){
         setColor("red")
     }
 
     function blueColor(){
       setColor("blue")
     }
 
     function yellowColor(){
       setColor("yellow")
     }
     function greenColor(){
       setColor("green")
     }

    

   
   return (
     <div className="App">
       <div className="color" >
         
             <div type="button"  className="red" onClick={redColor} ></div>
             <div type="button"  className="green" onClick={greenColor} ></div>
             <div type="button"  className="yellow" onClick={yellowColor} ></div>
             <div type="button"  className="blue" onClick={blueColor}></div>
             
       </div>
       <Canvas color={color}>
       
       </Canvas>
       
    </div>
  );
}

export default App;
