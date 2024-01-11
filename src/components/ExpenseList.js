
import React, {useContext,useState} from 'react';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';


const ExpenseList = () =>{

const { expenses, dispatch ,currency} = useContext(AppContext);


return (
    <div>
        <table className = "table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                    <th>Increment by 10</th>
                    <th>Decrement by 10</th>

                </tr>
            </thead>
            <tbody>
            {expenses.map((expense,index) =>  (
    <tr key={expense.id}>
      <td>{expense.name}</td>
      <td>{currency}{expense.cost}</td>
      <td>
      <button onClick={() => dispatch({ type: 'ADD_EXPENSE', payload: { name: expense.name, cost: 10 } })}>
      <FontAwesomeIcon icon={faPlus} color="black" style= {{backgroundColor:'green'}} /></button>
        </td>
        <td>
      <button onClick={() => dispatch({ type: 'RED_EXPENSE', payload: { name: expense.name, cost: 10 } })}>
      <FontAwesomeIcon icon={faMinus} color="black" style= {{backgroundColor:'red'}} /></button>
        </td>

    </tr>
  ))}


            </tbody>
        </table>
    </div>

);


 
};

export default ExpenseList;