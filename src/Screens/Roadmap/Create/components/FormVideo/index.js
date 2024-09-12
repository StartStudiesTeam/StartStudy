import { Formik } from "formik";
import { Actionsheet, Box, Button, FormControl, Input, Text, TextArea, useToast } from "native-base";
import { BookType, Globe, NotebookPen } from "lucide-react-native";

import schemaValidation from "../FormVideo/schemaValidation.js";
import styleFormVideo from "../FormVideo/style.js";
import { RoadmapStore } from "../../../../../stores/Roadpmap/store.js";
import { VideoStore } from "../../../../../stores/Video/store.js";

export function FormVideo({ isOpen, onClose }) {
    const handleSubmit = async function (formVideo) {
        const { getCurrentRoadmapId } = RoadmapStore();
        const { createVideo } = VideoStore();
        const roadmapId = await getCurrentRoadmapId();

        formVideo.roadmapId = roadmapId

        const response = await createVideo(formVideo);

        if (response.statusCode === 201) {
            toast.show({
                description: `${response.message}`,
                placement: 'bottom',
                bgColor: 'green.500',
            })
            return response;
        } else {
            toast.show({
                description: `${response.message}`,
                placement: 'bottom',
                bgColor: 'red.500',
            })
            return response;
        }
    }

    return (
        <>
            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content style={{ paddingBottom: 64 }}>
                    <Formik
                        initialValues={{ url: '', title: '', description: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={schemaValidation}
                    >
                        {({ handleSubmit, handleChange, setFieldTouched, values, errors, touched }) => (
                            <>
                                <Text style={styleFormVideo.containerTitle}>Adicionar novo video</Text>
                                <Box style={{ width: '100%', gap: 32, marginTop: 16 }}>
                                    <Box style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', width: '100%', marginTop: 10 }}>
                                        <Button variant="outline" size="sm" onPress={() => handleSubmit()}>Adicionar</Button>
                                    </Box>
                                    <FormControl isInvalid={touched.url && errors.url}>
                                        <FormControl.Label>Url do video</FormControl.Label>
                                        <Input
                                            InputLeftElement={<Globe size={20} color="gray" style={styleFormVideo.iconInputLeft} />}
                                            onChangeText={handleChange('url')}
                                            onBlur={() => setFieldTouched('url')}
                                            value={values.url}
                                            placeholder="http://www.youtube.com" />
                                        <FormControl.ErrorMessage>
                                            <Text>{errors.url}</Text>
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={touched.title && errors.title}>
                                        <FormControl.Label>Título do video</FormControl.Label>
                                        <Input
                                            InputLeftElement={<BookType size={20} color="gray" style={styleFormVideo.iconInputLeft} />}
                                            onChangeText={handleChange('title')}
                                            onBlur={() => setFieldTouched('title')}
                                            value={values.title}
                                            placeholder="Título do video" />
                                        <FormControl.ErrorMessage>
                                            <Text>{errors.title}</Text>
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                    <FormControl isInvalid={touched.description && errors.description}>
                                        <FormControl.Label>Resumo/Nota</FormControl.Label>
                                        <TextArea
                                            leftElement={<NotebookPen size={20} color="gray" style={styleFormVideo.iconInputLeft} />}
                                            onChangeText={handleChange('description')}
                                            onBlur={() => setFieldTouched('description')}
                                            value={values.description}
                                            placeholder="Descrição" />
                                        <FormControl.ErrorMessage>
                                            <Text>{errors.description}</Text>
                                        </FormControl.ErrorMessage>
                                    </FormControl>
                                </Box>
                            </>
                        )}
                    </Formik>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}
