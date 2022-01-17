import React, { useContext } from 'react';
import type { TextInputProps } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';

import * as S from './styles';

export function SearchBar({ ...rest }: TextInputProps) {
  const { delta } = useSelector((state: AplicationState) => state.font);
  const { Sizes, Colors } = useContext(ThemeContext);
  const fontSizeSearch = Sizes.FONTSIZE_SEARCH + delta;

  return (
    <S.Container>
      <S.InputSearch
        {...rest}
        fontSize={fontSizeSearch}
        placeholderTextColor={Colors.TEXT_INPUT_COLOR}
      />

      <S.Button onPress={() => console.log('a')}>
        <S.IconInput name="search" iconType="evilIcons" />
      </S.Button>
    </S.Container>
  );
}
