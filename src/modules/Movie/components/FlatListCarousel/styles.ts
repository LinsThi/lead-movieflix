import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';
import { NewText } from '~/shared/components/Text';

const { width } = Dimensions.get('screen');

interface IconInputProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View``;

export const ContainerMovie = styled.View`
  flex-direction: row;
`;

export const ContainerMovieHighLight = styled.View`
  width: ${width.toFixed()}px;
  padding: 10px 5px;
`;

export const ContainerInfo = styled.View`
  padding: 0px 8px;
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  height: 200px;
`;

export const FlatList = styled.FlatList`
  width: 100%;
`;

export const TitleMovieHighLight = styled(NewText).attrs(({ theme }) => ({
  fontSize: 18,
  fontColor: theme.Colors.TEXT_NO_CLICKABLE,
}))``;

export const PopularityMovieHighLight = styled(NewText).attrs(({ theme }) => ({
  fontSize: 16,
  fontColor: theme.Colors.TEXT_NO_CLICKABLE,
}))`
  padding: 5px 0px;
`;

export const OverviewMovieHighLight = styled(NewText).attrs(({ theme }) => ({
  fontSize: 16,
  fontColor: theme.Colors.TEXT_NO_CLICKABLE,
}))`
  padding-right: 5px;
`;

export const IconStar = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_STAR_COLOR,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;

export const ImageMovie = styled.Image`
  width: 140px;
  height: 180px;
`;
