import * as Yup from 'yup';

import constantsYup from '~/shared/constants/yup';

interface LabelProps {
  label?: string;
}

const translation = {
  string: {
    min: constantsYup.yup_string_min,
    email: constantsYup.yup_string_email,
  },

  mixed: {
    required: ({ label }: LabelProps) =>
      label
        ? `${label} ${constantsYup.yup_mixed_required_label_field}`
        : constantsYup.yup_mixed_required_field,
  },
};

Yup.setLocale(translation);

export default Yup;
