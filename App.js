import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import Pilots from './screens/Pilots';
import New from './screens/New';
import Favorite from './screens/Favorite';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ===================Stack=====================
/**
 * Pilot stack that is used for both guest and user tabs.
 */
function PilotsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pilots" component={Pilots} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Logout" component={Login} />
    </Stack.Navigator>
  );
}
// ===================Stack=====================

// ===================TABs=====================
/**
 * Tab for guest. It consists of two items, pilots stack and login screen
 */
function GuestTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pilots" component={PilotsStack} />
      <Tab.Screen name="Log in" component={Login} />
    </Tab.Navigator>
  );
}

function UserTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pilots" component={PilotsStack} />
      <Tab.Screen name="New" component={Login} />
      <Tab.Screen name="Fav" component={Login} />
      <Tab.Screen name="Log Out" component={Login} />
    </Tab.Navigator>
  );
}
// ===================TABs=====================

/**
 * Parent component that contains tabs.
 * It's expected to switch between them based on user's context
 */
export default function App() {
  const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <UserTab /> : <GuestTab />}
    </NavigationContainer>
  );
}
