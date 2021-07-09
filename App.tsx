import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import Routes from './src/routes';
import {
  DancingScript_600SemiBold,
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';
import { Nunito_400Regular } from "@expo-google-fonts/nunito";


export default function App() {

  const [fontsLoaded] = useFonts({ 
    DancingScript_600SemiBold,
    DancingScript_700Bold,
    Nunito_400Regular,
    IcoMoon: require('./src/public/icons/icomoon.ttf')
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" />
      <Routes />
    </> 
  );
}
