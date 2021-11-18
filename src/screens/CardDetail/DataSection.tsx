import * as React from 'react';
import { VStack, Text } from 'native-base';

interface DataSectionProps {
  title: string;
  value: string;
}

const DataSection = ({ title, value }: DataSectionProps) => {
  return (
    <VStack mb={5} alignItems="flex-end">
      <Text fontSize="sm" fontFamily="OpenSans-SemiBold-600" color="muted.500">
        {title}
      </Text>
      <Text fontSize="md" fontFamily="OpenSans-SemiBold-600" color="muted.300">
        {value}
      </Text>
    </VStack>
  );
};

export default DataSection;
