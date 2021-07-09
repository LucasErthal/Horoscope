//#region imports

import React from "react";
import SignButton from "../../components/SignButton";
import * as Styled from "./styles";
import signJSON from "./signs.json";
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../RootStackParams';
import { useNavigation } from "@react-navigation/native";

//#endregion imports

type NavigationProps = StackNavigationProp<RootStackParamList, 'Landing'>;

function Landing() {
  const { column1, column2, column3 } = signJSON;
  const { navigate } = useNavigation<NavigationProps>();

  function handleNavigate(name: string, color: string, icon: string) {
    navigate("Horoscope", { name, color, icon });
  }

  return (
    <Styled.Container>
      <Styled.Title>
        Escolha um signo
      </Styled.Title>

      <Styled.ColumnContainer>
        <Styled.Column>
          {
            column1.map(element => {
              return (
                <SignButton
                  key={column1.indexOf(element)}
                  color={element.color}
                  name={element.name}
                  icon={element.icon}
                  navigate={handleNavigate}
                />
              )
            })
          }
        </Styled.Column>

        <Styled.Column>
          {
            column2.map(element => {
              return (
                <SignButton
                  key={column2.indexOf(element)}
                  color={element.color}
                  name={element.name}
                  icon={element.icon}
                  navigate={handleNavigate}
                />
              )
            })
          }
        </Styled.Column>

        <Styled.Column>
          {
            column3.map(element => {
              return (
                <SignButton
                  key={column3.indexOf(element)}
                  color={element.color}
                  name={element.name}
                  icon={element.icon}
                  navigate={handleNavigate}
                />
              )
            })
          }
        </Styled.Column>
      </Styled.ColumnContainer>
    </Styled.Container>
  );
}

export default Landing;