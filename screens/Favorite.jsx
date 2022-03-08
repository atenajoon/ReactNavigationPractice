// components:
// 1. PilotCards
// 2. NavBar (user)

//  !isLoggedin ? redirect to Login page

import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function Favorite({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hi From User FavoriteScreen</Text>
      {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button title="Pilots" onPress={() => navigation.navigate('Pilots')} />
        <Button title="New" onPress={() => navigation.navigate('New')} />
        <Button
          title="Favorite"
          onPress={() => navigation.navigate('Favorite')}
        />
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View> */}
    </View>
  );
}
