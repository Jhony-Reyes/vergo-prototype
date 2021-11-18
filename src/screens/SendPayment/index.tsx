import React, { useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import {
  ScrollView,
  FormControl,
  Input,
  Select,
  CheckIcon,
  Icon,
  Button,
  Modal,
  Text,
} from 'native-base';

import { FontAwesome } from '@expo/vector-icons';
import { Layout } from '../../components';
import PaymentAnimation from './PaymentAnimation';
import { SendPaymentScreenProps } from '../../types';
import fakeBanksData from './utils';
import UserContext, { UserContextType } from '../../context/User/Context';
import TransactionContex, {
  TransactionContextType,
} from '../../context/Transactions/Context';

const SendPayment = ({ navigation }: SendPaymentScreenProps) => {
  const { cards } = useContext<UserContextType>(UserContext);
  const { addNewTransaction } =
    useContext<TransactionContextType>(TransactionContex);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [bankSelected, setBankSelected] = useState<string>('');
  const [cardSelected, setCardSelected] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [concept, setConcept] = useState<string>('');

  const enabledButton = !!(
    accountNumber.length > 9 &&
    bankSelected.length &&
    cardSelected.length &&
    amount.length &&
    concept.length
  );

  const onContinue = () => {
    const now = new Date();

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();
    addNewTransaction({
      type: 'negative',
      shop: bankSelected,
      amount,
      concept,
      cardId: cards.find(i => i.lastFourDigits === cardSelected).id || 1,
      date: `${day}-${month}-${year}`,
      id: Math.floor(Math.random() * (1001 - 1) + 1),
    });
    navigation.goBack();
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          fontSize="xl"
          textAlign="center"
          fontFamily="OpenSans-Bold-700"
          mb={5}
          mt={2}
        >
          Send a transfer or pay for a service{' '}
        </Text>
        <FormControl>
          <FormControl.Label>
            Enter account number or card number
          </FormControl.Label>
          <Input
            InputLeftElement={
              <Icon
                as={<FontAwesome name="credit-card" />}
                size={4}
                ml="2"
                color="muted.400"
              />
            }
            variant="outline"
            placeholder="Account number, CLABE"
            keyboardType="numeric"
            color="muted.300"
            value={accountNumber}
            onChangeText={t => setAccountNumber(t)}
          />
          <FormControl.HelperText>10 account digits</FormControl.HelperText>
          <FormControl.HelperText>16 card digits</FormControl.HelperText>
          <FormControl.HelperText>18 for CLABE</FormControl.HelperText>
          <FormControl.Label mt={4}>Name of the bank</FormControl.Label>
          <Select
            placeholder="Choose a bank"
            mx={{
              base: 0,
              md: 'auto',
            }}
            _selectedItem={{
              endIcon: <CheckIcon size={4} />,
            }}
            color="muted.300"
            selectedValue={bankSelected}
            onValueChange={item => setBankSelected(item)}
          >
            {fakeBanksData.map((i, idx) => (
              <Select.Item label={i.name} value={i.name} key={idx.toString()} />
            ))}
          </Select>
          <FormControl.Label mt={4}>From account</FormControl.Label>
          <Select
            placeholder="Choose an account"
            mx={{
              base: 0,
              md: 'auto',
            }}
            _selectedItem={{
              endIcon: <CheckIcon size={4} />,
            }}
            color="muted.300"
            selectedValue={cardSelected}
            onValueChange={item => setCardSelected(item)}
          >
            {cards.map(i => (
              <Select.Item
                label={`**** ${i.lastFourDigits}`}
                value={i.lastFourDigits}
                key={i.id.toString()}
              />
            ))}
          </Select>
          <FormControl.Label mt={4}>Amount</FormControl.Label>
          <Input
            variant="outline"
            size="xl"
            placeholder="$ 0.00"
            keyboardType="numeric"
            color="muted.300"
            textAlign="center"
            value={amount}
            onChangeText={t => setAmount(t)}
          />
          <FormControl.Label mt={4}>Concept</FormControl.Label>
          <Input
            variant="outline"
            placeholder="Some concept"
            color="muted.300"
            value={concept}
            onChangeText={t => setConcept(t)}
          />
          <FormControl.HelperText>
            You can write up to 40 characters
          </FormControl.HelperText>
        </FormControl>
        <Button
          mt={10}
          onPress={() => {
            setShowModal(true);
          }}
          variant="subtle"
          isDisabled={!enabledButton}
        >
          Continue
        </Button>
      </ScrollView>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        size="full"
        closeOnOverlayClick={false}
      >
        <Modal.Content h="2xl">
          <PaymentAnimation onContinue={onContinue} />
        </Modal.Content>
      </Modal>
    </Layout>
  );
};

export default SendPayment;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 30,
  },
});
