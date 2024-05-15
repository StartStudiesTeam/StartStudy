import { Modal, View } from 'native-base';
import React, { useState } from 'react';
import { Video, ResizeMode } from 'expo-av';
import styleVideoPlay from './style';

const VideoPlay = ({ show, onClose }) => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <>
            <Modal isOpen={show} onClose={onClose} size={'full'} animationPreset={'slide'} style={styleVideoPlay.modal} >
                <Modal.Content style={styleVideoPlay.modalContent} >
                    <Modal.Header style={styleVideoPlay.modalHeader} p={2} >
                        Titulo do video
                    </Modal.Header>
                    <Modal.Body style={styleVideoPlay.modalBody} p={1}>
                        <View style={styleVideoPlay.container}>
                            <Video
                                ref={video}
                                style={styleVideoPlay.video}
                                source={{
                                    uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                                }}
                                useNativeControls
                                resizeMode={ResizeMode.CONTAIN}
                                isLooping
                                onPlaybackStatusUpdate={status => setStatus(() => status)}
                            />
                        </View>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </>
    )
};

export default VideoPlay;