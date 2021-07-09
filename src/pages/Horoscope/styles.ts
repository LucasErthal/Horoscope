import { Text } from 'react-native';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface IconContainerProps {
  color: string;
}

interface ButtonProps {
  color: string;
}

export const Container = styled(LinearGradient).attrs({
  colors: ['#010207', '#3689C8'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  display: flex;
  flex: 1;
  padding: 35px 5px 5px 5px;
  align-items: center;
  justify-content: space-around;
`;

export const ScrollContainer = styled(View)`
  width: 100%;
  height: 40%;
`;


export const TextRegular = styled(Text)`
  width: 100%;
  color: white;
  font-family: "Nunito_400Regular";
  text-align: center;
  font-size: 16px;
`;

export const Title = styled(TextRegular)`
  font-size: 28px;
  font-family: "DancingScript_600SemiBold";
  text-align: center;
`;

export const IconContainer = styled(View)`
  background-color: ${(props:IconContainerProps) => props.color};
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 250px;
`;

export const Button = styled(RectButton)`
  width: 50%;
  height: 60px;
  background-color: ${(props: ButtonProps) => props.color};
  border-radius: 250px;
  align-items: center;
  justify-content: center;
`;