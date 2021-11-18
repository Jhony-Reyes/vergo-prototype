import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import {
  Text,
  VStack,
  Box,
  FlatList,
  ScrollView,
  HStack,
  Button,
} from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Layout, CreditCardItem, Transaction } from '../../components';
import { CardInfo, HomeScreenProps } from '../../types';
import UserContext, { UserContextType } from '../../context/User/Context';
import TransactionContex, {
  TransactionContextType,
} from '../../context/Transactions/Context';

const Home = (props: HomeScreenProps) => {
  const {
    userData: { info },
    cards,
  } = useContext<UserContextType>(UserContext);

  const { totalBalance, lastTransactions } =
    useContext<TransactionContextType>(TransactionContex);

  const renderItem = ({ item }: { item: CardInfo }) => (
    <CreditCardItem data={item} />
  );

  const renderItemSeparator = () => <Box width={4} />;

  const keyExtractor = (item, idx: number) => idx.toString();

  return (
    <SafeAreaView style={styles.container}>
      <Layout>
        <VStack flex={1}>
          <Text fontSize={16} color="#FFF" mt={1}>
            Hello
          </Text>
          <Text style={styles.userName}>{info.name}!</Text>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Box alignItems="center" marginY={5}>
              <Text fontFamily="OpenSans-Light" color="muted.500" fontSize="md">
                Total balance
              </Text>
              <Text mt={2} fontSize="2xl" fontFamily="OpenSans-Bold-700">
                $ {totalBalance}
              </Text>
            </Box>
            <Text fontSize={18} fontFamily="OpenSans-SemiBold-600">
              My Cards
            </Text>
            <FlatList
              data={cards}
              renderItem={renderItem}
              horizontal
              ItemSeparatorComponent={renderItemSeparator}
              showsHorizontalScrollIndicator={false}
              style={styles.cardsContainer}
              keyExtractor={keyExtractor}
            />
            <HStack
              alignItems="center"
              marginTop={5}
              justifyContent="space-between"
            >
              <Text fontSize={18} fontFamily="OpenSans-SemiBold-600">
                Last Transactions
              </Text>
              <Button pb={0} pt={0} variant="link">
                See all
              </Button>
            </HStack>
            <Box style={styles.transactionsContainer}>
              {lastTransactions.map(item => (
                <Transaction
                  type={item.type}
                  shop={item.shop}
                  date={item.date}
                  amount={item.amount}
                  concept={item.concept}
                  key={item.id}
                />
              ))}
            </Box>
            <HStack
              alignItems="center"
              marginTop={5}
              justifyContent="space-between"
            >
              <Text fontSize={18} fontFamily="OpenSans-SemiBold-600">
                Last Payments
              </Text>
              <Button pb={0} pt={0} variant="link">
                See all
              </Button>
            </HStack>
            <Box style={styles.transactionsContainer}>
              {lastTransactions.map(item => (
                <Transaction
                  type={item.type}
                  shop={item.shop}
                  date={item.date}
                  amount={item.amount}
                  concept={item.concept}
                  key={item.id}
                />
              ))}
            </Box>
          </ScrollView>
        </VStack>
      </Layout>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  cardsContainer: {
    marginTop: 16,
  },
  userName: {
    fontFamily: 'OpenSans-Bold-700',
    fontSize: 18,
    color: '#FFF',
    marginBottom: 8,
  },
  transactionsContainer: {
    marginTop: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    flex: 1,
  },
});
