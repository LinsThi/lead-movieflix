import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { HOME_SCREEN, LOGIN_SCREEN } from '~/constants';
import { Home } from '~/screens/Home';
import { Login } from '~/screens/Login';

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={LOGIN_SCREEN}>
        <Stack.Screen name={LOGIN_SCREEN} component={Login} />

        <Stack.Screen name={HOME_SCREEN} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
