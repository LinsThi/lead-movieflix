import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useCallback, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '~/components/Header';

import { HOME_SCREEN, HOME_SCREEN_DRAWER, LOGIN_SCREEN } from '~/constants';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';

const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const LoginStack = createStackNavigator();

export function RootStack() {
  const [isLogged, setLogged] = useState(true);

  const HomeStackScreen = useCallback(() => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen
          name={HOME_SCREEN}
          component={Home}
          options={{
            header: props => <Header {...props} enabledNavigation />,
          }}
        />
      </HomeStack.Navigator>
    );
  }, []);

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
              initialRouteName={HOME_SCREEN_DRAWER}
              screenOptions={{
                headerShown: false,
              }}
            >
              <Drawer.Screen
                name={HOME_SCREEN_DRAWER}
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
