import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useCallback, useContext, useState } from 'react';
import { Drawer } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import {
  MOVIE_SCREEN_DRAWER,
  PROFILE_SCREEN_DRAWER,
  SEARCH_SCREEN_DRAWER,
} from '~/shared/constants/routes';
import { logoutUserAction } from '~/shared/store/ducks/user/action';

import { NewText } from '../Text';

import * as S from './styles';

export function DrawerContent(props: DrawerContentComponentProps) {
  const { currentUser } = useSelector((state: AplicationState) => state.user);

  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const [itemSelected, setItemSelected] = useState('Home');

  const IconItem = useCallback((name: string, iconType: string) => {
    return <S.IconItem name={name} iconType={iconType} />;
  }, []);

  const LabelItem = useCallback(
    (name: string) => {
      return <NewText fontColor={Colors.TEXT_CLICKABLE}>{name}</NewText>;
    },
    [Colors.TEXT_CLICKABLE],
  );

  return (
    <S.Container>
      <DrawerContentScrollView {...props}>
        <S.ContainerDrawerContent>
          <S.ContainerDrawerUser>
            <S.ContainerUserInfo>
              <S.AvatarUser
                source={{
                  uri:
                    currentUser.avatar ||
                    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                }}
              />
              <S.ContainerUser>
                <S.UserName>{currentUser.username}</S.UserName>
                {currentUser.email !== '' && (
                  <S.UserEmail>{currentUser.email}</S.UserEmail>
                )}
              </S.ContainerUser>
            </S.ContainerUserInfo>
          </S.ContainerDrawerUser>
        </S.ContainerDrawerContent>

        <Drawer.Section style={S.DrawerRoutes}>
          <DrawerItem
            icon={() => IconItem('home', 'materialCommunityIcons')}
            label={() => LabelItem('Home')}
            onPress={() => {
              setItemSelected('Home');
              props.navigation.navigate(MOVIE_SCREEN_DRAWER);
            }}
            activeBackgroundColor={Colors.BACKGROUND_MENU_SELECTED}
            focused={itemSelected === 'Home'}
          />

          <DrawerItem
            icon={() => IconItem('search', 'ionicons')}
            label={() => LabelItem('Buscar')}
            onPress={() => {
              setItemSelected('Buscar');
              props.navigation.navigate(SEARCH_SCREEN_DRAWER);
            }}
            activeBackgroundColor={Colors.BACKGROUND_MENU_SELECTED}
            focused={itemSelected === 'Buscar'}
          />

          <DrawerItem
            icon={() => IconItem('user-circle', 'font-5')}
            label={() => LabelItem('Perfil')}
            onPress={() => {
              setItemSelected('Perfil');
              props.navigation.navigate(PROFILE_SCREEN_DRAWER);
            }}
            activeBackgroundColor={Colors.BACKGROUND_MENU_SELECTED}
            focused={itemSelected === 'Perfil'}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section>
        <DrawerItem
          icon={() => IconItem('exit-to-app', 'materialCommunityIcons')}
          label={() => LabelItem('Sair')}
          onPress={() => dispatch(logoutUserAction())}
        />
      </Drawer.Section>
    </S.Container>
  );
}
