import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { Login } from '~/modules/Auth/screens/Login';
import { Header } from '~/shared/components/Header';
import {
  LOGIN_SCREEN,
  MOVIE_SCREEN_DRAWER,
  PROFILE_SCREEN_DRAWER,
  SEARCH_SCREEN_DRAWER,
} from '~/shared/constants/routes';

import { DrawerContent } from '../components/DrawerContent';
import {
  HomeStackScreen,
  ProfileStackScreen,
  SearchStackScreen,
} from './StacksNavigator';
import { createTheme } from './utils';

const Drawer = createDrawerNavigator();
const LoginStack = createStackNavigator();

export function RootStack() {
  const { theme } = useSelector((state: AplicationState) => state.theme);
  const { isLogged } = useSelector((state: AplicationState) => state.user);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <ThemeProvider theme={createTheme(theme)}>
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

                <Drawer.Screen
                  name={SEARCH_SCREEN_DRAWER}
                  component={SearchStackScreen}
                />

                <Drawer.Screen
                  name={PROFILE_SCREEN_DRAWER}
                  component={ProfileStackScreen}
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
        </ThemeProvider>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
