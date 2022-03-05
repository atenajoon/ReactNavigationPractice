import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/Login';
import Pilots from './screens/Pilots';
import New from './screens/New';
import Favorite from './screens/Favorite';

// test

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pilots" component={Pilots} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Favorite" component={Favorite} />
      </Stack.Navigator>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}
