import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useContext } from 'react';

import { Home, CardDetail, SendPayment } from '../screens';
import { RootStackParamList } from '../types';
import { getData } from '../utils/asyncStorage';
import TransactionContex, {
  TransactionContextType,
} from '../context/Transactions/Context';

export default function Navigation() {
  const { fetchTransactions } =
    useContext<TransactionContextType>(TransactionContex);

  useEffect(() => {
    getData('transactions').then(asyncTransactions => {
      if (asyncTransactions) {
        fetchTransactions(asyncTransactions);
      }
    });
  }, []);
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontFamily: 'OpenSans-SemiBold-600',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: 'left',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CardDetail"
        component={CardDetail}
        options={({ route }) => ({
          title: route.params.projectName,
        })}
      />
      <Stack.Screen
        name="SendPayment"
        component={SendPayment}
        options={{
          title: 'Transfer or Pay',
        }}
      />
    </Stack.Navigator>
  );
};
