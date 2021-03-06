import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { GET_POSTER_PATH } from '~/shared/constants/api';
import { MOVIE_INFO_SCREEN } from '~/shared/constants/routes';

import * as S from './styles';

export function FlatListTrending() {
  const { listMoviesTrending } = useSelector(
    (state: AplicationState) => state.movieTrending,
  );

  const navigation = useNavigation();

  const renderMovie = useCallback(({ item }: any) => {
    return (
      <S.ContainerMovie>
        <S.ButtonMovie
          onPress={() =>
            navigation.navigate(MOVIE_INFO_SCREEN, { movie: item })
          }
        >
          <S.ImageMovie
            source={{
              uri: item.poster_path
                ? `${GET_POSTER_PATH}${item.poster_path}`
                : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg',
            }}
          />
          <S.TitleMovie numberOfLines={2}>{item.title}</S.TitleMovie>
          <S.PopularityMovieHighLight>
            <S.IconStar name="star" /> {item.vote_average}/10
          </S.PopularityMovieHighLight>
        </S.ButtonMovie>
      </S.ContainerMovie>
    );
  }, []);

  return (
    <S.Container>
      <S.FlastList
        data={listMoviesTrending.results}
        extraData={listMoviesTrending.results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderMovie}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </S.Container>
  );
}
