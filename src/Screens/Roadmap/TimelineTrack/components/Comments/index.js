

import React, { useState } from "react";
import { Laugh, Send } from "lucide-react-native";
import { View, Modal, Pressable, ScrollView, Text, TextArea, Avatar } from 'native-base';
import styleComment from "./style";


export default function Comments({ show, onClose }) {
    const [comment, setComment] = useState('');

    const sendComment = () => {
        console.log("Comentário enviado!")
    }

    const InputRightElement = () => {
        return comment ? (
            <Pressable onPress={sendComment}>
                <Send size={20} color="#B8BEC6" style={styleComment.iconTextAreaRight} />
            </Pressable>
        ) : (
            <Laugh size={20} color="#B8BEC6" style={styleComment.iconTextAreaRight} />
        );
    }

    return (
        <Modal isOpen={show} onClose={onClose} size={'full'} animationPreset={'slide'} avoidKeyboard={true} safeAreaTop={true}>
            <Modal.Content style={styleComment.modalContent} >
                <Modal.Body h={300} pt={2} >
                    <View style={styleComment.inputCommentContent}>
                        <TextArea
                            style={styleComment.inputComment}
                            onChangeText={text => setComment(text)}
                            rounded="xl"
                            textAlignVertical="center"
                            h={12}
                            placeholder="Escreva um comentário..."
                            InputLeftElement={
                                <Avatar
                                    size={'xs'}
                                    style={styleComment.iconTextAreaLeft}
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    }}
                                ></Avatar>}
                            InputRightElement={<InputRightElement />}
                        >
                        </TextArea>
                    </View>
                    <ScrollView>
                        <View style={styleComment.comment}>
                            <Avatar
                                size={'sm'}
                                source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }}>
                            </Avatar>
                            <View style={styleComment.commentContent}>
                                <View style={styleComment.commentHeader}>
                                    <Text style={styleComment.commentName}>Samuel Jesus</Text>
                                    <Text style={styleComment.commentNickname}>@samuel_jesus</Text>
                                </View>
                                <View style={styleComment.commentTextContent}>
                                    <Text style={styleComment.commentText}>Hoje tivemos uma grande surpresa, com esse video, gostei bastante</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}   