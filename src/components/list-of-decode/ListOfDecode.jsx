import React from 'react';

import './ListOfDecode.scss';

const ListOFDecode = ({ value, variable, valueId }) => {
  return (
    <table className="wrapper-table">
      <caption className="wrapper-table__title">Information of cars</caption>
      <thead>
      <tr className="wrapper-table__display">
        <th className="wrapper-table__description">Value</th>
        <th className="wrapper-table__description">Variable</th>
        <th className="wrapper-table__description">ValueId</th>
      </tr>
      </thead>
      <tbody>
      <tr className="wrapper-table__display">
        <td className="wrapper-table__table-body">{ value }</td>
        <td className="wrapper-table__table-body">{ variable }</td>
        <td className="wrapper-table__table-body">{ valueId }</td>
      </tr>
      </tbody>
    </table>
  );
};

export default ListOFDecode;