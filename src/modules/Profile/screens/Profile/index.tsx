import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useFormik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { ALERT_TYPE, Toast, Root } from 'react-native-alert-notification';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/@types/Entity/AplicationState';
import { ModalProduct } from '~/modules/Profile/components/Modal';
import { Button } from '~/shared/components/Button';
import { Input } from '~/shared/components/Input';
import Select from '~/shared/components/Select';
import { updateUserAction } from '~/shared/store/ducks/user/action';

import type { GenderProps } from '../../constants';
import { validationSchema } from './validation';

import * as S from './styles';

interface DataProps {
  username: string;
  email: string;
  birthDate: string;
  gender: GenderProps;
  password: string;
  newPassword: string;
}

export function Profile() {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { currentUser } = useSelector((state: AplicationState) => state.user);

  const [visible, setVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      title: 'Perfil',
      menu: 'Perfil',
    });
  }, [navigation, currentUser.avatar]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert(
            'Sorry, we need camera roll permissions to make this work!',
          );
        }
      }
    })();
  }, []);

  const handleUpdateUser = useCallback(
    (data: DataProps) => {
      const userUpdated = {
        username: data.username,
        avatar: currentUser.avatar,
        email: data.email,
        birthDate: data.birthDate,
        gender: data.gender,
        password: data.password || currentUser.password,
      };

      dispatch(updateUserAction(userUpdated));
      Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Sucesso',
        textBody: 'Usuário foi atualizado com sucesso',
      });
    },
    [currentUser.avatar, currentUser.password, dispatch],
  );

  const showModal = useCallback(() => {
    setVisible(true);
  }, []);

  const { handleSubmit, handleChange, dirty, values, errors, setFieldValue } =
    useFormik({
      initialValues: {
        username: currentUser.username,
        email: currentUser.email,
        birthDate: currentUser.birthDate,
        gender: currentUser.gender,
        password: '',
        newPassword: '',
      },
      validationSchema,
      validateOnChange: false,
      onSubmit: handleUpdateUser,
    });

  return (
    <Root>
      <S.Container showsVerticalScrollIndicator={false}>
        <S.ContainerImage>
          <S.ImageUser
            source={{
              uri:
                currentUser.avatar ||
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
            }}
          />

          <S.ContainerImageIcon>
            <S.ButtonIcon onPress={() => showModal()}>
              <S.IconInput name="pencil-circle" />
            </S.ButtonIcon>
          </S.ContainerImageIcon>
        </S.ContainerImage>

        <S.ContainerInputs>
          <Input
            placeholder="Usuário"
            iconLeft="user"
            iconType="feather"
            value={values.username}
            onChangeText={handleChange('username')}
            error={errors.username}
          />
          <Input
            placeholder="E-mail"
            iconLeft="email-outline"
            value={values.email}
            onChangeText={handleChange('email')}
            error={errors.email}
          />
          <Input
            placeholder="Data de aniversário"
            iconLeft="calendar-star"
            value={values.birthDate}
            onChangeText={handleChange('birthDate')}
            error={errors.birthDate}
          />

          <Select
            title="Selecione seu gênero"
            selectedValue={values.gender}
            onValueChange={genderSelected =>
              setFieldValue('gender', genderSelected)
            }
          />

          <Input
            placeholder="Senha"
            iconLeft="lock"
            iconType="feather"
            value={values.password}
            onChangeText={handleChange('password')}
            secureTextEntry={!showPassword}
            iconRight={showPassword ? 'eye-off' : 'eye'}
            iconAction={() => setShowPassword(!showPassword)}
          />

          <Input
            placeholder="Confirme sua senha"
            iconLeft="lock"
            iconType="feather"
            value={values.newPassword}
            onChangeText={handleChange('newPassword')}
            secureTextEntry={!showNewPassword}
            iconRight={showNewPassword ? 'eye-off' : 'eye'}
            iconAction={() => setShowNewPassword(!showNewPassword)}
          />

          <S.ContainerButton>
            <Button
              title="Atualizar"
              onPress={() => handleSubmit()}
              disabled={!dirty}
            />
          </S.ContainerButton>
        </S.ContainerInputs>
        <ModalProduct visible={visible} setVisible={setVisible} />
      </S.Container>
    </Root>
  );
}
