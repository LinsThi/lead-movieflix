import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';

import { FlatListCarousel } from '../../components/FlatListCarousel';
import { FlatListComing } from '../../components/FlatListComing';
import { FlatListTrending } from '../../components/FlatListTrending';

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
      <S.ContainerMovieHighLight>
        <FlatListCarousel />
      </S.ContainerMovieHighLight>

      <S.ContainerMovieTrending>
        <S.TitleSection>Filmes Tendência</S.TitleSection>

        <FlatListTrending />
      </S.ContainerMovieTrending>

      <S.ContainerMovieComingSoon>
        <S.TitleSection>Em Breve</S.TitleSection>

        <FlatListComing />
      </S.ContainerMovieComingSoon>
    </S.Container>
  );
}
