import React, { Component } from 'react';
import { Stage} from 'react-konva';

import Cube from './cube';
import NewCube from './newCube';
import Canvas from './canvas';
import ColorPicker from './colorPicker';

//main page
class Home extends Component {



    render() {
      return (
          <div>
            <Stage width={400} height={400}>
                <Cube />
            </Stage>            
            <Canvas />
            <ColorPicker/>
            <NewCube/>
        </div>
      );
    }
  }
  
  export default Home;