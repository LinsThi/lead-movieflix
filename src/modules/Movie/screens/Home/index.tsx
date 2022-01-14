import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';

import * as S from './styles';

export function Home() {
  const { currentUser } = useSelector((state: AplicationState) => state.user);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Bem-Vindo(a) ${currentUser.username}`,
      menu: 'Home',
    });
  }, [navigation, currentUser.username]);

  return (
    <S.Container>
      <S.ContainerInfo>
        <Text>Home</Text>
      </S.ContainerInfo>
    </S.Container>
  );
}
