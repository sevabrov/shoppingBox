import React, { Component } from 'react';
import { Layer, Shape } from 'react-konva';

//variables for cube 
const x =400/2,//800
      y = 400/2 + 100/2,//434
      wx = 100,
      wy = 100,
      h = 100;

//Drow cube
class Cube extends Component {
  
  render() {
    return (
      <Layer       
        draggable
      >
      <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x - wx, y - wx * 0.5);
            context.lineTo(x - wx, y - h - wx * 0.5);
            context.lineTo(x, y - h * 1);
            context.closePath();     
            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape);     
          }}          
          fill='red'
          stroke="black"
          strokeWidth={1}
        />
        <Shape
          sceneFunc={(context, shape) => {  
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + wy, y - wy * 0.5);
            context.lineTo(x + wy, y - h - wy * 0.5);
            context.lineTo(x, y - h * 1);
            context.closePath();
            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape);     
          }}          
          fill='blue'
          stroke="black"
          strokeWidth={1}
        />
        <Shape
          sceneFunc={(context, shape) => {  
            context.beginPath();
            context.moveTo(x, y - h);
            context.lineTo(x - wx, y - h - wx * 0.5);
            context.lineTo(x - wx + wy, y - h - (wx * 0.5 + wy * 0.5));
            context.lineTo(x + wy, y - h - wy * 0.5);
            context.closePath();
            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape);     
          }}          
          fill='green'
          stroke="black"
          strokeWidth={1}
        />
        </Layer>
    );
  }
}

export default Cube;
