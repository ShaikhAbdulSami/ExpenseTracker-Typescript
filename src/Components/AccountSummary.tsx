import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'

export const AccountSummary = () => {
    const { transactions } = useContext(GlobalContext);
  
    const amounts = transactions.map(transaction => transaction.amount);
  
    const income = amounts
      .filter(item => item > 0)
      .reduce((acc, item) => (acc += item), 0)
      .toFixed(2);
  
    const expense = (
      amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
      -1
    ).toFixed(2);
  
  
    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4 className="income"><b>Income</b></h4>
                    <p className="money plus"><strong>{income} PKR</strong></p>
                </div>
                <div>
                    <h4 className="expense"><b>Expense</b></h4>
                    <p className="money minus"><strong>{expense} PKR</strong></p>
                </div>
            </div>
        </div>
    )
}

export default AccountSummary;