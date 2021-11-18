import { saveData } from '../../utils/asyncStorage';
import { TransactionType } from '../../types';

/* Typescript types */
export type TransactionsStateProps = {
  lastTransactions: TransactionType[];
  allTransactions: {
    cardId: number;
    transactions: TransactionType[];
  }[];
  totalBalance: string;
};

interface FetchTransactionFullfilledType {
  type: typeof FETCH_TRANSACTION_FULLFILLED;
  payload: TransactionsStateProps;
}

interface AddTransactionType {
  type: typeof ADD_TRANSACTION;
  payload: TransactionType;
}

type TransactionsActionTypes =
  | FetchTransactionFullfilledType
  | AddTransactionType;

/* Initial state */
export const initialState: TransactionsStateProps = {
  lastTransactions: [
    {
      shop: 'Amazon MX',
      date: '14-11-2021',
      amount: '100.00',
      concept: 'Subscription',
      type: 'negative',
      id: 1,
      cardId: 1,
    },
    {
      shop: 'Esteban Garza',
      date: '14-11-2021',
      amount: '1200.53',
      concept: 'Payment',
      type: 'positive',
      id: 2,
      cardId: 1,
    },
    {
      shop: 'Walmart',
      date: '14-11-2021',
      amount: '4570.12',
      concept: 'Some concept',
      type: 'negative',
      id: 3,
      cardId: 1,
    },
    {
      shop: 'Netflix',
      date: '14-11-2021',
      amount: '99.99',
      concept: 'Subscription',
      type: 'negative',
      id: 4,
      cardId: 2,
    },
  ],
  allTransactions: [
    {
      cardId: 1,
      transactions: [
        {
          shop: 'Amazon MX',
          date: '14-11-2021',
          amount: '100.00',
          concept: 'Subscription',
          type: 'negative',
          id: 1,
          cardId: 1,
        },
        {
          shop: 'Esteban Garza',
          date: '14-11-2021',
          amount: '1200.53',
          concept: 'Payment',
          type: 'positive',
          id: 2,
          cardId: 1,
        },
        {
          shop: 'Walmart',
          date: '14-11-2021',
          amount: '4570.12',
          concept: 'Some concept',
          type: 'negative',
          id: 3,
          cardId: 1,
        },
        {
          shop: 'Francisco Mendoza',
          date: '12-11-2021',
          amount: '1670.53',
          concept: 'Payment',
          type: 'positive',
          id: 4,
          cardId: 1,
        },
        {
          shop: 'Netflix',
          date: '12-11-2021',
          amount: '99.99',
          concept: 'Subscription',
          type: 'negative',
          id: 5,
          cardId: 1,
        },
        {
          shop: 'Ana Lago',
          date: '11-11-2021',
          amount: '199.99',
          concept: 'Transfer',
          type: 'negative',
          id: 6,
          cardId: 1,
        },
        {
          shop: 'Alex Luna',
          date: '11-11-2021',
          amount: '1670.53',
          concept: 'Payment',
          type: 'positive',
          id: 7,
          cardId: 1,
        },
        {
          shop: 'Netflix',
          date: '10-11-2021',
          amount: '99.99',
          concept: 'Subscription',
          type: 'negative',
          id: 8,
          cardId: 1,
        },
        {
          shop: 'Ana Lago',
          date: '09-11-2021',
          amount: '199.99',
          concept: 'Transfer',
          type: 'negative',
          id: 9,
          cardId: 1,
        },
      ],
    },
    {
      cardId: 2,
      transactions: [
        {
          shop: 'Netflix',
          date: '12-11-2021',
          amount: '99.99',
          concept: 'Subscription',
          type: 'negative',
          id: 1,
          cardId: 2,
        },
        {
          shop: 'Esteban Garza',
          date: '14-11-2021',
          amount: '1200.53',
          concept: 'Payment',
          type: 'positive',
          id: 2,
          cardId: 2,
        },
        {
          shop: 'Soriana',
          date: '14-11-2021',
          amount: '4570.12',
          concept: 'Some concept',
          type: 'negative',
          id: 3,
          cardId: 2,
        },
        {
          shop: 'Arturo Mendoza',
          date: '12-11-2021',
          amount: '1670.53',
          concept: 'Payment',
          type: 'positive',
          id: 4,
          cardId: 2,
        },
        {
          shop: 'Macky Lago',
          date: '11-11-2021',
          amount: '199.99',
          concept: 'Transfer',
          type: 'negative',
          id: 5,
          cardId: 2,
        },
        {
          shop: 'Otoniel García',
          date: '11-11-2021',
          amount: '1670.53',
          concept: 'Payment',
          type: 'positive',
          id: 6,
          cardId: 2,
        },
      ],
    },
    {
      cardId: 3,
      transactions: [
        {
          shop: 'Telmex',
          date: '12-11-2021',
          amount: '99.99',
          concept: 'Subscription',
          type: 'negative',
          id: 1,
          cardId: 3,
        },
        {
          shop: 'Armando Olán',
          date: '14-11-2021',
          amount: '1200.53',
          concept: 'Payment',
          type: 'positive',
          id: 2,
          cardId: 3,
        },
        {
          shop: 'Chedraui',
          date: '14-11-2021',
          amount: '4570.12',
          concept: 'Some concept',
          type: 'negative',
          id: 3,
          cardId: 3,
        },
        {
          shop: 'María Mendoza',
          date: '12-11-2021',
          amount: '1670.53',
          concept: 'Payment',
          type: 'positive',
          id: 4,
          cardId: 3,
        },
        {
          shop: 'Francisco Sánchez',
          date: '11-11-2021',
          amount: '199.99',
          concept: 'Transfer',
          type: 'negative',
          id: 5,
          cardId: 3,
        },
        {
          shop: 'Lucía Villalobos',
          date: '11-11-2021',
          amount: '1670.53',
          concept: 'Payment',
          type: 'positive',
          id: 6,
          cardId: 3,
        },
      ],
    },
  ],
  totalBalance: '1,523,034.98',
};

/* Reducer Types */
const FETCH_TRANSACTION_FULLFILLED = 'FETCH_TRANSACTION_FULLFILLED';
const ADD_TRANSACTION = 'ADD_TRANSACTION';

/* Reducer */
const reducer = (prevState = initialState, action: TransactionsActionTypes) => {
  switch (action.type) {
    case FETCH_TRANSACTION_FULLFILLED:
      saveData('transactions', action.payload);
      return {
        ...prevState,
        ...action.payload,
      };
    case ADD_TRANSACTION:
      const { lastTransactions, allTransactions } = prevState;

      const transactionsByCardID = allTransactions.map(i => {
        if (i.cardId === action.payload.cardId) {
          return {
            ...i,
            transactions: [action.payload, ...i.transactions],
          };
        }
        return i;
      });

      const newLastTransactions = lastTransactions.filter(
        (i, idx) => idx < lastTransactions.length - 1,
      );

      const newData = {
        lastTransactions: [action.payload, ...newLastTransactions],
        allTransactions: transactionsByCardID,
      };
      saveData('transactions', {
        ...prevState,
        ...newData,
      });
      return {
        ...prevState,
        ...newData,
      };
    default:
      return prevState;
  }
};

export default reducer;
