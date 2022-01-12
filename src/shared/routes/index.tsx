import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Login } from '~/modules/Auth/screens/Login';
import { Header } from '~/shared/components/Header';
import { LOGIN_SCREEN, MOVIE_SCREEN_DRAWER } from '~/shared/constants';

import { DrawerContent } from '../components/DrawerContent';
import { HomeStackScreen } from './StacksNavigator';

const Drawer = createDrawerNavigator();
const LoginStack = createStackNavigator();

export function RootStack() {
  const [isLogged, setLogged] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <NavigationContainer>
          {isLogged ? (
            <Drawer.Navigator
              initialRouteName={MOVIE_SCREEN_DRAWER}
              drawerContent={props => <DrawerContent {...props} />}
              screenOptions={{
                headerShown: false,
              }}
            >
              <Drawer.Screen
                name={MOVIE_SCREEN_DRAWER}
                component={HomeStackScreen}
              />
            </Drawer.Navigator>
          ) : (
            <LoginStack.Navigator initialRouteName={LOGIN_SCREEN}>
              <LoginStack.Screen
                name={LOGIN_SCREEN}
                component={Login}
                options={{
                  header: props => <Header {...props} />,
                }}
              />
            </LoginStack.Navigator>
          )}
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
