import type { DrawerContentComponentProps } from '@react-navigation/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useCallback } from 'react';
import { Drawer } from 'react-native-paper';

import { MOVIE_SCREEN_DRAWER, PROFILE_SCREEN_DRAWER } from '~/shared/constants';

import * as S from './styles';

export function DrawerContent(props: DrawerContentComponentProps) {
  const IconItem = useCallback(
    (name: string, iconType: string, color: any, size: any) => {
      return (
        <S.IconItem
          name={name}
          iconType={iconType}
          iconColor={color}
          size={size}
        />
      );
    },
    [],
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
            icon={({ color, size }) =>
              IconItem('home', 'materialCommunityIcons', color, size)
            }
            label="Home"
            onPress={() => props.navigation.navigate(MOVIE_SCREEN_DRAWER)}
          />

          <DrawerItem
            icon={({ color, size }) =>
              IconItem('user-circle', 'font-5', color, size)
            }
            label="Perfil"
            onPress={() => props.navigation.navigate(PROFILE_SCREEN_DRAWER)}
          />
        </Drawer.Section>
      </DrawerContentScrollView>

      <Drawer.Section style={S.ButtonDrawerSection}>
        <DrawerItem
          icon={({ color, size }) =>
            IconItem('exit-to-app', 'materialCommunityIcons', color, size)
          }
          label="Sair"
          onPress={() => console.log('a')}
        />
      </Drawer.Section>
    </S.Container>
  );
}
