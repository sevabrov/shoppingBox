import React, {Component} from 'react';


class NewCube extends Component {

    componentDidMount() {
        const canvas1 = this.refs.canvas1;
        const canvas2 = this.refs.canvas2;
        const canvas_context1 = canvas1.getContext("2d")
        const canvas_context2 = canvas2.getContext("2d")

        // Сместим начало координат в центр блока
        canvas_context1.translate(canvas1.width / 2, canvas1.height / 2);
        canvas_context2.translate(canvas2.width / 2, canvas2.height / 2);
        
      }      


      render() {
        console.log(this)
        return(
          <div>
            <canvas ref="canvas1" width={640} height={425} />
            <canvas ref="canvas2" width={640} height={425} />
          </div>
        )
      }
    }

export default NewCube;
