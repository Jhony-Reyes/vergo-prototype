import { saveData } from '../../utils/asyncStorage';
import { CardInfo } from '../../types';

/* Typescript types */
export type UserInfoProps = {
  id: number;
  name: string;
  first_lastname: string;
  email: string | null;
};

export type UserDataProps = {
  info: UserInfoProps;
};

export type UserStateProps = {
  userData: UserDataProps;
  cards: CardInfo[];
};

interface LogInType {
  type: typeof LOG_IN;
  payload: UserDataProps;
}

type UserActionTypes = LogInType;

/* Initial state */
export const initialState: UserStateProps = {
  userData: {
    info: {
      id: 1,
      name: 'Heinar',
      first_lastname: 'Hohenstein',
      email: 'einar@email.com',
    },
  },
  cards: [
    {
      balance: '350,200,678.90',
      projectName: 'Kitchen Project',
      lastFourDigits: '1234',
      id: 1,
      type: 'black',
      account: '6512873910',
      CLABE: '123456789012345678',
    },
    {
      balance: '780,400,178.00',
      projectName: 'Office Project',
      lastFourDigits: '5678',
      id: 2,
      type: 'white',
      account: '6512873910',
      CLABE: '123456789088325678',
    },
    {
      balance: '2000.00',
      projectName: 'Office Project 2',
      lastFourDigits: '7631',
      id: 3,
      type: 'black',
      account: '4512873910',
      CLABE: '109456789012345678',
    },
  ],
};

/* Reducer Types */
const LOG_IN = 'LOG_IN';

/* Reducer */
const reducer = (prevState = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case LOG_IN:
      saveData('userData', action.payload);
      return {
        ...prevState,
        userData: action.payload,
      };
    default:
      return prevState;
  }
};

export default reducer;
