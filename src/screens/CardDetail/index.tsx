import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text, HStack, VStack, FlatList } from 'native-base';
import { Layout, CreditCard, Transaction } from '../../components';
import { CardDetailScreenProps, TransactionType } from '../../types';
import DataSection from './DataSection';
import ActionButton from './ActionButton';
import TransactionContex, {
  TransactionContextType,
} from '../../context/Transactions/Context';

const CardDetail = ({ route, navigation }: CardDetailScreenProps) => {
  const { allTransactions } =
    useContext<TransactionContextType>(TransactionContex);

  const selectedTransactions = allTransactions.find(
    i => i.cardId === route.params?.id,
  );

  const renderTransaction = ({ item }: { item: TransactionType }) => (
    <Transaction
      type={item.type}
      shop={item.shop}
      amount={item.amount}
      date={item.date}
      concept={item.concept}
    />
  );

  const keyExtraxtor = (item, idx: number) => idx.toString();

  return (
    <Layout>
      <HStack alignItems="flex-end">
        <CreditCard
          type={route.params?.type}
          balance={route.params?.balance}
          projectName="Balance"
          isPressable={false}
        />
        <VStack marginLeft={4} flex={1} alignItems="flex-end">
          <Text fontSize="xl" backgroundColor="#FFF">
            Card details
          </Text>
          <DataSection title="Account" value={route.params?.account} />
          <DataSection title="CLABE" value={route.params?.CLABE} />
        </VStack>
      </HStack>
      <HStack mt={6} justifyContent="space-between" paddingX={10}>
        <ActionButton
          text="Pay"
          iconName="credit-card"
          onPress={() => navigation.navigate('SendPayment')}
        />
        <ActionButton text="Vouchers" iconName="file-invoice-dollar" />
        <ActionButton text="Settings" iconName="cog" />
      </HStack>
      <VStack mt={6} flex={1}>
        <Text fontSize={18} fontFamily="OpenSans-SemiBold-600">
          Transactions
        </Text>
        <FlatList
          data={selectedTransactions?.transactions}
          renderItem={renderTransaction}
          style={styles.transactionsContainer}
          keyExtractor={keyExtraxtor}
        />
      </VStack>
    </Layout>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  transactionsContainer: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginTop: 8,
    overflow: 'hidden',
    flexGrow: 0,
  },
});
