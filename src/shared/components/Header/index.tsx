import { useNavigation } from '@react-navigation/native';
import React from 'react';

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
  return (
    <S.Container>
      <S.ContainerButton>
        <S.Button>
          <S.IconButton iconType="font" name="adjust" />
        </S.Button>

        <S.ContainerFont>
          <S.Button>
            <S.DecreaseIncreaseFont>A-</S.DecreaseIncreaseFont>
          </S.Button>

          <S.Button>
            <S.RestoreFont>A</S.RestoreFont>
          </S.Button>

          <S.Button>
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
