import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.View``;

export const ContainerMovie = styled.View`
  margin: 10px 10px;
  border: 1px ${({ theme }) => theme.Colors.BORDER_BUTTON_COLOR};
`;

export const ContainerMovieName = styled.View`
  width: 100%;
  position: absolute;
  bottom: 0px;

  background: ${({ theme }) => theme.Colors.BACKGROUND_MOVIE_NAME};
`;

export const ImageMovie = styled.Image`
  width: 150px;
  height: 200px;
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const NameMovie = styled(NewText).attrs(({ theme }) => ({
  fontSize: theme.Sizes.TEXT_NAME_SIZE,
  fontColor: theme.Colors.TEXT_INPUT_COLOR,
}))`
  text-align: center;
`;

export const Indicator = styled.ActivityIndicator``;
