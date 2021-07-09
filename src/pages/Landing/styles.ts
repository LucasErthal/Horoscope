import { LinearGradient } from "expo-linear-gradient";
import { View, Text } from "react-native";
import styled from "styled-components/native";



export const Container = styled(LinearGradient).attrs({
  colors: ['#010207', '#3689C8'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  flex-direction: column;
  padding: 35px 5px;
  align-items: center;
  justify-content: center;
`;

export const ColumnContainer = styled(View)`
  flex:1;
  flex-direction: row;
`;

export const Column = styled(View)`
  width: 30%;
  height: 100%;
`;

export const Title = styled(Text)`
   width: 100%;
  color: white;
  font-family: "Nunito_400Regular";
  text-align: center;
  font-size: 16px;
`;