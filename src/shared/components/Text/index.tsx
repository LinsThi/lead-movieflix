import React from 'react';
import type { TextProps } from 'react-native';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';

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
  const { delta } = useSelector((state: AplicationState) => state.font);

  return (
    <S.Text fontSize={fontSize + delta} fontColor={fontColor} {...rest}>
      {children}
    </S.Text>
  );
}
