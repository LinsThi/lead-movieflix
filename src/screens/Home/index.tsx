import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';

import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Bem-Vinda May',
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.ContainerInfo>
        <Text>Home</Text>
      </S.ContainerInfo>
    </S.Container>
  );
}
