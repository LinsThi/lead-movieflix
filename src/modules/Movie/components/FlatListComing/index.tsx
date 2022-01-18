import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { GET_POSTER_PATH } from '~/shared/constants/api';

import * as S from './styles';

export function FlatListComing() {
  const { listMoviesComing } = useSelector(
    (state: AplicationState) => state.movieComing,
  );

  const renderMovieComing = useCallback(({ item }: any) => {
    return (
      <S.ContainerMovie>
        <S.ImageMovie
          source={{
            uri: item.poster_path
              ? `${GET_POSTER_PATH}${item.poster_path}`
              : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg',
          }}
        />

        <S.ContainerInfo>
          <S.TitleMovie numberOfLines={1}>{item.title}</S.TitleMovie>
          <S.ReleaseDateMovie>{item.release_date}</S.ReleaseDateMovie>
          <S.OverviewMovie numberOfLines={5}>
            {item.overview || 'Sem innformação'}
          </S.OverviewMovie>
        </S.ContainerInfo>
      </S.ContainerMovie>
    );
  }, []);

  return (
    <S.Container>
      <S.FlatList
        data={listMoviesComing.results}
        extraData={listMoviesComing.results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderMovieComing}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
