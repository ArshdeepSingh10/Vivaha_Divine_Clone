import * as Yup from 'yup';

// Define the type for the form values
interface FormValues {
  Name: string;
  phoneNumber: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

const validationSchema: Yup.Schema<FormValues> = Yup.object({
  Name: Yup.string().required('Name is required'),
  
  phoneNumber: Yup.string().required('Phone number is required'),
  
  gender: Yup.string().required('Select the gender'),
  
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[@$!%*?&]/, 'Password must contain at least one special character'),

  confirmPassword: Yup.string()
    .required('Confirm password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match')
});
const initialValues ={
    Name:'',
    phoneNumber:'',
    gender:'',
    password:''
}
export { validationSchema , initialValues};  
export type { FormValues };

