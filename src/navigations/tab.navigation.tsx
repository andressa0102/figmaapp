import React from 'react';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenPerfil, ScreenCamera, ScreenLocation, ScreenAcelerometro } from "../screens"
import { colors } from '../styles/colors';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

type TabParamList = {
  Perfil: undefined
  Camera: undefined
  Localização: undefined
  Acelerometro: undefined
};
type TabScreenNavigationProp = BottomTabNavigationProp<TabParamList, 'Perfil'>
export type TabTypes = {
  navigation: TabScreenNavigationProp
}

export function TabNavigation() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: colors.primary,
        tabBarActiveTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.white
      }}
    >
      <Tab.Screen name="Perfil" component={ScreenPerfil} 
        options={{
          tabBarIcon: () => (
            <Ionicons name ='person' color={colors.white} size={24} />
          ),
        }}
      />
      <Tab.Screen name="Camera" component={ScreenCamera} 
        options={{
          tabBarIcon: () => (
            <AntDesign name="camera" color={colors.white} size={24} />
          )
        }}
      />
      <Tab.Screen name="Location" component={ScreenLocation} 
        options={{
          tabBarIcon: () => (
            <Entypo name="location" size={24} color="black" />
          )
        }}
      />
      <Tab.Screen name="Acelerometro" component={ScreenAcelerometro} 
        options={{
          tabBarIcon: () => (
            <AntDesign name="car" size={24} color="black" />
          )
        }}
      />
    </Tab.Navigator>
  );
}
