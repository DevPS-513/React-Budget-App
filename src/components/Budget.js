import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch,currency,totalExpenses,currencies} = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);



  useEffect(() => {
    setNewBudget(budget);
  }, [budget]);

  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };

  const handleCurrencyChange = (event) => {
   // setNewCurrency(event.target.value);
    dispatch({ type: 'CHG_CURRENCY', payload: event.target.value });
    };

  const handleBudgetSubmit = () => {
    console.log(totalExpenses)
    console.log(newBudget)

    if ((Number(newBudget)<=20000)&& (Number(newBudget)>Number(totalExpenses)))
    {
    dispatch({ type: 'SET_BUDGET', payload: Number(newBudget) });
    }    
    else if (Number(newBudget)<=Number(totalExpenses)){
      console.log(totalExpenses)
      alert("You cannot reduce the budget value lower than the spending")

    }
    else {
      alert("The Value Cannot exceed 20000")
    }
  };

  return (
    <div className='alert alert-primary alertWithMinHeight'>
      Budget {currency} <select onChange={handleCurrencyChange}>
         { currencies.map((curr,index) => (
            <option key={index}>{curr}</option>))}

          </select>
      <input type="number" step="1" value={newBudget} onChange={handleBudgetChange}  style={{ width: '75px' }}></input>
      <button onClick={handleBudgetSubmit}>  <i className="fas fa-sync-alt"></i>
</button>
    </div>
  );
}


export default Budget;