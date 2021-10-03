import React, { useState, useEffect } from 'react';

import './TrackInputVIN.scss';

const TrackInputVIN = () => {
  const [renderSessionStorage, setRenderSessionStorage] = useState([]);

  useEffect(() => {
    setRenderSessionStorage([sessionStorage.getItem('inputVIN')]);
  },[]);

  console.log(renderSessionStorage)
  return (
    <div className="track-input">
      <p className="track-input__title">History of VIN-code</p>
     {
       renderSessionStorage && renderSessionStorage.map((el, index) =>
         <span key={index}>{ el }</span>)
     }
    </div>
  );
};

export default TrackInputVIN;