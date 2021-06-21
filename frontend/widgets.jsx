import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

// document.addEventListener(DOMContentLoaded, () => {
// const root = document.getElementById("root");
// ReactDOM.render(<Clock/>,root);
// })

function Root(){
  return (
    <div>
      <Clock/>
    </div>
  )
}


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root/>, root);
})

