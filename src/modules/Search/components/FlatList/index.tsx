import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { getMoviesAction } from '~/modules/Search/store/ducks/movieSearch/action';
import { GET_POSTER_PATH } from '~/shared/constants/api';
import { MOVIE_INFO_SCREEN } from '~/shared/constants/routes';

import * as S from './styles';

interface FlatMoviesProps {
  filterMovieName: string;
}

export function FlatList({ filterMovieName }: FlatMoviesProps) {
  const { listMovies, getLoading } = useSelector(
    (state: AplicationState) => state.movieSearch,
  );
  const { Colors } = useContext(ThemeContext);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const FoaterList = useCallback(
    ({ load }) => {
      if (!load) return null;

      return <S.Indicator size="large" color={Colors.ICON_COLOR} />;
    },
    [Colors.ICON_COLOR],
  );

  const handleUpdatePageMovies = useCallback(() => {
    if (listMovies.page + 1 <= listMovies.total_pages) {
      dispatch(getMoviesAction(filterMovieName, listMovies.page + 1));
    }
  }, [dispatch, filterMovieName, listMovies.page, listMovies.total_pages]);

  const renderMovie = useCallback(({ item }: any) => {
    return (
      <S.ButtonMovie
        onPress={() => navigation.navigate(MOVIE_INFO_SCREEN, { movie: item })}
      >
        <S.ContainerMovie>
          <S.ImageMovie
            source={{
              uri: item.poster_path
                ? `${GET_POSTER_PATH}${item.poster_path}`
                : 'https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg',
            }}
          />

          <S.ContainerMovieName>
            <S.NameMovie>{item.title}</S.NameMovie>
          </S.ContainerMovieName>
        </S.ContainerMovie>
      </S.ButtonMovie>
    );
  }, []);

  return (
    <S.Container>
      <S.FlatList
        data={listMovies.results}
        extraData={listMovies.results}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderMovie}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        onEndReached={() => handleUpdatePageMovies()}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<FoaterList load={getLoading} />}
      />
    </S.Container>
  );
}
