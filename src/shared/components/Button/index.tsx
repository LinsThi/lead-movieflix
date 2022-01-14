import React, { useContext } from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { ThemeContext } from 'styled-components/native';

import { NewText } from '../Text';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  disabled?: boolean;
}

export function Button({ title, ...rest }: ButtonProps) {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.Button {...rest}>
        <NewText fontColor={Colors.TEXT_CLICKABLE}>{title}</NewText>
      </S.Button>
    </S.Container>
  );
}
