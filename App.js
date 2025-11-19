import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator"; // your navigation file
import {SheetProvider} from 'react-native-actions-sheet';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import { store } from '././src/redux/store';
export default function App() {
  return (
    <Provider store={store}>

=======

export default function App() {
  return (
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
    <SheetProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </SheetProvider>
<<<<<<< HEAD
    </Provider>

=======
>>>>>>> 6773307e0a63deadc5495da486e27fa9adf735f2
  );
}


