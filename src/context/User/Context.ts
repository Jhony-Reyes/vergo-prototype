import { createContext } from 'react';
import { UserStateProps, initialState, UserDataProps } from './Reducer';

export interface UserContextType extends UserStateProps {
  logIn: (userInfo: UserDataProps) => void;
}

/* Context */
const UserContext = createContext<UserContextType>({
  ...initialState,
  logIn: () => {},
});

export default UserContext;
