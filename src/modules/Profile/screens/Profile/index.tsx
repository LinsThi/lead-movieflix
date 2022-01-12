import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { Button } from '~/shared/components/Button';
import { Input } from '~/shared/components/Input';
import Select from '~/shared/components/Select';
import { NewText } from '~/shared/components/Text';

import * as S from './styles';

export function Profile() {
  const navigation = useNavigation();

  const [gender, setGender] = useState('');

  useEffect(() => {
    navigation.setOptions({
      title: 'Perfil',
    });
  }, [navigation]);

  return (
    <S.Container showsVerticalScrollIndicator={false}>
      <S.ContainerImage>
        <S.ImageUser
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
          }}
        />

        <S.ContainerImageIcon>
          <S.ButtonIcon>
            <S.IconInput name="pencil-circle" />
          </S.ButtonIcon>
        </S.ContainerImageIcon>
      </S.ContainerImage>

      <S.ContainerInputs>
        <Input placeholder="Usuário" iconLeft="user" iconType="feather" />
        <Input placeholder="E-mail" iconLeft="email-outline" />
        <Input placeholder="Data de aniversário" iconLeft="calendar-star" />

        <Select
          title="Selecione seu gênero"
          selectedValue={gender}
          onValueChange={genderSelected => setGender(genderSelected)}
        />

        <Input placeholder="Senha" iconLeft="lock" iconType="feather" />
        <Input
          placeholder="Confirme sua senha"
          iconLeft="lock"
          iconType="feather"
        />

        <S.ContainerButton>
          <Button title="Atualizar" />
        </S.ContainerButton>
      </S.ContainerInputs>
    </S.Container>
  );
}
