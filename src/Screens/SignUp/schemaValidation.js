import * as yup from 'yup'
const validationForm = () => {
    return (
        yup.object().shape({
            name: yup
                .string()
                .required('The name is mandatory'),
            nick_name: yup
                .string()
                .required('Nick name is required')
                .min(3, 'Nick name must have at least 3 characters')
                .max(16, 'Nick name must have a maximum of 16 characters'),
            email: yup
                .string()
                .email('Invalid email address format')
                .required('Email is required'),
            phone_number: yup
                .string()
                .min(11, 'The telephone number must have at least 11 digits')
                .required('A phone number is required'),
            password: yup
                .string()
                .min(8, 'Password should be at least 8 chars long.')
                .required('Password is required'),
        })
    )
}

export default validationForm;