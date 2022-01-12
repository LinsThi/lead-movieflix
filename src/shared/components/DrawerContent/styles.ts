import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconProps {
  name: string;
  iconType: string;
  iconColor: string;
  size: number;
}

export const Container = styled.View`
  flex: 1;
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
  padding: 0px 5px;
  flex: 1;
`;

export const AvatarUser = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-left: 10px;
`;

export const UserName = styled(NewText).attrs({
  fontSize: 20,
  fontColor: '#000',
})``;

export const UserEmail = styled(NewText).attrs({
  fontSize: 16,
  fontColor: '#000',
})`
  padding-left: 5px;
  padding-top: 5px;
  text-align: justify;
`;

export const IconItem = styled(Icon).attrs<IconProps>(
  ({ name, iconType, iconColor, size }) => ({
    name,
    type: iconType,
    color: iconColor,
    size,
  }),
)<IconProps>``;

export const DrawerRoutes = {
  marginTop: 15,
};

export const ButtonDrawerSection = {
  marginBottom: 15,
  borderTopColor: '#f4f4f4',
  borderTopWidth: 1,
};
