import { createContext } from 'react';
import { TransactionsStateProps, initialState } from './Reducer';
import { TransactionType } from '../../types';

export interface TransactionContextType extends TransactionsStateProps {
  fetchTransactions: (transactionsData: TransactionsStateProps) => void;
  addNewTransaction: (transaction: TransactionType) => void;
}

/* Context */
const TransationContext = createContext<TransactionContextType>({
  ...initialState,
  fetchTransactions: () => {},
  addNewTransaction: () => {},
});

export default TransationContext;
