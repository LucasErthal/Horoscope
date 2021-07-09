import React from "react";
import * as Styled from "./styles";
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

interface Props {
  color: string;
  name: string;
  icon: string;
  navigate(name: string, color: string, icon: string): void;
}

const Icon = createIconSetFromIcoMoon(
  require("../../public/icons/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);

const SignButton: React.FC<Props> = ({ color, name, icon, navigate }) => {
  
  return (
    <Styled.Container>
      <Styled.Button
        color={color}
        onPress={() => navigate(name,color, icon)}
        style={{elevation: 6}}
      >
        <Icon name={icon} color="white" size={60} />
      </Styled.Button>

      <Styled.TextRegular>
        {name}
      </Styled.TextRegular>
    </Styled.Container>
  );
}

export default SignButton;