import React from 'react'
import { ChromePicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: 'rgba(255,0,0,1)'
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChangeComplete = (color) => {
    console.log(color)
    this.setState({ color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b},${color.rgb.a})` });
  };  

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (
      <div>
        <button onClick={ this.handleClick } style={{'background': this.state.color}}>Pick Color</button>
        { this.state.displayColorPicker ? <div style={ popover }>
          <div style={ cover } onClick={ this.handleClose }/>
          <ChromePicker color={this.state.color} onChangeComplete={ this.handleChangeComplete }/>
        </div> : null }
      </div>
    )
  }
}

export default ColorPicker;