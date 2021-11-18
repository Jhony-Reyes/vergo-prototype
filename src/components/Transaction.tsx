import * as React from 'react';
import { Text, VStack, HStack, Center } from 'native-base';
import { Feather } from '@expo/vector-icons';

interface TransactionProps {
  type: 'positive' | 'negative';
  shop: string;
  date: string;
  amount: string;
  concept: string;
}

const Transaction = ({
  type,
  shop,
  concept,
  date,
  amount,
}: TransactionProps) => {
  return (
    <HStack paddingY={3} paddingX={2} alignItems="center">
      <Center
        backgroundColor={type === 'positive' ? '#D3F1DE' : '#FCE1E0'}
        width="40px"
        height="40px"
        rounded="md"
      >
        <Feather
          name={type === 'positive' ? 'arrow-down-left' : 'arrow-up-right'}
          size={22}
          color={type === 'positive' ? '#54C378' : '#F06160'}
        />
      </Center>
      <VStack marginX={2}>
        <Text color="#000" fontFamily="OpenSans-Bold-700">
          {shop}
        </Text>
        <Text color="muted.500">{concept}</Text>
      </VStack>
      <VStack marginLeft="auto" alignItems="flex-end">
        <Text color="#000" fontFamily="OpenSans-SemiBold-600" fontSize="15px">
          {amount}
        </Text>
        <Text fontSize="12px" fontFamily="OpenSans-Light" color="muted.400">
          {date}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Transaction;
