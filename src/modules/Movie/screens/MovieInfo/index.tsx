import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { GET_POSTER_PATH } from '~/shared/constants/api';

import { searchMoviesTrailer } from '../../services/movies';

import * as S from './styles';

export function MovieInfo() {
  const routes = useRoute();
  const navigation = useNavigation();

  const { movie } = routes.params;

  const [keyTrailer, setKeyTrailer] = useState('');
  const [playing, setPlaying] = useState(false);

  const onStateTrailer = useCallback((state: string) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  useEffect(() => {
    let response;
    async function getKeyTrailer() {
      response = await searchMoviesTrailer(movie.id);
      setKeyTrailer(response.data.results[0].key);
    }
    getKeyTrailer();
  }, [movie.id]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Informações do filme',
    });
  }, [navigation]);

  console.tron.log(movie);

  return (
    <S.Container>
      <S.ContainerPost>
        <S.ImageBackground
          source={{ uri: `${GET_POSTER_PATH}${movie.backdrop_path}` }}
          blurRadius={7}
          resizeMode="cover"
        >
          <S.ImageMovie
            source={{ uri: `${GET_POSTER_PATH}${movie.poster_path}` }}
            resizeMode="contain"
          />

          <S.ContainerName>
            <S.TextTitle>{movie.title}</S.TextTitle>
          </S.ContainerName>
        </S.ImageBackground>
      </S.ContainerPost>

      <S.ContainerInfo>
        <S.TextInfo>Descrição</S.TextInfo>

        <S.TextOverview>{movie.overview}</S.TextOverview>
      </S.ContainerInfo>

      <S.ContainerTrailer>
        <S.TextInfo>Trailer</S.TextInfo>

        <YoutubePlayer
          height={300}
          play={playing}
          videoId={keyTrailer}
          onChangeState={onStateTrailer}
        />
      </S.ContainerTrailer>
    </S.Container>
  );
}
