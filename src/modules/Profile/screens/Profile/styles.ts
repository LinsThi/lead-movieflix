import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
}

export const Container = styled.ScrollView`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerImage = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.Colors.BACKGROUND_HEADER};
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
`;

export const ContainerImageIcon = styled.View`
  position: absolute;
  bottom: 20px;
  right: 110px;
`;

export const ContainerInputs = styled.View`
  flex: 1;
  width: 95%;
  padding: 10px 10px;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.View`
  width: 100%;
  align-items: center;
  padding: 10px 0px;
`;

export const ImageUser = styled.Image`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`;

export const ButtonIcon = styled.TouchableOpacity``;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR_HEADER,
    size: 40,
  }),
)<IconInputProps>``;
