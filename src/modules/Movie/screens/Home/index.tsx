import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { NewText } from '~/shared/components/Text';

import * as S from './styles';

export function Home() {
  const { currentUser } = useSelector((state: AplicationState) => state.user);

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Bem-Vindo(a) ${currentUser.username}`,
    });
  }, [navigation, currentUser.username]);

  return (
    <S.Container>
      <S.ContainerInfo>
        <NewText fontColor="#000">Home</NewText>
      </S.ContainerInfo>
    </S.Container>
  );
}
