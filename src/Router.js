import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from './pages/Product';
import Detail from './pages/Detail';

export default function Router() {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ProductScreen" component={Product} />
            <Stack.Screen name="DetailScreen" component={Detail} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
