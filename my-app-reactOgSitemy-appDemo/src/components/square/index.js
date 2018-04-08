import React from 'react';
import ReactDOM from 'react-dom';

// class Square extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }
  // render() {
  function Square(props) {
    return (
      <button className="square"
        onClick={() => props.onClick()}>
          {props.value}
      </button>
    );
    // return (
    //   <button className="square"
    //     onClick={() => this.props.onClick()}>
    //     {this.props.value}      
    //   </button>
    // );
  }
//}

export default Square;