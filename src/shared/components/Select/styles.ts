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
  border-bottom-width: 1px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-color: ${({ theme }) => theme.Colors.INPUT_BORDER_COLOR};
`;

export const SelectPicker = styled(Picker)``;

export const IconSelect = styled(Icon).attrs<IconInputProps>(
  ({ name, iconType, theme }) => ({
    name,
    type: iconType,
    color: theme.Colors.ICON_COLOR,
    size: theme.Sizes.ICON_SIZE,
  }),
)<IconInputProps>``;
