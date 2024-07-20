import React from "react";
import {
    Text
} from 'native-base';
import RoadmapCreate from "../RoadmapCreate";

import styleFormVideo from "./style";

export default function FormVideo() {

    return (
        <>
            <Text style={styleFormVideo.labelFormVideo}>Adicionar conteúdos </Text>
            <RoadmapCreate />
        </>

    )
}