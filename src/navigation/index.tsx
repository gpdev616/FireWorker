import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Local, Online, OnlineDownload } from '@screens';
import { routes } from './routes';

const Stack = createNativeStackNavigator();
export const MainNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.HOME} component={Home} />
      <Stack.Screen name={routes.LOCAL} component={Local} />
      <Stack.Screen name={routes.ONLINE} component={Online} />
      <Stack.Screen name={routes.ONLINE_DOWNLOAD} component={OnlineDownload} />
    </Stack.Navigator>
  );
};
