export type TransactionType = {
    id: number;
    text: string;
    amount: number;
}

export type TransactionsArray = {
    transactions: TransactionType[];
}