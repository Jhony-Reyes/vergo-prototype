import { StatusBar } from 'expo-status-bar';
import React, { useReducer, useMemo } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NativeBaseProvider } from 'native-base';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import theme from './src/config/theme';
import { UserContext, UserReducer } from './src/context/User';
import {
  TransactionContext,
  TransactionReducer,
} from './src/context/Transactions';

export default function App() {
  const [userState, userDispatch] = useReducer(
    UserReducer.default,
    UserReducer.initialState,
  );
  const [transactionState, transactionDispatch] = useReducer(
    TransactionReducer.default,
    TransactionReducer.initialState,
  );
  const isLoadingComplete = useCachedResources();

  const userContextValue = useMemo<UserContext.UserContextType>(
    () => ({
      ...userState,
      logIn: userData => {
        userDispatch({
          type: 'LOG_IN',
          payload: userData,
        });
      },
    }),
    [userState],
  );

  const transactionContextValue =
    useMemo<TransactionContext.TransactionContextType>(
      () => ({
        ...transactionState,
        fetchTransactions: transactionsData => {
          transactionDispatch({
            type: 'FETCH_TRANSACTION_FULLFILLED',
            payload: transactionsData,
          });
        },
        addNewTransaction: transaction => {
          transactionDispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction,
          });
        },
      }),
      [transactionState],
    );

  if (!isLoadingComplete) {
    return null;
  }

  return (
    <UserContext.default.Provider value={userContextValue}>
      <TransactionContext.default.Provider value={transactionContextValue}>
        <SafeAreaProvider>
          <NativeBaseProvider theme={theme}>
            <Navigation />
            <StatusBar style="light" />
          </NativeBaseProvider>
        </SafeAreaProvider>
      </TransactionContext.default.Provider>
    </UserContext.default.Provider>
  );
}
