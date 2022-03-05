// components:
// 1. LoginForm
// 2. Button

// Redux: user

// Guest button: user's redux must be set to null,
// meaning the user is not logged in

import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Hi From LoginScreen</Text>
      <View style={{flexDirection: 'row'}}>
        <Button title="Sign in" onPress={() => navigation.navigate('Pilots')} />
        <Button
          title="Login as Guest"
          onPress={() => navigation.navigate('New')}
        />
        {/* <Button
          title="Go to Login Again!"
          onPress={()=>navigation.push("Login")}
        />      
        <Button
          title="Go to First Page!"
          onPress={()=>navigation.popToTop()}
        /> */}
      </View>
    </View>
  );
}
