import React, {useState} from 'react';
import Form from './Form';
import ItemList from './ItemsList';
import logo from './assets/investment-calculator-logo.png';

function App() {


  const calcData = [];



  const [calcDataState, setCalcDataState] = useState('');

  const renderData = (state) => {
	setCalcDataState(state);
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

		<Form dataArray={calcData} renderEvent={renderData}></Form>
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
		  <ItemList itemsArr={calcDataState}/>
      </table>
    </div>
  );
}

export default App;
