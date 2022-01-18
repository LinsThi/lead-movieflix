import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconProps {
  name: string;
  iconType: string;
}

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.Colors.BACKGROUND_HEADER};
`;

export const ContainerButton = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
`;

export const ContainerFont = styled.View`
  flex-direction: row;
`;

export const ContainerPage = styled.View`
  padding: 10px 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const DecreaseIncreaseFont = styled(NewText).attrs(({ theme }) => ({
  fontSize: 25,
  fontColor: theme.Colors.ICON_COLOR_HEADER,
}))`
  font-weight: bold;
`;

export const RestoreFont = styled(NewText).attrs(({ theme }) => ({
  fontSize: 25,
  fontColor: theme.Colors.ICON_COLOR_HEADER,
}))`
  font-weight: bold;
  margin: 0px 15px;
`;

export const Title = styled(NewText).attrs({ fontSize: 22 })`
  font-weight: bold;
  padding-left: 10px;
`;

export const IconButton = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR_HEADER,
    size: theme.Sizes.ICON_SIZE_HEADER,
  }),
)<IconProps>``;
