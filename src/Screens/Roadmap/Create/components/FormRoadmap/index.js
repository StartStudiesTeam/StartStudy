import { Box, Text, Input, TextArea, Button, useToast, Pressable } from 'native-base';
import { Hash, BookType, Pencil, PencilIcon } from "lucide-react-native";
import { Formik } from "formik";
import { FormControl } from 'native-base';
import styleRegistration from './style';
import schemaValidation from './schemaValidation'
import { RoadmapStore } from "../../../../../stores/Roadpmap/store.js";
import { AuthStore } from '../../../../../stores/Auth/store';


export default function FormRoadmap() {
    const { createRoadmap, setCurrentRoadmapId, getCurrentRoadmapId } = RoadmapStore();
    const currentRoadmapId = getCurrentRoadmapId();
    const { user } = AuthStore();
    const toast = useToast();

    const handleSubmit = async function (formRoadmap) {
        try {
            formRoadmap.id = user?.email

            const response = await createRoadmap(formRoadmap);

            if (response.statusCode === 201) {
                toast.show({
                    description: `${response.message}`,
                    placement: 'bottom',
                    bgColor: 'green.500',
                })

                await setCurrentRoadmapId(response?.body?.data?.id);

                return response;
            } else {
                toast.show({
                    description: `${response.message}`,
                    placement: 'bottom',
                    bgColor: 'red.500',
                })
                return response;
            }

        } catch (error) {
            return error;
        }
    }

    return (
        <Box>
            {currentRoadmapId ?
                <Box style={styleRegistration.containerCreated}>
                    <Box style={styleRegistration.contentCreatedBoxTitle}>
                        <Box style={{ flexGrow: 1, textAlign: 'center' }}>
                            <Text style={styleRegistration.titleCreated}> Meu roadmap 001 </Text>
                        </Box>
                        <Pressable style={styleRegistration.pencilIcon}>
                            <PencilIcon size={24} style={{ color: '#B8BEC6' }} />
                        </Pressable>
                    </Box>
                    <Button
                        style={styleRegistration.buttonNoteCreated}
                        p={1}
                        size="sm"
                    >
                        Resumo
                    </Button>
                    <Box style={{ padding: 8, paddingBottom: 32, borderBottomWidth: 1, borderLeftWidth: 1, borderRightWidth: 1, borderBottomEndRadius: 16, borderBottomStartRadius: 16, borderColor: '#ccc' }}>
                        <Text style={{ color: '#ccc0c0' }}>
                            #hash1 #hash2 #hash3
                        </Text>
                    </Box>
                </Box>
                :
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
                                    <Button style={styleRegistration.button} p={1} size={"sm"} onPress={handleSubmit}> Salvar </Button>
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
            }
        </Box >
    )
}
