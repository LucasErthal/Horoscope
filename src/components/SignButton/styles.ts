import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled  from 'styled-components/native';

interface ButtonProps {
  color: string;
}

export const Container = styled(View)`
  flex: 1;
  padding: 5%
`;

export const Button = styled(RectButton)`
  background-color: ${(props:ButtonProps) => props.color};
  align-items: center;
  justify-content: center;
  flex:1;
  border-radius: 250px;
`;

export const TextRegular = styled(Text)`
  width: 100%;
  color: white;
  font-family: "DancingScript_600SemiBold";
  text-align: center;
  font-size: 16px;
`;