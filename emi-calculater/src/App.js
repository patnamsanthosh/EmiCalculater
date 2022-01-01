import './App.css';
import Tab from './components/Tabs';
import { Component } from 'react';
import Tabs from "./components/Tabs";
import LoanAmount from './components/LoanAmount';

export default class App extends Component {
  render() {
    return (
      <div>
      <h1>EMI Calculater</h1>
      <Tabs>
        <div label="Home Loan">
          <div className='loanclass'>
          <LoanAmount></LoanAmount>
          </div>
         


        </div>
        <div label="Personal Loan">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Vehcle Loan">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
    </div>
    );
  }
 
}

