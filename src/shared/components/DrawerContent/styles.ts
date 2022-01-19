import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconProps {
  name: string;
  iconType: string;
}

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND_HEADER};
`;

export const ContainerDrawerContent = styled.View`
  flex: 1;
  padding-top: 20px;
`;

export const ContainerDrawerUser = styled.View``;

export const ContainerUserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerUser = styled.View`
  padding-left: 10px;
  padding-right: 5px;
  flex: 1;
`;

export const AvatarUser = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 10px;
`;

export const UserName = styled(NewText).attrs(({ theme }) => ({
  fontSize: theme.Sizes.TEXT_SIZE_USERNAME_PRIMARY,
  fontColor: theme.Colors.TEXT_USERNAME_PRIMARY,
}))``;

export const UserEmail = styled(NewText).attrs(({ theme }) => ({
  fontSize: theme.Sizes.TEXT_SIZE_USERNAME_SECONDARY,
  fontColor: theme.Colors.TEXT_USERNAME_SECONDARY,
}))`
  padding-top: 5px;
  text-align: justify;
`;

export const IconItem = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR_HEADER,
    size: theme.Sizes.ICON_SIZE_MENU,
  }),
)<IconProps>``;

export const DrawerRoutes = {
  marginTop: 15,
};

export const DrawerButtonBottom = {
  paddingBottom: 20,
};
