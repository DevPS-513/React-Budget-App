
import React, {useContext,useState, useEffect} from 'react';
import { AppContext } from '../context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';


const Allocation = () =>{

const { expenses, dispatch,currency } = useContext(AppContext);
const [selectedExpense, setSelectedExpense] = useState('');
const [selectedAmount, setSelectedAmount] = useState(0);
const [inputFieldNumber, setInputFieldNumber] = useState(0);

useEffect(() => {
    if (expenses.length > 0) {
      setSelectedExpense(expenses[0].name);
    }
  }, [expenses]);


return (
  <div>
    <div className="row mt-3">
      <div className="col-sm">
        <div className="text-center">
          <p>Enter Department:</p>
        </div>

        <div className="alert alert-secondary">
          {/* Define a listbox that has every expense type */}
          <select onChange={(e) => setSelectedExpense(e.target.value)}>
            {expenses.map((expense, index) => (
              <option key={index} value={expense.name}>
                {expense.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="col-sm">

      <div className="text-center">
          <p>Allocation Amount:</p>
        </div>


        <div className="alert alert-secondary ">
        <span>{currency}</span>

          <input
            type="text"
            step="1"
            value={inputFieldNumber}
            style={{ width: "75px" }}
            onChange={(e) => setInputFieldNumber(Number(e.target.value))}
          ></input>
          <button style={{ backgroundColor: "DeepSkyBlue"}}
            onClick={() =>{
                if (isNaN(inputFieldNumber))
                {
                    alert('Please enter a number');

                } else {}
              dispatch({
                type: "ADD_EXPENSE",
                payload: {
                  name: selectedExpense,
                  cost: Number(inputFieldNumber),
                },
              })
            }}
          >
            Save
          </button>
          </div>
      </div>
      </div>
    </div>
);


 
};

export default Allocation;