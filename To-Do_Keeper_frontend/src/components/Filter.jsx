import React from 'react';

import './Filter.css';
// import ExpensesChart from './ExpensesChart';

const Filter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='expenses-filter card'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2021'>2021</option>
          <option value='2022'>2022</option>
          <option value='2023'>2023</option>
          <option value='2024'>2024</option>
        </select>
      </div>
{/* <ExpensesChart expenses={props.data}/> */}
    </div>
  );
};

export default Filter;
