import React, { useState } from "react";
import { Box, Menu, Pressable, Text, View } from "native-base";
import {
  ArrowBigRightDash,
  Bookmark,
  Edit,
  EllipsisVertical,
  MessageSquare,
  Share,
  ThumbsUp,
} from "lucide-react-native";
import Header from "../Header";
import TrackCarousel from "../../TrackCarousel";
import NoteMinimized from "../../Roadmap/NoteMinimized";
import styleCardRoadmap from "./style";
import VideoPlay from "../../../Screens/Roadmap/TimelineTrack/components/VideoPlay";
import Comments from "../../../Screens/Roadmap/TimelineTrack/components/Comments";
import { useNavigation } from "@react-navigation/native";
import { RoadmapStore } from "../../../stores/Roadpmap/store";

export default function CardRoadmap(props: {
  index: number;
  id: string;
  titleTrack: string;
  userProfile: any;
  itemsTrack: any;
  note: string;
  titleNote: string;
}) {
  const { setCurrentRoadmapId } = RoadmapStore();
  const navigation = useNavigation();
  const [showVideo, setShowVideo] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(true);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const redirectToEdit = async (currentRoadmapId: string) => {
    await setCurrentRoadmapId(currentRoadmapId);
    navigation.navigate("Create");
  };

  return (
    <Pressable>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            bg={isPressed ? "muted.300" : "muted.200"}
            style={styleCardRoadmap.container}
          >
            <Box style={styleCardRoadmap.header}>
              <Header title={props?.titleTrack} profile={props?.userProfile} />
              <ArrowBigRightDash size={24} color="#0B2C37" />
            </Box>
            <NoteMinimized
              note={props?.note}
              titleNote={props?.titleNote ?? "Sem título"}
            />

            <TrackCarousel index={props?.index} items={props?.itemsTrack} />

            <Box style={styleCardRoadmap.action}>
              <Box style={styleCardRoadmap.actionLeft}>
                <Pressable onPress={handleLike}>
                  <ThumbsUp size={24} color={isLiked ? "blue" : "#8E8888"} />
                </Pressable>
                <Pressable
                  onPress={() => {
                    setShowComments(true);
                  }}
                >
                  <MessageSquare size={24} color="#8E8888" />
                </Pressable>
                <Pressable onPress={handleBookmark}>
                  <Bookmark
                    size={24}
                    color={isBookmarked ? "blue" : "#8E8888"}
                  />
                </Pressable>
              </Box>
              <Box style={styleCardRoadmap.actionRight}>
                <Menu
                  placement="left"
                  shouldFlip={true}
                  style={{ padding: 12, borderRadius: 12 }}
                  trigger={(triggerProps) => {
                    return (
                      <Pressable
                        accessibilityLabel="More options "
                        {...triggerProps}
                      >
                        {({ isHovered, isFocused, isPressed }) => (
                          <EllipsisVertical
                            size={24}
                            color={isPressed ? "blue" : "#8E8888"}
                          />
                        )}
                      </Pressable>
                    );
                  }}
                >
                  <Menu.Item
                    borderRadius={8}
                    mb={2}
                    backgroundColor="#eee"
                    _pressed={{ backgroundColor: "#ddd" }}
                    onPress={() => {
                      redirectToEdit(props?.id);
                    }}
                  >
                    <Edit size={20} color="#000" />
                    <Text ml={3}>Editar</Text>
                  </Menu.Item>
                  <Menu.Item
                    borderRadius={8}
                    mb={2}
                    backgroundColor="#eee"
                    _pressed={{ backgroundColor: "#ddd" }}
                  >
                    <Share size={20} color="#000" />
                    <Text ml={3}>Compartilhar</Text>
                  </Menu.Item>
                </Menu>
              </Box>
            </Box>
            <VideoPlay show={showVideo} onClose={() => setShowVideo(false)} />

            <Comments
              show={showComments}
              onClose={() => setShowComments(false)}
            />
          </Box>
        );
      }}
    </Pressable>
  );
}
