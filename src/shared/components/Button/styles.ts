import styled from 'styled-components/native';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.View``;

export const Button = styled.TouchableOpacity<ButtonProps>`
  background: ${({ disabled, theme }) =>
    disabled ? theme.Colors.BUTTON_COLOR_DISABLED : theme.Colors.BUTTON_COLOR};
  border: 1px ${({ theme }) => theme.Colors.BORDER_BUTTON_COLOR};
  border-radius: 10px;
  padding: 7px 50px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;
