import * as ImagePicker from 'expo-image-picker';
import React, { useContext } from 'react';
import { Portal, Modal } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import { updateUserAvatarAction } from '~/shared/store/ducks/user/action';

import { NewText } from '../../../../shared/components/Text';

import * as S from './styles';

interface Props {
  visible: boolean;
  setVisible: (show: boolean) => void;
}

export function ModalProduct({ visible, setVisible }: Props) {
  const { Colors, Sizes } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const hideModal = () => setVisible(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(updateUserAvatarAction(result.uri));
      setVisible(false);
    }
  };

  const selectImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      dispatch(updateUserAvatarAction(result.uri));
      setVisible(false);
    }
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={[
          S.containerModal,
          { backgroundColor: Colors.BACKGROUND_MODAL },
        ]}
      >
        <S.Container>
          <S.Title>Selecione uma opção</S.Title>
          <S.ContainerButton>
            <S.ButtonModal
              colorBackground={Colors.BACKGROUND}
              colorBorder={Colors.BORDER_BUTTON_COLOR}
              onPress={() => pickImage()}
            >
              <S.IconButton
                iconType="font"
                name="camera"
                iconColor={Colors.ICON_COLOR}
                iconSize={Sizes.ICON_SIZE}
              />
              <NewText fontColor={Colors.FONT_COLOR_MODAL}>
                Abrir camera
              </NewText>
            </S.ButtonModal>
            <S.ButtonModal
              colorBackground={Colors.BACKGROUND}
              colorBorder={Colors.BORDER_BUTTON_COLOR}
              onPress={() => selectImage()}
            >
              <S.IconButton
                iconType="font"
                name="photo"
                iconColor={Colors.ICON_COLOR}
                iconSize={Sizes.ICON_SIZE}
              />
              <NewText fontColor={Colors.FONT_COLOR_MODAL}>
                Abrir galeria
              </NewText>
            </S.ButtonModal>
          </S.ContainerButton>
        </S.Container>
      </Modal>
    </Portal>
  );
}
