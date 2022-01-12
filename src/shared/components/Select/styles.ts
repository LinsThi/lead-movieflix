import { Picker } from '@react-native-picker/picker';
import styled from 'styled-components/native';

import Icon from '../Icon';

interface IconInputProps {
  name: string;
  iconType?: string;
}

export const Container = styled.View`
  max-width: 290px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
`;

export const ContainerSelect = styled.View`
  flex: 1;
`;

export const SelectPicker = styled(Picker)``;

export const IconSelect = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType }) => ({
    name,
    type: iconType,
    color: '#3490dc',
    size: 20,
  }),
)<IconInputProps>``;
