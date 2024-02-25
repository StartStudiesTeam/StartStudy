import * as yup from 'yup'
const validationForm = () => {
    return (
        yup.object().shape({
            email: yup
                .string()
                .email('Invalid email address format')
                .required('Email is required'),
        })
    )
}

export default validationForm;