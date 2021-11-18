import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Home: undefined;
  CardDetail: CardInfo;
  SendPayment: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;

export type CardDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CardDetail'
>;
export type SendPaymentScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SendPayment'
>;

export type CardInfo = {
  balance: string;
  projectName: string;
  lastFourDigits: string;
  id: number;
  type: 'black' | 'white';
  account: string;
  CLABE: string;
};

export type TransactionType = {
  type: 'positive' | 'negative';
  shop: string;
  date: string;
  amount: string;
  concept: string;
  id: number;
  cardId: number;
};
