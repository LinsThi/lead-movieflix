import Yup from '~/shared/utils/yup';

export const validationSchema = Yup.object().shape({
  username: Yup.string().required().label('Username'),
  password: Yup.string().required().min(6).label('Password'),
});
