import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.Colors.BACKGROUND};
`;

export const ContainerInfo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
