import { useState } from 'react';
import axios from 'axios';

import { baceUrl } from '../api/Api';

import './FormFind.scss';

const FormFind = () => {
  const [input, setInput] = useState('');
  const [cars, setCars] = useState([]);

  const handleRequest = async () => {
    const getCars = `${baceUrl}/vehicles/decodevin/${input}?format=json`;

    await axios(getCars)
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
          onSubmit={ handleSubmit }
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
        { cars && cars.map((el) => { return (<div>{ el.data }</div>)} )}
      </div>

    </>
  );
};

export default FormFind;