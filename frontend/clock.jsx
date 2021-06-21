import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {datezzz: new Date()};
    // this.state always equals into a hash
  }

  componentDidMount(){
    let ticking = setInterval(this.tick.bind(this),1000);
  }
  

  componentWillUnmount(){
    clearInterval(ticking);
  }


  tick(){
    this.setState({
      date: newDate()
    });
  }

  render(){
    return (
    <>
    <h1>rendering clock</h1>,
    <h1>{this.state.datezzz.toString()}</h1>
    </>
    )
  }
}


export default Clock



/////////////////////
