import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Home } from '~/modules/Movie/screens/Home';
import { Profile } from '~/modules/Profile/screens/Profile';
import { Header } from '~/shared/components/Header';
import { MOVIE_SCREEN, PROFILE_SCREEN } from '~/shared/constants/routes';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

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

export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name={PROFILE_SCREEN}
        component={Profile}
        options={{
          header: props => <Header {...props} enabledNavigation />,
        }}
      />
    </ProfileStack.Navigator>
  );
}
