import React from 'react';
import './Calculation.css'
const Calculation = (props) => {
  let {vote} = props
  let total = 0;
  let name = []
  // using for of for calculation
  for (const singer of vote) {
    total = total + singer.salary
    name = name + " " + singer.name 
  }
  return (
    <div>
      <div className="calculation ">
        <h3>More Information </h3>
        <p>Person Added : {props.vote.length} </p>
        <p>Total Cost : {total} </p>
        <p>Name: {name} </p>
      </div>

    </div>
  );
};

export default Calculation;