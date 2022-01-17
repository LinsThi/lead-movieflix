import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';

interface IconProps {
  name: string;
  iconType: string;
}

interface TextInputProps {
  fontSize: number;
}

export const Container = styled.View`
  width: 75%;
  flex-direction: row;
  background: ${({ theme }) => theme.Colors.SEARCH_BAR_COLOR};
  border-radius: 7px;
  padding: 5px 5px;
  align-items: center;
`;

export const InputSearch = styled.TextInput<TextInputProps>`
  width: 90%;
  padding: 0px 5px;
  font-size: ${({ fontSize }) => fontSize}px;
  font-style: italic;
`;

export const IconInput = styled(Icon).attrs<IconProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    size: theme.Sizes.ICON_SIZE_HEADER,
    color: theme.Colors.ICON_COLOR_HEADER,
  }),
)<IconProps>``;

export const Button = styled.TouchableOpacity``;
