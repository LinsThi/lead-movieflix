import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '~/components/Header';

import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
        enabled={false}
      >
        <NavigationContainer>
          <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
            <Stack.Screen
              name={LOGIN_SCREEN}
              component={Login}
              options={{ header: props => <Header {...props} /> }}
            />

            <Stack.Screen
              name={HOME_SCREEN}
              component={Home}
              options={{
                header: props => <Header {...props} enabledNavigation />,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
