import { Box, Text, Input, TextArea, Button } from 'native-base';
import { Hash, BookType } from "lucide-react-native";
import styleRegistration from './style';
import schemaValidation from './schemaValidation'
import { Formik } from "formik";
import { FormControl } from 'native-base';

export default function RegistrationBar() {
    const handleSubmit = async function (values) {
        console.log(values)
    }

    return (
        <Box>
            <Box>
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        tags: '',
                    }}
                    onSubmit={handleSubmit}
                    validationSchema={schemaValidation}
                >
                    {({ handleSubmit, handleChange, setFieldTouched, values, errors, touched }) => (
                        <Box style={styleRegistration.container}>
                            <Box style={styleRegistration.containerButton}>
                                <Button style={styleRegistration.button} p={1} size={"sm"} onPress={() => { handleSubmit() }}> Salvar </Button>
                            </Box>
                            <Box style={styleRegistration.containerInput}>
                                <FormControl isInvalid={errors.title && touched.title}>
                                    <FormControl.Label><Text style={styleRegistration.labelInput}>Title</Text></FormControl.Label>
                                    <Input
                                        name='title'
                                        onBlur={() => setFieldTouched('title')}
                                        onChangeText={handleChange('title')}
                                        value={values.title}
                                        style={styleRegistration.input}
                                        borderRadius={8}
                                        placeholder='Title of RoadMap'
                                        InputLeftElement={<BookType size={20} style={styleRegistration.iconInputLeft} />}
                                    />
                                    <FormControl.ErrorMessage>
                                        <Text style={styleRegistration.labelInputError}>{errors.title}</Text>
                                    </FormControl.ErrorMessage>
                                </FormControl>
                            </Box>
                            <Box style={styleRegistration.containerTextArea}>
                                <FormControl isInvalid={errors.description && touched.description}>
                                    <FormControl.Label><Text style={styleRegistration.labelTextArea}> <Text style={styleRegistration.labelTextArea}>Label Name</Text></Text></FormControl.Label>
                                    <TextArea
                                        name='description'
                                        onBlur={() => setFieldTouched('description')}
                                        onChangeText={handleChange('description')}
                                        value={values.description}
                                        style={styleRegistration.textArea}
                                        borderRadius={8}
                                        placeholder='Description of RoadMap'
                                        height={122}
                                    />
                                    <FormControl.ErrorMessage>
                                        <Text style={styleRegistration.labelInputError}>{errors.description}</Text>
                                    </FormControl.ErrorMessage>
                                </FormControl>
                            </Box>
                            <Box style={styleRegistration.containerInput}>
                                <FormControl>
                                    <FormControl.Label><Text style={styleRegistration.labelInput}>Tags</Text></FormControl.Label>
                                    <Input
                                        name='tags'
                                        onBlur={() => setFieldTouched('tags')}
                                        onChangeText={handleChange('tags')}
                                        value={values.tags}
                                        style={styleRegistration.input}
                                        borderRadius={8}
                                        placeholder='Tags'
                                        InputLeftElement={<Hash size={20} style={styleRegistration.iconInputLeft} />}
                                    />
                                    <FormControl.ErrorMessage>
                                        <Text style={styleRegistration.labelInputError}>{errors.tags}</Text>
                                    </FormControl.ErrorMessage>
                                </FormControl>
                            </Box>
                        </Box>
                    )}
                </Formik>

            </Box>
        </Box>
    )
}
