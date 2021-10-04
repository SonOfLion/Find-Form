import React,{ useState, useEffect } from 'react';

import './TrackInputVIN.scss';

const TrackInputVIN = () => {
  const [trackInput, setTrackInput] = useState([]);

  useEffect(() => {
    setTrackInput([sessionStorage.getItem('track')])
  },[])

  return (
    <div className="track-input">
      <p className="track-input__title">History of VIN-code</p>
     {
       trackInput && trackInput.map((el, index) => <span key={ index }>{ el }</span>)
     }
    </div>
  );
};

export default TrackInputVIN;