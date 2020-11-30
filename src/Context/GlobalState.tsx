import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import {TransactionType} from '../Types'

// Create the initial state
const initialState = {
    transactions: [
        {id:1, text:"Books", amount:20}
    ] ,
    deleteTransaction : (id: number) => {},
    addTransaction : (transaction: TransactionType) => {}
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

        // Delete Existing Transaction Action
        function deleteTransaction(id: number) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                id
            });
        }

        // Add New Transaction Action
        function addTransaction(transaction: TransactionType) {
            dispatch({
                type: 'ADD_TRANSACTION',
                transaction
            })
        }

        return (<GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
          }}>
            {children}
          </GlobalContext.Provider>);

}