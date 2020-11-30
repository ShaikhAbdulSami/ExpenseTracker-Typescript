import React, { useContext } from 'react';
import Transaction from './Transaction'

import { GlobalContext } from '../Context/GlobalState'

 function TransactionsHistory() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
        <h4>History</h4>
        <hr/>
        <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id}
        id={transaction.id}
        text={transaction.text}
        amount={transaction.amount} />))}  
        </ul>
      </>
    )
}

export default TransactionsHistory;