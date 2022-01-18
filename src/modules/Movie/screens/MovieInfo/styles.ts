import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerPost = styled.View`
  flex-direction: row;
`;

export const ContainerName = styled.View`
  flex: 1;
`;

export const ContainerInfo = styled.View`
  width: 100%;
  padding: 20px 20px;
  border-bottom-width: 1px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-color: ${({ theme }) => theme.Colors.BACKGROUND_HEADER};
`;

export const ContainerTrailer = styled.View`
  width: 100%;
  padding: 20px 20px;
`;

export const ImageBackground = styled.ImageBackground`
  padding: 10px 10px;
  width: 100%;
  flex-direction: row;
`;

export const ImageMovie = styled.Image`
  width: 150px;
  height: 200px;
`;

export const TextInfo = styled(NewText).attrs(({ theme }) => ({
  fontSize: 18,
  fontColor: theme.Colors.ICON_COLOR,
}))`
  margin-bottom: 10px;
`;

export const TextTitle = styled(NewText).attrs(({ theme }) => ({
  fontSize: 25,
  fontColor: theme.Colors.TEXT_MOVIE_TITLE_COLOR,
}))`
  position: absolute;
  bottom: 10px;
  background: ${({ theme }) => theme.Colors.BACKGROUND_HOME_LISTS};
  border-radius: 10px;
  opacity: 0.85;
  padding: 5px 5px;
`;

export const TextOverview = styled(NewText).attrs(({ theme }) => ({
  fontSize: 18,
  fontColor: theme.Colors.TEXT_MOVIE_TITLE_COLOR,
}))`
  text-align: center;
  background: ${({ theme }) => theme.Colors.BACKGROUND_MOVIE_OVERVIEW};
  border-radius: 10px;
  padding: 5px 5px;
`;
