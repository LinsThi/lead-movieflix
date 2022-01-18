import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';
import { NewText } from '~/shared/components/Text';

interface IconInputProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View``;

export const ContainerMovie = styled.View`
  width: 110px;
  margin-right: 20px;
`;

export const FlastList = styled.FlatList`
  width: 100%;
`;

export const ImageMovie = styled.Image`
  width: 110px;
  height: 180px;
  border-radius: 10px;
`;

export const TitleMovie = styled(NewText).attrs(({ theme }) => ({
  fontSize: 18,
  fontColor: theme.Colors.TEXT_CLICKABLE,
}))`
  text-align: center;
`;

export const PopularityMovieHighLight = styled(NewText).attrs(({ theme }) => ({
  fontSize: 16,
  fontColor: theme.Colors.TEXT_CLICKABLE,
}))`
  text-align: center;
`;

export const IconStar = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_STAR_COLOR,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;
