import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconInputProps {
  name: string;
  iconType?: string;
}

interface TextInputProps {
  iconRight?: string;
  fontSize: number;
}

export const InputWrapper = styled.View`
  margin-bottom: 10px;
  max-width: 300px;
`;

export const ContainerInputIcon = styled.View`
  flex-direction: row;

  align-items: center;
  border-radius: 14px;
`;

export const Container = styled.View`
  padding: 5px 0px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  width: 250px;
  padding: 0 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.Colors.INPUT_BORDER_COLOR};
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;

export const InputLogin = styled.TextInput<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  padding-right: 10px;
  height: 53px;
  font-size: ${({ fontSize }) => fontSize}px;
  color: ${({ theme }) => theme.Colors.TEXT_INPUT_COLOR};
`;

export const Button = styled.TouchableOpacity``;

export const ErrorMessage = styled(NewText)`
  color: ${({ theme }) => theme.Colors.TEXT_ERROR_COLOR};
  margin-top: 10px;
`;
