import * as React from 'react';
import { Text, IconButton, Center } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

interface ActionButtonProps {
  iconName: string;
  text: string;
  onPress?: () => void;
}

const ActionButton = ({ iconName, text, onPress }: ActionButtonProps) => {
  const onPressButton = () => {
    onPress && onPress();
  };
  return (
    <Center>
      <IconButton
        variant="outline"
        icon={<FontAwesome5 name={iconName} size={26} />}
        h="60px"
        w="60px"
        mb={2}
        _icon={{
          color: '#FFF',
        }}
        justifyContent="center"
        alignItems="center"
        onPress={onPressButton}
      />
      <Text onPress={onPressButton}>{text}</Text>
    </Center>
  );
};

export default ActionButton;
