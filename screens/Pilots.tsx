// components:
// 1. SearchField
// 2. PilotCards (pass props: isLoggedIn)
// 3. NavBar (user, guest)

//  Redux: 
// Starship
// Pilot

// store only starships with pilot (fetch all info, remove pilots WO starships)
// store pilots with a starship (optimize fetch request for only name & gender)




import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function Pilots({ navigation }) {
  
  const isLoggedIn = true;
  if(isLoggedIn) {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi From User PilotsScreen</Text>
        <View style={{  flexDirection: "row", justifyContent: "space-between"}}>
            <Button
              title="Pilots"
              onPress={()=>navigation.navigate("Pilots")}
            />
            <Button
              title="New"
              onPress={()=>navigation.navigate("New")}
            />
            <Button
              title="Favorite"
              onPress={()=>navigation.navigate("Favorite")}
            />
            <Button
              title="Logout"
              onPress={()=>navigation.navigate("Login")}
            />
          </View>
    </View>
    )
  }
  
  
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi Guest From PilotsScreen</Text>
        <View style={{  flexDirection: "row", justifyContent: "space-between"}}>
            <Button
              title="Pilots"
              onPress={()=>navigation.navigate("Pilots")}
            />
            <Button
              title="Login"
              onPress={()=>navigation.navigate("Login")}
            />
        </View>
    </View>
  )
}