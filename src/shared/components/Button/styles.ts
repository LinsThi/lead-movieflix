import styled from 'styled-components/native';

export const Container = styled.View``;

export const Button = styled.TouchableOpacity`
  background: ${({ theme }) => theme.Colors.BUTTON_COLOR};
  border: 1px ${({ theme }) => theme.Colors.BORDER_BUTTON_COLOR};
  border-radius: 10px;
  padding: 7px 50px;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;
