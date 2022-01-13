import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useCallback, useContext, useState } from 'react';
import { Drawer } from 'react-native-paper';
import { ThemeContext } from 'styled-components/native';

import { MOVIE_SCREEN_DRAWER, PROFILE_SCREEN_DRAWER } from '~/shared/constants';

import { NewText } from '../Text';

import * as S from './styles';

export function DrawerContent(props: DrawerContentComponentProps) {
  const { Colors } = useContext(ThemeContext);

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
                  uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
                }}
              />
              <S.ContainerUser>
                <S.UserName>Marayah Sabelle</S.UserName>
                <S.UserEmail>thiagolins13255lasjdoiais@gmail.com</S.UserEmail>
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
          onPress={() => console.log('a')}
        />
      </Drawer.Section>
    </S.Container>
  );
}
