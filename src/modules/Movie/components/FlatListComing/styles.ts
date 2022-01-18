import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.View``;

export const ContainerMovie = styled.View`
  margin-bottom: 20px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding-right: 5px;
  padding-left: 10px;
`;

export const FlatList = styled.FlatList``;

export const ImageMovie = styled.Image`
  width: 110px;
  height: 150px;
  border-radius: 10px;
`;

export const TitleMovie = styled(NewText).attrs(({ theme }) => ({
  fontSize: 18,
  fontColor: theme.Colors.TEXT_CLICKABLE,
}))`
  margin-top: 5px;
`;

export const ReleaseDateMovie = styled(NewText).attrs(({ theme }) => ({
  fontSize: 16,
  fontColor: theme.Colors.TEXT_CLICKABLE,
}))``;

export const OverviewMovie = styled(NewText).attrs(({ theme }) => ({
  fontSize: 16,
  fontColor: theme.Colors.TEXT_CLICKABLE,
}))``;

export const ButtonMovie = styled.TouchableOpacity``;
