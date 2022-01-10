import React from 'react';
import type { TextInputProps } from 'react-native';

import * as S from './styles';

interface InputProps extends TextInputProps {
  iconLeft?: string;
  iconType?: string;
  iconRight?: string;
  iconAction?: () => void;
}

export function Input({
  iconLeft,
  iconType,
  iconRight,
  iconAction,
  ...rest
}: InputProps) {
  return (
    <S.InputWrapper>
      <S.ContainerInputIcon>
        {iconLeft && <S.IconInput iconType={iconType} name={iconLeft} />}
        <S.Container>
          <S.ContainerInput>
            <S.InputLogin {...rest} iconRight={iconRight} />
            {iconRight && (
              <S.Button onPress={() => iconAction && iconAction()}>
                <S.IconInput name={iconRight} />
              </S.Button>
            )}
          </S.ContainerInput>
        </S.Container>
      </S.ContainerInputIcon>
    </S.InputWrapper>
  );
}
