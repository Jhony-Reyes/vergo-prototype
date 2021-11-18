import React, { useRef, useEffect, useMemo } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { Center, Text, Button } from 'native-base';
import LottieView from 'lottie-react-native';
import PaymentAnimationJson from '../../../assets/images/payment.json';
import SuccessAnimationJson from '../../../assets/images/success-confetti.json';

type PaymentAnimationProps = {
  onContinue?: () => void;
};

const PaymentAnimation = ({ onContinue }: PaymentAnimationProps) => {
  const animatedLayout = useMemo(() => new Animated.Value(1), []);
  const loadingAnimationRef = useRef<LottieView>(null);

  useEffect(() => {
    Animated.timing(animatedLayout, {
      duration: 500,
      delay: 2500,
      toValue: 0,
      useNativeDriver: false,
    }).start(() => loadingAnimationRef.current?.play());
  }, [animatedLayout]);

  const loadingTranslateY = animatedLayout.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  const successOpacity = animatedLayout.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const successTranslateY = animatedLayout.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });

  const onContinueButton = () => {
    onContinue && onContinue();
  };

  return (
    <Center flex={1}>
      <Animated.View
        style={{
          opacity: animatedLayout,
          transform: [{ translateY: loadingTranslateY }],
        }}
      >
        <LottieView
          style={styles.loadingAnimation}
          source={PaymentAnimationJson}
          autoPlay
        />
      </Animated.View>
      <Animated.View
        style={{
          ...styles.successContainer,
          opacity: successOpacity,
          top: successTranslateY,
        }}
      >
        <LottieView
          ref={loadingAnimationRef}
          style={styles.successAnimation}
          source={SuccessAnimationJson}
        />
        <Text color="#4FD05A" textAlign="center" fontSize="2xl">
          Success Payment
        </Text>
        <Button mt={5} onPress={onContinueButton}>
          Continue
        </Button>
      </Animated.View>
    </Center>
  );
};

export default PaymentAnimation;

const styles = StyleSheet.create({
  loadingAnimation: {
    width: 200,
    height: 200,
  },
  successContainer: {
    position: 'absolute',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successAnimation: {
    width: 350,
    height: 350,
  },
});
