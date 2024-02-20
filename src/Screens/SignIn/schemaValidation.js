import * as yup from 'yup'

const validationForm = () => {
    return (
        yup.object().shape({
            email: yup
                .string()
                .email('Invalid email address format')
                .required('Email is required'),
            password: yup
                .string()
                .min(8, 'Password should be at least 8 chars long.')
                .required('Password is required'),
        })
    )
}

export default validationForm;