import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Signup from './screens/Signup';
import Otp from './screens/Otp';
import User from './screens/User';
import Cart from './screens/Cart';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white'
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
        />
              <Stack.Screen 
          name="Login" 
          component={Login} 
        />
         <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
        />

           <Stack.Screen 
          name="Signup" 
          component={Signup} 
        />


<Stack.Screen 
          name="User" 
          component={User} 
        />

<Stack.Screen 
          name="Cart" 
          component={Cart} 
        />


<Stack.Screen 
          name="Otp" 
          component={Otp} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
