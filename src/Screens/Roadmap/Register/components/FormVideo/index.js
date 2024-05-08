import React from "react";
import { Box, Text, Actionsheet, useDisclose, Input, TextArea, FormControl, Button } from 'native-base';
import { TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from "formik";
import { BookType, Globe, NotebookPen } from "lucide-react-native";
import schemaValidation from "./schemaValidation";
import styleFormVideo from "./style";

export default function FormVideo() {

    const {
        isOpen,
        onOpen,
        onClose
    } = useDisclose();

    const handleSubmit = async function (values) {
        console.log(values)
    }

    return (
        <>
            <Box>
                <Box>
                    <Box style={styleFormVideo.boxFormVideo}>
                        <Box style={styleFormVideo.containeLabelFormVideo}>
                            <Text style={styleFormVideo.labelFormVideo}>Content</Text>
                        </Box>
                        <Box style={styleFormVideo.borderFormVideo}>
                            <Box style={styleFormVideo.formVideo}>
                                <TouchableOpacity onPress={onOpen} style={styleFormVideo.containerIconPlay}>
                                    <Icon name="film" style={styleFormVideo.iconPlay} />
                                </TouchableOpacity>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Actionsheet isOpen={isOpen} onClose={onClose} >
                <Actionsheet.Content style={{ height: 700 }}>
                    <Formik
                        initialValues={{ url: '', title: '', description: '' }}
                        onSubmit={handleSubmit}
                        validationSchema={schemaValidation}
                    >
                        {({ handleSubmit, handleChange, setFieldTouched, values, errors, touched }) => (
                            <>
                                <Text style={styleFormVideo.containerTitle}>Adicionar novo video</Text>
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
                            </>
                        )}
                    </Formik>
                </Actionsheet.Content>
            </Actionsheet>
        </>

    )
}