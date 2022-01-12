import React from 'react';
import type { TouchableOpacityProps } from 'react-native';

import { NewText } from '../Text';

import * as S from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <S.Container>
      <S.Button {...rest}>
        <NewText>{title}</NewText>
      </S.Button>
    </S.Container>
  );
}
