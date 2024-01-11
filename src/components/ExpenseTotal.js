
import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {
    const { expenses, budget ,currency,totalExpenses} = useContext(AppContext);
    
    



    return (
        <div className='alert alert-danger alertWithMinHeight'>

         ExpenseTotal {currency}: {totalExpenses} 
         </div>
    );

}

export default ExpenseTotal ;