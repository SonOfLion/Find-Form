import { useState } from 'react';
import axios from 'axios';

import { baseUrl } from '../api/Api';
import ListOfDecode from '../list-of-decode/ListOfDecode';
import TrackInputVIN from '../track-input/TrackInputVIN';

import './FormFind.scss';

const FormFind = ({ save }) => {
  const [inputVIN,setInputVIN] = useState('');
  const [infoCar,setInfoCars] = useState([]);

  const handleRequest = async () => {
    const getCars = `${ baseUrl }/vehicles/decodevin/${ inputVIN }?format=json`;

    await axios(getCars)
      .then(data => setInfoCars(data.data.Results))
      .catch(error => alert(error))
  };

  const handleChange = (e) => {
    const reg = /^[a-zA-Z0-9]+$/;

    sessionStorage.setItem('track', e.target.value);

    if (e.target.value === '' || reg.test(e.target.value)) {
      setInputVIN(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    handleRequest();
    setInputVIN('');
    e.preventDefault();
  };

  return (
    <div className="wrapper-find">
      <form
        className="form-find"
        onSubmit={handleSubmit}
      >
        <input
          value={ inputVIN }
          onChange={ handleChange }
          className="form-find__input"
          maxLength={ 17 }
          minLength={ 1 }
          type="text"
          required placeholder={"Enter VIN code"}
        />
        <button className="form-find__btn">
          decode
        </button>
      </form>
      {
        infoCar.length > 0 && infoCar.map(({ Value,ValueId,Variable,VariableId }) =>
        <ListOfDecode key={ VariableId } value={ Value } variable={ Variable } valueId={ ValueId } />)
      }
      <TrackInputVIN inputVIN={ inputVIN }/>
    </div>
  );
};

export default FormFind;