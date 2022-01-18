import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { Home } from '~/modules/Movie/screens/Home';
import { MovieInfo } from '~/modules/Movie/screens/MovieInfo';
import { Profile } from '~/modules/Profile/screens/Profile';
import { Search } from '~/modules/Search/screens/Search';
import { Header } from '~/shared/components/Header';
import {
  MOVIE_INFO_SCREEN,
  MOVIE_SCREEN,
  PROFILE_SCREEN,
  SEARCH_SCREEN,
} from '~/shared/constants/routes';

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

      <HomeStack.Screen
        name={MOVIE_INFO_SCREEN}
        component={MovieInfo}
        options={{
          header: props => <Header {...props} buttonBack />,
        }}
      />
    </HomeStack.Navigator>
  );
}

export function SearchStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={SEARCH_SCREEN}
        component={Search}
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
