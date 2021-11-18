import * as React from 'react';
import { Text, VStack, Box, Image, HStack, Button } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import VergoLogo from '../../assets/images/vergo_logo.png';
import { CardInfo } from '../types';

interface CreditCardProps {
  balance?: string;
  lastFourDigits?: string;
  projectName?: string;
  type?: 'black' | 'white';
  onPress?: () => void;
  isPressable?: boolean;
}

export const CreditCard = ({
  type,
  balance,
  lastFourDigits,
  projectName,
  onPress,
  isPressable = true,
}: CreditCardProps) => {
  const onPressCard = () => {
    if (isPressable) {
      onPress && onPress();
    }
  };

  const activeOpacity = () => {
    if (!isPressable) {
      return 1;
    }
    if (type === 'black') {
      return 0.7;
    }
    return 1;
  };

  return (
    <TouchableOpacity activeOpacity={activeOpacity()} onPress={onPressCard}>
      <Box
        maxH={350}
        maxW={200}
        w={200}
        h={300}
        backgroundColor={type === 'black' ? '#2E2E2E' : '#FFF'}
        rounded="xl"
        paddingX={5}
        paddingY={4}
        justifyContent="space-between"
      >
        <HStack justifyContent="space-between">
          <Box width="40px" height="50px" bg="#D2D1D1" rounded="xl" />
          {lastFourDigits && (
            <Text color={type === 'black' ? '#FFF' : '#000'} mt={1}>
              **** {lastFourDigits}
            </Text>
          )}
        </HStack>
        <VStack>
          {projectName && (
            <Text
              fontFamily="OpenSans-Light"
              fontSize="xs"
              textAlign="center"
              color={type === 'black' ? '#FFF' : '#000'}
            >
              {projectName}
            </Text>
          )}

          {balance && (
            <Text
              fontFamily="OpenSans-SemiBold-600"
              fontSize="xl"
              textAlign="center"
              color={type === 'black' ? '#FFF' : '#000'}
            >
              $ {balance}
            </Text>
          )}
        </VStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Image
            source={VergoLogo}
            tintColor={type === 'black' ? '#FFF' : '#000'}
            resizeMode="contain"
            width="80px"
            alt="logo-vergo-card"
          />
          <FontAwesome
            name="cc-visa"
            size={26}
            color={type === 'black' ? '#FFF' : '#000'}
          />
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

const CreditCardItem = ({ data }: { data: CardInfo }) => {
  const { type, balance, lastFourDigits, projectName, CLABE, account, id } =
    data;
  const navigation = useNavigation();

  const onNavigate = () => {
    navigation.navigate('CardDetail', {
      projectName,
      balance,
      lastFourDigits,
      type,
      CLABE,
      account,
      id,
    });
  };
  return (
    <VStack alignItems="center">
      <CreditCard
        balance={balance}
        type={type}
        lastFourDigits={lastFourDigits}
        projectName={projectName}
        onPress={onNavigate}
      />
      <Button pb={0} pt={2} variant="link" onPress={onNavigate}>
        Details
      </Button>
    </VStack>
  );
};

export default CreditCardItem;
