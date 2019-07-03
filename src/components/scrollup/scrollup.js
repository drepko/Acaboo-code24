import React from "react"
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button"

export default class ScrollToTop extends React.Component {
  render() {
    const styles = {
      backgroundColor: '#2D66F6',
      border: '#2D66F6',
      height: 37,
      width: 37,
      padding: 5,
      cursor: 'pointer',
      stroke: '#2D66F6',
      fill: '#FFFFFF'
    }
  
    return (
      <div>
        <ScrollUpButton style={styles} />
      </div>
    )
  }
}