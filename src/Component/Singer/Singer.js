import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Info from '../Info/Info';
import './Singer.css'
// declear state 
const Singer = () => {
  const [singer, setSinger] = useState([])
  const [vote, setVote] = useState([])

// getting data 
  useEffect(() => {
      fetch('./generated.JSON')
      .then(res => res.json())
      .then(data=>setSinger(data))
  }, [])
  // event handle
  const eventHandle= (data) => {
    const newVote = [...vote, data]
    setVote(newVote)
  }
  return (
    <div className="singer-container">
      <div className="left-part">
        {
          singer.map(element => <Info
            key={element.name}
            data={element}
            eventHandler={eventHandle}
          ></Info>)         
        }
        
      </div>
      <div className="right-part">
      <Calculation vote={vote}></Calculation>
      </div>
    </div>
  );
};

export default Singer;