import { useFormik } from 'formik';
import LottieView from 'lottie-react-native';
import React, { useCallback, useContext, useRef, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useDispatch } from 'react-redux';
import { ThemeContext } from 'styled-components/native';

import logo from '~/modules/Auth/assets/movieLogo.json';
import { getMoviesComingAction } from '~/modules/Movie/store/ducks/movieComing/action';
import { getMoviesTrendingAction } from '~/modules/Movie/store/ducks/movieTrending/action';
import { Button } from '~/shared/components/Button';
import { Input } from '~/shared/components/Input';
import { loginUserAction } from '~/shared/store/ducks/user/action';

import { validationSchema } from './validation';

import * as S from './styles';

interface DataProps {
  username: string;
  password: string;
}

export function Login() {
  const { Colors } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const animation = useRef<any>(null);
  const [verify, setVerify] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmitLogin = useCallback(
    (data: DataProps) => {
      dispatch(getMoviesTrendingAction());
      dispatch(getMoviesComingAction(1));
      dispatch(loginUserAction(data.username, data.password));
    },
    [dispatch],
  );

  const { handleSubmit, handleChange, dirty, values, errors } = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: handleSubmitLogin,
  });

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

      <Animatable.View
        style={[S.ContainerForm, { backgroundColor: Colors.BACKGROUND }]}
        animation="fadeInUpBig"
      >
        <S.ContainerInput>
          {verify ? (
            <Animatable.View animation="fadeInLeft">
              <Input
                placeholder="Usuário"
                iconLeft="person"
                iconType="ionicons"
                value={values.username}
                onChangeText={handleChange('username')}
                error={errors.username}
              />

              <Input
                placeholder="Senha"
                iconLeft="lock"
                value={values.password}
                onChangeText={handleChange('password')}
                error={errors.password}
                secureTextEntry={!showPassword}
                iconAction={() => setShowPassword(!showPassword)}
                iconRight={showPassword ? 'eye-off' : 'eye'}
              />

              <S.ContainerButton positionButton="center">
                <Button title="Entrar" onPress={() => handleSubmit()} />
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
