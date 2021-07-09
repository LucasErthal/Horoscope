import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./pages/Landing";
import Horoscope from "./pages/Horoscope";

const { Navigator, Screen } = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }} >
        <Screen name="Landing" component={Landing} />
        <Screen name="Horoscope" component={Horoscope} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Routes;