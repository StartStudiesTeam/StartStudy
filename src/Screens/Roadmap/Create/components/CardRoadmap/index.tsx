import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, View, Pressable, Text, useDisclose } from "native-base";
import { Play, Rocket, GitPullRequestCreateArrow } from "lucide-react-native";
import styleCardRoadmap from "./style";
import { FormVideo } from "../FormVideo/index.js";

const CardRoadmap = ({
  title,
  content,
  index,
  type,
}: {
  title: string;
  content: string;
  index: number;
  type: string;
}) => {
  const { isOpen, onOpen, onClose } = useDisclose();

  return (
    <>
      <Box
        style={[
          styleCardRoadmap.container,
          index % 2 !== 0 && styleCardRoadmap.oddCard,
        ]}
      >
        {type === "create" ? (
          <>
            <View
              style={[
                styleCardRoadmap.circle,
                index % 2 !== 0
                  ? styleCardRoadmap.circleRight
                  : styleCardRoadmap.circleLeft,
              ]}
            >
              <GitPullRequestCreateArrow
                size={20}
                color="#A8A8A8"
                style={styleCardRoadmap.icon}
              />
            </View>
            <View
              style={[
                index % 2 !== 0
                  ? styleCardRoadmap.line
                  : styleCardRoadmap.lineLeft,
              ]}
            />
            <Box style={styleCardRoadmap.content}>
              <Pressable onPress={onOpen}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={styleCardRoadmap.video}
                    >
                      <Play size={44} strokeWidth={0.5} color="#B8BEC6" />
                      <Text style={styleCardRoadmap?.titleAddContent}>
                        Adicionar Video
                      </Text>
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </>
        ) : (
          <>
            <View
              style={[
                styleCardRoadmap.circle,
                index % 2 !== 0
                  ? styleCardRoadmap.circleRight
                  : styleCardRoadmap.circleLeft,
              ]}
            >
              <Rocket size={20} color="#A8A8A8" style={styleCardRoadmap.icon} />
            </View>
            <View
              style={[
                index % 2 !== 0
                  ? styleCardRoadmap.line
                  : styleCardRoadmap.lineLeft,
              ]}
            />

            <Box style={styleCardRoadmap.content}>
              <Text style={styleCardRoadmap.title}>{title}</Text>

              <Pressable
                style={styleCardRoadmap.video}
                onPress={() => {
                  alert(content);
                }}
              >
                <Play size={44} strokeWidth={0.5} color="#B8BEC6" />
              </Pressable>
            </Box>
          </>
        )}
      </Box>

      <FormVideo isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CardRoadmap;
