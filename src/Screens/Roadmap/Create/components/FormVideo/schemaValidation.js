import * as yup from 'yup'
const validationForm = () => {
    return (
        yup.object().shape({
            title: yup
                .string()
                .required('The title is required!'),
            description: yup
                .string()
                .required('Description is required!'),
            url: yup
                .string()
                .required('Url is required!'),
        })
    )
}

export default validationForm;