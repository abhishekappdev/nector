import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator"; // your navigation file
import {SheetProvider} from 'react-native-actions-sheet';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
    <SheetProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SheetProvider>
  );
}


