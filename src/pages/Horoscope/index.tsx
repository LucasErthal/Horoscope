//#region imports

import React from "react";
import { RootStackParamList } from "../RootStackParams";
import { RouteProp, useRoute } from "@react-navigation/core";
import { useNavigation } from "@react-navigation/native";
import * as Styled from "./styles";
import { useEffect } from "react";
import { GetHoroscope } from "../../services";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import GirlImage from "../../public/images/Image";

//#endregion imports

type NavigationProps = RouteProp<RootStackParamList, "Horoscope">;

const Icon = createIconSetFromIcoMoon(
  require("../../public/icons/selection.json"),
  "IcoMoon",
  "icomoon.ttf"
);


function Horoscope() {
  const route = useRoute<NavigationProps>().params;
  const { goBack } = useNavigation();
  const [horoscope, setHoroscope] = useState<Horoscope>();

  async function handleGetHoroscope() {
    const date = new Date();

    const [ day, month, year ] = [ date.getDate(), date.getMonth() + 1, date.getFullYear() ];

    const request:Request = (await GetHoroscope(`${year}-${month}-${day}`)).data;

    const selectedHoroscope = request.result[0].horoscopes.find(element => {
      return element.sign == route.name;
    });

    setHoroscope(selectedHoroscope);
  }

  useEffect( () => {
    handleGetHoroscope();
  }, [])
  
  return (
    <Styled.Container>
      <Styled.IconContainer
        color={route.color}
      >
        <Icon name={route.icon} color="#FFF" size={60} />
      </Styled.IconContainer>
      <Styled.Title>{horoscope?.sign}</Styled.Title>

      {/* { horoscope?.title && horoscope.title != "." &&
        <Styled.Title>{horoscope?.title}</Styled.Title>
      } */}

      <Styled.ScrollContainer>
        <ScrollView>
          <Styled.TextRegular>{horoscope?.description.replace(/\r/g, "").replace(/\n/g, "")}</Styled.TextRegular>
        </ScrollView>
      </Styled.ScrollContainer>

      <GirlImage  color={route.color} height="20%" />

      <Styled.Button
        color={route.color}
        style={{elevation: 5}}
        onPress={goBack}
      >
        <Styled.Title> Voltar </Styled.Title>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Horoscope;