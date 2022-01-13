import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';

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
  const { Colors, Sizes } = useContext(ThemeContext);
  const fontInputSize = Sizes.INPUT_SIZE;
  const { delta } = useSelector((state: AplicationState) => state.font);

  return (
    <S.InputWrapper>
      <S.ContainerInputIcon>
        {iconLeft && <S.IconInput iconType={iconType} name={iconLeft} />}
        <S.Container>
          <S.ContainerInput>
            <S.InputLogin
              {...rest}
              iconRight={iconRight}
              fontSize={fontInputSize + delta}
              placeholderTextColor={Colors.PLACEHOLDER_INPUT_COLOR}
            />
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
