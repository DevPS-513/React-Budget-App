
import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
const Remaining = () => {
    const { expenses, budget ,currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost)
    },0)


    return (
        <div className='alert alert-success alertWithMinHeight'>

         Remaining {currency}: {budget-totalExpenses} 
         </div>
    );

}

export default Remaining ;