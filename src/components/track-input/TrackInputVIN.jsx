import React,{ useContext } from 'react';
import { TrackInput } from "../../context";

import './TrackInputVIN.scss';

const TrackInputVIN = () => {
  const [trackState, dispatch] = useContext(TrackInput);
  console.log(trackState)

  return (
    <section className="track-input">
      <p className="track-input__title">History of VIN-code</p>
     {
       trackState.track && trackState.track.slice(1, 9).map((el, index) =>
         <span className="track-input__element" key={ index }>{ el.text }&nbsp;</span>)
     }
    </section>
  );
};

export default TrackInputVIN;

// useEffect(() => {
//   setTrackInput([sessionStorage.getItem('track')])
// },[])