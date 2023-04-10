import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ScreenCadastrar, ScreenLogin} from "../screens"

const Stack = createStackNavigator();

export function LoginNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cadastrar" component={ScreenCadastrar} />
      <Stack.Screen name="Login" component={ScreenLogin} />
    </Stack.Navigator>
  );
}