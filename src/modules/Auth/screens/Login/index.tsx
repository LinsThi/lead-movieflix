import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';

import logo from '~/modules/Auth/assets/movieLogo.json';
import { Button } from '~/shared/components/Button';
import { Input } from '~/shared/components/Input';
import { MOVIE_SCREEN } from '~/shared/constants';

import * as S from './styles';

export function Login() {
  const animation = useRef<any>(null);
  const [verify, setVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ContainerHeader>
        <S.Button onPress={() => animation.current.play()}>
          <LottieView
            source={logo}
            autoPlay
            loop={false}
            style={{ width: 200, height: 200 }}
            resizeMode="cover"
            ref={animation}
          />
        </S.Button>
      </S.ContainerHeader>

      <Animatable.View style={S.ContainerForm} animation="fadeInUpBig">
        <S.ContainerInput>
          {verify ? (
            <Animatable.View animation="fadeInLeft">
              <Input
                placeholder="Usuário"
                iconLeft="person"
                iconType="ionicons"
              />

              <Input
                placeholder="Senha"
                iconLeft="lock"
                secureTextEntry={!showPassword}
                iconAction={() => setShowPassword(!showPassword)}
                iconRight={showPassword ? 'eye-off' : 'eye'}
              />

              <S.ContainerButton positionButton="center">
                <Button
                  title="Entrar"
                  // onPress={() => navigation.navigate(MOVIE_SCREEN)}
                />
              </S.ContainerButton>
            </Animatable.View>
          ) : (
            <>
              <S.Title>Seja Bem-Vindo ao MovieFlix</S.Title>

              <S.TextLogin>Para começar basta realizar o login.</S.TextLogin>

              <S.ContainerButton positionButton="flex-end">
                <Button title="Logar" onPress={() => setVerify(true)} />
              </S.ContainerButton>
            </>
          )}
        </S.ContainerInput>
      </Animatable.View>
    </S.Container>
  );
}