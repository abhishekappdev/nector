import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator"; // your navigation file
import {SheetProvider} from 'react-native-actions-sheet';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from '././src/redux/store';
export default function App() {
  return (
    <Provider store={store}>

    <SheetProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SheetProvider>
    </Provider>

  );
}


