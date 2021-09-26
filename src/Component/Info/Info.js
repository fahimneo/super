import React from 'react';
import './Info.css'
// font awesome icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Info = (props) => {
//destructring 
  const {img,name,role,country,age,salary}=(props.data); 
  return (
    <div className='parent'>
      <div className="info">
        <div className='person'>
        <img src={img} className='img-fluid' alt="" />
          <h2>{name} </h2>
           <p>Role : {role} </p>
          <p>Country : {country}</p>
          <p>Age : {age}</p>
          <p>Salary : ${salary} </p>
          <button className="btn-singer" onClick={() => props.eventHandler(props.data)} >   
              <FontAwesomeIcon icon={faMusic} /> See More </button>
        </div>   
        </div>
    </div >
  );
};

export default Info;


