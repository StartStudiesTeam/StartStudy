
import React, { useState, useEffect } from 'react';
import { Box, Text, View, Button, Pressable } from 'native-base';
import { Notebook, ThumbsUp, MessageSquare, Bookmark, EllipsisVertical, Play, Rocket } from 'lucide-react-native';
import VideoPlay from '../VideoPlay';

import styleCardRoadmap from './style';

const CardRoadmap = ({ title, content, index }) => {
    const [showVideo, setShowVideo] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    const handleBookmark = () => {
        setIsBookmarked(!isBookmarked)
    }

    return (
        <>
            <Box style={[styleCardRoadmap.container, index % 2 !== 0 && styleCardRoadmap.oddCard]} >
                <View style={[styleCardRoadmap.circle, index % 2 !== 0 ? styleCardRoadmap.circleRight : styleCardRoadmap.circleLeft]} >
                    <Rocket size={20} color="#A8A8A8" style={styleCardRoadmap.icon} />
                </View>

                <View style={[index % 2 !== 0 ? styleCardRoadmap.line : styleCardRoadmap.lineLeft]} />

                <Box style={styleCardRoadmap.content}>
                    <Text style={styleCardRoadmap.title}>{title}</Text>
                    <Pressable style={styleCardRoadmap.video} onPress={() => { setShowVideo(true) }}>
                        <Play size={44} strokeWidth={0.5} color="#B8BEC6" />
                    </Pressable>

                    <Button size={'xs'} leftIcon={<Notebook size={16} color="white" />} style={styleCardRoadmap.annotation} >Annotation</Button>
                    <Box style={styleCardRoadmap.action}>
                        <Box style={styleCardRoadmap.actionLeft}>
                            <Pressable onPress={handleLike}>
                                <ThumbsUp size={24} color={isLiked ? "blue" : "#8E8888"} />
                            </Pressable>
                            <Pressable>
                                <MessageSquare size={24} color="#8E8888" />
                            </Pressable>
                            <Pressable onPress={handleBookmark}>
                                <Bookmark size={24} color={isBookmarked ? "blue" : "#8E8888"} />
                            </Pressable>
                        </Box>
                        <Box style={styleCardRoadmap.actionRight}>
                            <EllipsisVertical size={24} color="#8E8888" />
                        </Box>
                    </Box>
                </Box>
            </Box >

            <VideoPlay show={showVideo} onClose={() => setShowVideo(false)} />
        </>
    )
};

export default CardRoadmap