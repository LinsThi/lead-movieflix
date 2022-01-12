import styled from 'styled-components/native';

import Icon from '../Icon';

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
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  padding-left: 15px;
`;

export const Container = styled.View`
  padding: 5px;
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  width: 250px;
  padding: 0 5px;
  border-bottom-width: 1px;
  border-bottom-color: #3490dc;
`;

export const IconInput = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType }) => ({
    name,
    type: iconType,
    color: '#3490dc',
    size: 20,
  }),
)<IconInputProps>``;

export const InputLogin = styled.TextInput<TextInputProps>`
  width: ${({ iconRight }) => (iconRight ? 90 : 100)}%;
  padding-right: 10px;
  height: 53px;
  font-size: 20px;
`;

export const Button = styled.TouchableOpacity``;
