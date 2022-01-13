import React from 'react';
import type { TextProps } from 'react-native';
import { useSelector } from 'react-redux';

import type { AplicaState } from '~/@types/Entity/AplicationState';

import * as S from './styles';

interface NewTextProps extends TextProps {
  fontSize?: number;
  fontColor?: string;
}

export function NewText({
  fontSize = 18,
  fontColor,
  children,
  ...rest
}: NewTextProps) {
  const { delta } = useSelector((state: AplicaState) => state.font);

  return (
    <S.Text fontSize={fontSize + delta} fontColor={fontColor} {...rest}>
      {children}
    </S.Text>
  );
}
