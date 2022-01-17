import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { SearchBar } from '../../components/SearchBar';

import * as S from './styles';

export function Search() {
  const [searchMovie, setSearchMovie] = useState('');

  const navigation = useNavigation();

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
          value={searchMovie}
          onChangeText={setSearchMovie}
        />

        <S.IconButton onPress={() => console.log('a')}>
          <S.IconFilter name="filter" iconType="ionicons" />
        </S.IconButton>
      </S.ContainerSearch>
    </S.Container>
  );
}
