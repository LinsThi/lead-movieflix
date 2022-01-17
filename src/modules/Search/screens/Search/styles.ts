import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';

interface IconProps {
  name: string;
  iconType: string;
}

export const Container = styled.View`
  flex: 1;
`;

export const ContainerSearch = styled.View`
  width: 100%;
  height: 80px;

  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconButton = styled.TouchableOpacity``;

export const IconFilter = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    size: theme.Sizes.ICON_SIZE_HEADER,
    color: theme.Colors.ICON_COLOR,
  }),
)<IconProps>``;
