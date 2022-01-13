import React from 'react';
import { useDispatch } from 'react-redux';

import {
  decrementFontSizeAction,
  incrementFontSizeAction,
  restoreFontSizeAction,
} from '~/shared/store/ducks/font/action';
import { toogleThemeAction } from '~/shared/store/ducks/theme/action';

import * as S from './styles';

interface HeaderProps {
  enabledNavigation?: boolean;
  options?: any;
  navigation?: any;
}

export function Header({
  enabledNavigation,
  options,
  navigation,
}: HeaderProps) {
  const dispatch = useDispatch();

  return (
    <S.Container>
      <S.ContainerButton>
        <S.Button onPress={() => dispatch(toogleThemeAction())}>
          <S.IconButton iconType="font" name="adjust" />
        </S.Button>

        <S.ContainerFont>
          <S.Button onPress={() => dispatch(decrementFontSizeAction())}>
            <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
          </S.Button>

          <S.Button onPress={() => dispatch(restoreFontSizeAction())}>
            <S.RestoreFont>A</S.RestoreFont>
          </S.Button>

          <S.Button onPress={() => dispatch(incrementFontSizeAction())}>
            <S.DecreaseIncreaseFont>A+</S.DecreaseIncreaseFont>
          </S.Button>
        </S.ContainerFont>
      </S.ContainerButton>

      {enabledNavigation && (
        <S.ContainerPage>
          <S.Button
            onPress={() => navigation.openDrawer()}
            style={{ position: 'absolute', left: 10 }}
          >
            <S.IconButton iconType="ionicons" name="ios-menu-sharp" />
          </S.Button>

          {options && <S.Title>{options.title}</S.Title>}
        </S.ContainerPage>
      )}
    </S.Container>
  );
}
