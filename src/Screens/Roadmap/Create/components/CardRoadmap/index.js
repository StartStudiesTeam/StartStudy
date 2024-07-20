
import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from "react-native";
import { Box, View, Pressable, Actionsheet, Text, useDisclose, Input, TextArea, FormControl, Button } from 'native-base';
import { Notebook, ThumbsUp, MessageSquare, Bookmark, EllipsisVertical, Play, Rocket, GitPullRequestCreateArrow, BookType, Globe, NotebookPen } from 'lucide-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Formik } from "formik";

import styleCardRoadmap from './style';
import schemaValidation from "../FormVideo/schemaValidation";
import styleFormVideo from "../FormVideo/style";

const CardRoadmap = ({ title, content, index, type }) => {
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
            <Box style={[styleCardRoadmap.container, index % 2 !== 0 && styleCardRoadmap.oddCard]} >
                {(type === 'create') ?
                    <>
                        <View style={[styleCardRoadmap.circle, index % 2 !== 0 ? styleCardRoadmap.circleRight : styleCardRoadmap.circleLeft]} >
                            <GitPullRequestCreateArrow size={20} color="#A8A8A8" style={styleCardRoadmap.icon} />
                        </View>
                        <View style={[index % 2 !== 0 ? styleCardRoadmap.line : styleCardRoadmap.lineLeft]} />
                        <Box style={styleCardRoadmap.content}>
                            <Pressable style={styleCardRoadmap.video} onPress={onOpen}>
                                <Play size={44} strokeWidth={0.5} color="#B8BEC6" />
                                <Text style={styleCardRoadmap}>Adicionar Video</Text>
                            </Pressable>
                        </Box>
                    </>
                    :
                    <>
                        <View style={[styleCardRoadmap.circle, index % 2 !== 0 ? styleCardRoadmap.circleRight : styleCardRoadmap.circleLeft]} >
                            <Rocket size={20} color="#A8A8A8" style={styleCardRoadmap.icon} />
                        </View>
                        <View style={[index % 2 !== 0 ? styleCardRoadmap.line : styleCardRoadmap.lineLeft]} />

                        <Box style={styleCardRoadmap.content}>
                            <Text style={styleCardRoadmap.title}>{title}</Text>

                            <Pressable style={styleCardRoadmap.video} onPress={() => { alert('Adicionar Video') }}>
                                <Play size={44} strokeWidth={0.5} color="#B8BEC6" />
                            </Pressable>
                        </Box>
                    </>
                }
            </Box >

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
};

export default CardRoadmap