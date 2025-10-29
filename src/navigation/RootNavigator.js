import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';
import SplashScreen from '../screens/SplashScreen';
import SplashScreen2 from '../screens/SplashScreen2';
import SplashScreen3 from '../screens/SplashScreen3';
import SplashScreen4 from '../screens/SplashScreen4';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotpasswordScreen from '../screens/ForgotpasswordScreen';
import GetStartedScreen from '../screens/GetStartedScreen';
import MainTabNavigator from './MainTabNavigator';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Splash2" component={SplashScreen2} />
      <Stack.Screen name='Splash3' component={SplashScreen3}/>
      <Stack.Screen name='Splash4' component={SplashScreen4}/>
      <Stack.Screen name='SignIn' component={SignInScreen}/>
      <Stack.Screen name='SignUp' component={SignUpScreen}/>
      <Stack.Screen name='GetStarted' component={GetStartedScreen}/>

      <Stack.Screen name='Forgotpassword' component={ForgotpasswordScreen}/>
      <Stack.Screen name='MainTab' component={MainTabNavigator}/>



     
    </Stack.Navigator>
  );
};

export default RootNavigator;
  