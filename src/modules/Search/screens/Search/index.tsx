import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { getMoviesAction } from '~/modules/Search/store/ducks/movieSearch/action';
import { NewText } from '~/shared/components/Text';

import search from '../../assets/search.json';
import { FlatList } from '../../components/FlatList';
import { MenuCategory } from '../../components/MenuCategory';
import { SearchBar } from '../../components/SearchBar';

import * as S from './styles';

export function Search() {
  const { Colors } = useContext(ThemeContext);
  const { listMovies } = useSelector(
    (state: AplicationState) => state.movieSearch,
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [searchMovies, setSearchMovies] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: `Procure um filme`,
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.ContainerSearch>
        <SearchBar
          placeholder="Digite o nome do filme"
          value={searchMovies}
          onChangeText={setSearchMovies}
          onEndEditing={() => dispatch(getMoviesAction(searchMovies, 1))}
        />

        <MenuCategory />
      </S.ContainerSearch>

      <S.ContainerMovies>
        {listMovies.length !== 0 ? (
          <FlatList filterMovieName={searchMovies} />
        ) : (
          <S.ContainerMoviesInfo>
            <NewText
              fontColor={Colors.TEXT_INPUT_COLOR}
              fontSize={30}
              style={{ textAlign: 'center' }}
            >
              Digite o nome do filme
            </NewText>

            <LottieView
              source={search}
              autoPlay
              style={{ width: 200, height: 200 }}
              resizeMode="cover"
            />
          </S.ContainerMoviesInfo>
        )}
      </S.ContainerMovies>
    </S.Container>
  );
}
