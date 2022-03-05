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

// my test comment
// ===================STACKs=====================
/**
 * GuestStack that is used for both guest and user tabs.
 */
function GuestStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pilots" component={Pilots} />
      {/* <Stack.Screen name="Logout" component={Login} />  //this should be a sceern */}
    </Stack.Navigator>
  );
}
//-----------------------------------------
/**
 * UserStack that is used only for user tab.
 */
function UserStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pilots" component={Pilots} />
      <Stack.Screen name="New" component={New} />
      <Stack.Screen name="Favorite" component={Favorite} />
      {/* <Stack.Screen name="Logout" component={Login} />  //this should be a sceern */}
    </Stack.Navigator>
  );
}


// ===================TABs=====================
/**
 * Tab for guest. It consists of two items, pilots stack and login screen
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
