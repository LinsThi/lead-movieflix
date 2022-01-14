import Yup from '~/shared/utils/yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Username'),
  email: Yup.string().required().email().label('E-mail'),
  birthDate: Yup.string().required().label('Data de aniversário'),
  password: Yup.string().min(6).label('Password'),
});
