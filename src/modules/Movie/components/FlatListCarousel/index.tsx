import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { GET_POSTER_PATH } from '~/shared/constants/api';

import * as S from './styles';

export function FlatListCarousel() {
  const { listMoviesTrending } = useSelector(
    (state: AplicationState) => state.movieTrending,
  );

  const renderMovie = useCallback(({ item }: any) => {
    return (
      <S.ImageBackground
        source={{
          uri: `${GET_POSTER_PATH}${item.backdrop_path}`,
        }}
        blurRadius={5}
        resizeMode="cover"
      >
        <S.ContainerMovieHighLight>
          <S.ContainerMovie>
            <S.ImageMovie
              source={{ uri: `${GET_POSTER_PATH}${item.poster_path}` }}
            />

            <S.ContainerInfo>
              <S.TitleMovieHighLight>{item.title}</S.TitleMovieHighLight>
              <S.PopularityMovieHighLight>
                <S.IconStar name="star" />
                {item.vote_average}
              </S.PopularityMovieHighLight>
              <S.OverviewMovieHighLight numberOfLines={5}>
                {item.overview}
              </S.OverviewMovieHighLight>
            </S.ContainerInfo>
          </S.ContainerMovie>
        </S.ContainerMovieHighLight>
      </S.ImageBackground>
    );
  }, []);

  return (
    <S.Container>
      <S.FlatList
        data={listMoviesTrending.results}
        extraData={listMoviesTrending.results}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={renderMovie}
      />
    </S.Container>
  );
}
