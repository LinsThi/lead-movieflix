import type { PickerProps } from '@react-native-picker/picker';
import { Picker } from '@react-native-picker/picker';
import React from 'react';

import { LIST_GENDERS } from '~/modules/Profile/constants';

import * as S from './styles';

interface SelectProps {
  title: string;
}

const Select: React.FC<PickerProps & SelectProps> = ({
  title,
  ...rest
}: SelectProps) => {
  return (
    <S.Container>
      <S.IconSelect iconType="feather" name="users" />
      <S.ContainerSelect
        style={{
          borderBottomColor: '#c5c5c5',
          borderBottomWidth: 2,
          borderBottomStartRadius: 15,
          borderBottomEndRadius: 15,
        }}
      >
        <S.SelectPicker {...rest} dropdownIconColor="#3490dc">
          <Picker.Item label={title} value="0" enabled={false} />
          {LIST_GENDERS.map(gender => {
            return (
              <Picker.Item
                label={gender.label}
                value={gender.id}
                key={gender.id}
                style={{
                  backgroundColor: '#d5d5',
                  color: '#000',
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
