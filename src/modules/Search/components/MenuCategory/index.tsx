import React, { useCallback, useContext, useState } from 'react';
import { Menu } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import type { GenreMovie } from '~/modules/Movie/dtos/Movie';

import { setCategorySelectedAction } from '../../store/ducks/movieCategory/action';

import * as S from './styles';

export function MenuCategory() {
  const { Colors } = useContext(ThemeContext);
  const { listCategory, categorySelected } = useSelector(
    (state: AplicationState) => state.movieCategory,
  );

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);

  const openMenu = useCallback(() => {
    setVisible(true);
  }, []);

  const closeMenu = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <S.Container>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <S.IconButton onPress={openMenu}>
            <S.IconFilter name="filter" iconType="ionicons" />
          </S.IconButton>
        }
      >
        <Menu.Item
          onPress={() => {
            dispatch(setCategorySelectedAction({ id: 0, name: '' }));
            closeMenu();
          }}
          title="Todos"
          titleStyle={{ color: Colors.FONT_COLOR_DARK }}
          style={
            categorySelected.name === ''
              ? { backgroundColor: Colors.BACKGROUND_MENU_SELECTED }
              : { backgroundColor: Colors.BACKGROUND_HEADER }
          }
        />
        {listCategory.map((category: GenreMovie) => {
          return (
            <Menu.Item
              onPress={() => {
                dispatch(setCategorySelectedAction(category));
                closeMenu();
              }}
              title={category.name}
              titleStyle={{ color: Colors.FONT_COLOR_DARK }}
              key={category.id}
              style={
                categorySelected.name === category.name
                  ? { backgroundColor: Colors.BACKGROUND_MENU_SELECTED }
                  : { backgroundColor: Colors.BACKGROUND_HEADER }
              }
            />
          );
        })}
      </Menu>
    </S.Container>
  );
}
