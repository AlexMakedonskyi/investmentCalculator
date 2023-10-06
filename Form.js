import React, {useState} from "react";
import Buttons from "./Buttons";


function Form(props) {



  const [userInputDuration, setInputDuration] = useState('');
  const [userInputCurrentSavings, setInputCurrentSavings] = useState('');
  const [userYearlySavings, setYearlySavings] = useState('');
  const [userINterest, setINterest] = useState('');


 const submitedForm = () => {
	let currentSavings = +userInputCurrentSavings; 
	const yearlyContribution = +userYearlySavings; 
	const expectedReturn = +userINterest / 100;
	const duration = +userInputDuration;
	let yearlyInvest = yearlyContribution + (+userInputCurrentSavings) - yearlyContribution;
	let totalInterest = 0;


	for (let i = 0; i < duration; i++) {
		yearlyInvest += yearlyContribution;
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
		totalInterest += yearlyInterest;
		
      props.dataArray.push({
        
		  key: Math.random(),
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
		  totalInterestArr: totalInterest,
        yearlyContribution: yearlyInvest,
      });
    }
	 props.renderEvent(props.dataArray);
 }

  const currentSavingsInputHandler = (event) => {
	setInputCurrentSavings(+event.target.value);
  }

  const inputDurationHandler = (event) => {
	setInputDuration(+event.target.value);
  }

  const yearlySavingsHandler = (event) => {
	setYearlySavings(+event.target.value);
  }

  const iNterestInputHandler = (event) => {
	setINterest(+event.target.value);
  }

 
const resetUserInputs = () => {
	setInputCurrentSavings('');
	setInputDuration('');
	setYearlySavings('');
	setINterest('');
}


  return (
    <form className="form" onChange={props.renderEvent}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" id="current-savings" value={userInputCurrentSavings} onChange={currentSavingsInputHandler}/>
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" id="yearly-contribution" value={userYearlySavings} onChange={yearlySavingsHandler}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" id="expected-return" value={userINterest} onChange={iNterestInputHandler}/>
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" id="duration" value={userInputDuration} onChange={inputDurationHandler}/>
        </p>
      </div>
		
      <p className="actions">
		<Buttons clearInputsHandler={resetUserInputs} submitForm={submitedForm}/>
      </p>
		
    </form>
  );
}

export default Form;
