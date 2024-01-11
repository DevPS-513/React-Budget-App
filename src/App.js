import React from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Import Budget components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal.js';
import Allocation from './components/AllocationForm.js';



import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList.js';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>

                               
                    <div className='row mt-3'>
                        
                               {/* Budget component */}
                    <div className='col-sm'>
                    <Budget />
                    </div>
                    <div className='col-sm'>
                    <Remaining/> 
                    </div>
                    <div className='col-sm'>
                    <ExpenseTotal/> 
                    </div>                         
                       <ExpenseList></ExpenseList>
                                

                    <Allocation/>

                   

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
