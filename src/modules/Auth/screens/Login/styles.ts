import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

interface ContainerButtonProps {
  positionButton?: string;
}

export const Container = styled.View`
  flex: 1;
  background: #3490dc;
`;

export const ContainerHeader = styled.View`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = {
  flex: 0.5,
  backgroundColor: '#fff',
  width: '100%',
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

export const ContainerInput = styled.View`
  margin-top: 30px;
  margin-left: 30px;
  width: 90%;
`;

export const ContainerButton = styled.View<ContainerButtonProps>`
  width: 95%;
  align-items: ${({ positionButton }) => positionButton};
  margin-top: 15px;
`;

export const Title = styled(NewText).attrs({ fontSize: 30, fontColor: '#000' })`
  margin-bottom: 10px;
`;

export const TextLogin = styled(NewText).attrs({
  fontSize: 18,
  fontColor: '#000',
})`
  font-size: 20px;
`;

export const TextButton = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonLogin = styled.TouchableOpacity`
  width: 160px;
  height: 40px;
  justify-content: center;
  align-items: center;

  background: #3490dc;
  border-radius: 10px;
  margin-top: 20px;
`;
