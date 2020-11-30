import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    // Local Context
    const [text, setText] = useState('');
    const [amount, setAmount] = useState();
    
    // Create transaction on form submit
    const onSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.ceil(Math.random() * 9999),
            text,
            amount: +amount,
        }
        addTransaction(newTransaction);
    }
    
    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <input
                type="text"
                name="title"
                placeholder="Enter Text..."
                value={text}
                required={true}
                onChange={(e) => {setText(e.target.value)}}
                />
                <br />
                <br />
                
                <input
                type="number"
                name="amount"
                placeholder="Enter Amount..."
                value={amount}
                onChange={(e) => {setAmount(Number(e.target.value))}}
                />

                <button
                className="btn"
                data-testid="submit-button">
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTransaction