import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from './screens/Login';
import Pilots from './screens/Pilots';
import New from './screens/New';
import Favorite from './screens/Favorite';
import {View, Text, Button} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// ===================SCREENs=====================
/**
 * There are 4 screens:
 * - Login
 * - Pilots (which returns a button conditionally based on the isLoggedIn state)
 * - New (which cotaines a form and onSubmit gets exchanged with the Pilot screen in the NewStack)
 * - Favorite
 */


// ===================STACKs=====================
/**
 * 1. NewStack: contains 2 screens: New, Pilot(isLoggedIn version of Pilot screen)
 */

// ===================TABs=====================
/**
 * 1. GuestTab: contains 2 screens: Pilots, Login (!isLoggedIn version of Pilot screen)
 * 2. UserTab: contains 3 screens and 1 stack: 
 *      - screens: Pilots, Favorite, Login (!isLoggedIn version of Pilot screen)
 *      - stack: NewStack
 */

 function U_Pilots() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pilots" component={Pilots} />
      <Tab.Screen name="New" component={New} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="Logout" component={Login} />
    </Tab.Navigator>
  );
}

function UserTebs() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="U_Pilots"
        component={U_Pilots}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function GuestTebs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Pilots" component={Pilots} />
      <Stack.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
}
//-----------------------------------------
/**
 * Tab for user. It consists of four items, pilots, Favorite, New stacks and the Logout screen.
 */
// function UserTebs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Pilots" component={Pilots} />
//       <Tab.Screen name="New" component={New} />
//       <Tab.Screen name="Favorite" component={Favorite} />
//       <Stack.Screen name="Logout" component={Login} />
//     </Tab.Navigator>
//   );
// }
//-----------------------------------------
/**
 * Parent component that contains tabs.
 * It's expected to switch between them based on user's context
 */
export default function App() {
  const isLoggedIn = false;
  // const isLoggedIn = true;
  return (
    <NavigationContainer>
      {isLoggedIn ? <UserTebs /> : <GuestTebs />}
    </NavigationContainer>
  );
}

// ===================SCREENs=====================
/**
 * Login screen is for guest.
 */

/**
 * Logout screen is for user.
 */

// function GuestPilots() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Pilots" component={Pilots} />
//       <Stack.Screen name="Login" component={Login} />
//     </Tab.Navigator>
//   );
// }

// function App() {
//   // App =>> Login page
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="GuestPilots"
//           component={GuestPilots}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen name="Login" component={Login} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
