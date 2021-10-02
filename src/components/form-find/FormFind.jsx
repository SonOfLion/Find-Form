import { useState } from 'react';
// import axios from 'axios';

// import { baceUrl } from '../../api/baceUrl';
// import ListOfDecode from '../list-of-decode/ListOfDecode';

import './FormFind.scss';

const FormFind = () => {
  const [input, setInput] = useState('1FTFW1CT5DFC10312');
  const [cars, setCars] = useState([]);

  const handleRequest = async () => {
    const getCars =  `https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${ input }?format=json`;

    await fetch(getCars)
      .then(res => res.json())
      .then(data => console.log(data))
      .then(data => setCars(data))
      .catch(error => alert(error))
  };

  const handleChange = (e) => {
    const reg = /^[a-zA-Z0-9]+$/;

    if (e.target.value === '' || reg.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  console.log(cars)

  const handleSubmit = (e) => {
    handleRequest();
    setInput('');
    e.preventDefault();
  };

  return (
    <>
      <div className="wrapper-find">
        <form
          className="form-find"
          onClick={ () => handleSubmit }
        >
          <input
            value={ input }
            onChange={ handleChange }
            className="form-find__input"
            maxLength={ 17 }
            minLength={ 1 }
            type={ "text" }
            required placeholder={ "Enter VIN code" }
          />
          <button
            className="form-find__btn"
          >
            decode
          </button>
        </form>

      </div>
      { cars.elements && cars.elements.map((el) => { return (<div>{ el.data }</div>)} )}
    </>
  );
};

export default FormFind;