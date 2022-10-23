import React from 'react'
const successStyle = {
  color: 'green',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
}
const errorStyle = {
  color: 'red',
  background: 'lightgrey',
  font_size: 20,
  border_style: 'solid',
  border_radius: 5,
  padding: 10,
  margin_bottom: 10
}
const Notification = ({ Message }) => {
    if (Message === null) 
    {
      return null
    }
    if (Message.includes('ERROR')){
      return (
        <div style={errorStyle} className="error">
          {Message}
        </div>
      )
    } 
    else 
    {
      return (
        <div style={successStyle} className="error">
          {Message}
        </div>
      )
    }
  }
export default Notification