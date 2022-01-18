import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND_HOME_LISTS};
`;

export const ContainerMovieHighLight = styled.View``;

export const ContainerMovieTrending = styled.View`
  padding-top: 15px;
  padding-left: 15px;
`;

export const ContainerMovieComingSoon = styled.View`
  padding: 15px 15px;
`;

export const TitleSection = styled(NewText).attrs(({ theme }) => ({
  fontSize: 18,
  fontColor: theme.Colors.TEXT_SECTION_COLOR,
}))`
  margin-bottom: 10px;
`;
