import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Home } from '~/modules/Movie/screens/Home';
import { Header } from '~/shared/components/Header';
import { MOVIE_SCREEN } from '~/shared/constants';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={MOVIE_SCREEN}
        component={Home}
        options={{
          header: props => <Header {...props} enabledNavigation />,
        }}
      />
    </HomeStack.Navigator>
  );
}
