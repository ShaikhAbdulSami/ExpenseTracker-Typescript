import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalState'
import { TransactionType } from '../Types';


export const Transaction: React.FC<TransactionType> = ({id, text, amount}) => {
    const { deleteTransaction } = useContext(GlobalContext);


  const sign = amount < 0 ? '-' : '+';

  return (
    <li className={amount < 0 ? 'minus' : 'plus'}>
      {text} <span>{sign}Rs: {Math.abs(amount)}</span><button onClick={() => deleteTransaction(id)} className="delete-btn">x</button>
    </li>
  )
}

export default Transaction; 