import type { PickerProps } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components/native';

import { LIST_GENDERS } from '~/modules/Profile/constants';

import * as S from './styles';

interface SelectProps {
  title: string;
}

const Select: React.FC<PickerProps & SelectProps> = ({
  title,
  ...rest
}: SelectProps) => {
  const { Colors } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.IconSelect iconType="feather" name="users" />
      <S.ContainerSelect>
        <S.SelectPicker {...rest} dropdownIconColor={Colors.ICON_COLOR}>
          <Picker.Item
            label={title}
            value="0"
            enabled={false}
            color={Colors.PLACEHOLDER_INPUT_COLOR}
            style={{
              backgroundColor: Colors.BACKGROUND,
              color: Colors.FONT_COLOR_DARK,
            }}
          />
          {LIST_GENDERS.map(gender => {
            return (
              <Picker.Item
                label={gender.label}
                value={gender.id}
                key={gender.id}
                style={{
                  backgroundColor: Colors.BACKGROUND,
                  color: Colors.FONT_COLOR_DARK,
                }}
              />
            );
          })}
        </S.SelectPicker>
      </S.ContainerSelect>
    </S.Container>
  );
};

export default Select;
