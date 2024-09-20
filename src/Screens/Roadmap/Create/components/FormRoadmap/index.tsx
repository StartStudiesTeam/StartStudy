import React from "react";
import {
  Box,
  Text,
  Input,
  TextArea,
  Button,
  useToast,
  Pressable,
} from "native-base";
import { Hash, BookType, PencilIcon, CircleAlert } from "lucide-react-native";
import { Formik } from "formik";
import { FormControl } from "native-base";
import styleRegistration from "./style";
import schemaValidation from "./schemaValidation";
import { RoadmapStore } from "../../../../../stores/Roadpmap/store.js";
import { AuthStore } from "../../../../../stores/Auth/store";
import { isNotEmpty } from "../../../../../utils/Variables";
import NoteMinimized from "../../../../../Components/Roadmap/NoteMinimized";

export default function FormRoadmap({ roadmap }: any) {
  const { createRoadmap, setCurrentRoadmapId } = RoadmapStore();
  const currentRoadmap = roadmap || {};

  const { user } = AuthStore();
  const toast = useToast();

  const handleSubmit = async function (formRoadmap: {
    id: string;
    title: string;
    description: string;
    tags: string;
  }) {
    try {
      console.log("Roadmap Enviado: ", formRoadmap);
      formRoadmap.id = user?.id;
      const response = await createRoadmap(formRoadmap);

      if (response.statusCode === 201) {
        toast.show({
          description: `${response.message}`,
          placement: "bottom",
          bgColor: "green.500",
        });

        await setCurrentRoadmapId(response?.body?.data?.id);
        setCurrentRoadmap(response?.body?.data);

        return response;
      } else {
        toast.show({
          description: `${response.message}`,
          placement: "bottom",
          bgColor: "red.500",
        });
        return response;
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <Box>
      {isNotEmpty(currentRoadmap) ? (
        <Box style={styleRegistration.containerCreated}>
          <Box style={styleRegistration.contentCreatedBoxTitle}>
            <Box style={{ flexGrow: 1 }}>
              <Text style={styleRegistration.titleCreated}>
                {currentRoadmap?.title}
              </Text>
            </Box>
            <Pressable>
              <PencilIcon size={24} color="#B8BEC6" />
            </Pressable>
          </Box>
          <NoteMinimized
            titleNote={currentRoadmap?.description}
            note={currentRoadmap?.description}
          />
          <Box
            style={{
              padding: 8,
              paddingBottom: 32,
              borderBottomWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomEndRadius: 16,
              borderBottomStartRadius: 16,
              borderColor: "#ccc",
            }}
          >
            <Text style={{ color: "#ccc0c0" }}>#hash1 #hash2 #hash3</Text>
          </Box>
        </Box>
      ) : (
        <Box>
          <Formik
            initialValues={{
              id: "",
              title: "",
              description: "",
              tags: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={schemaValidation}
          >
            {({
              handleSubmit,
              handleChange,
              setFieldTouched,
              values,
              errors,
              touched,
            }) => (
              <Box style={styleRegistration.container}>
                <Box style={styleRegistration.containerButton}>
                  <Button
                    p={2}
                    variant={"outline"}
                    style={styleRegistration.button}
                    size={"md"}
                    onPress={handleSubmit}
                  >
                    Salvar
                  </Button>
                </Box>
                <Box style={styleRegistration.containerInput}>
                  <FormControl isInvalid={errors.title && touched.title}>
                    <FormControl.Label>
                      <Text style={styleRegistration.labelInput}>Title</Text>
                    </FormControl.Label>
                    <Input
                      name="title"
                      onBlur={() => setFieldTouched("title")}
                      onChangeText={handleChange("title")}
                      value={values.title}
                      style={styleRegistration.input}
                      borderRadius={8}
                      placeholder="Title of RoadMap"
                      InputLeftElement={
                        <BookType
                          size={20}
                          style={styleRegistration.iconInputLeft}
                        />
                      }
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<CircleAlert size={12} color="#B91C1C" />}
                    >
                      <Text>{errors.title}</Text>
                    </FormControl.ErrorMessage>
                  </FormControl>
                </Box>
                <Box style={styleRegistration.containerTextArea}>
                  <FormControl
                    isInvalid={errors.description && touched.description}
                  >
                    <FormControl.Label>
                      <Text style={styleRegistration.labelTextArea}>
                        <Text style={styleRegistration.labelTextArea}>
                          Label Name
                        </Text>
                      </Text>
                    </FormControl.Label>
                    <TextArea
                      name="description"
                      onBlur={() => setFieldTouched("description")}
                      onChangeText={handleChange("description")}
                      value={values.description}
                      style={styleRegistration.textArea}
                      borderRadius={8}
                      placeholder="Description of RoadMap"
                      height={122}
                    />
                    <FormControl.ErrorMessage
                      leftIcon={<CircleAlert size={12} color="#B91C1C" />}
                    >
                      <Text>{errors.description}</Text>
                    </FormControl.ErrorMessage>
                  </FormControl>
                </Box>
                <Box style={styleRegistration.containerInput}>
                  <FormControl>
                    <FormControl.Label>
                      <Text style={styleRegistration.labelInput}>Tags</Text>
                    </FormControl.Label>
                    <Input
                      name="tags"
                      onBlur={() => setFieldTouched("tags")}
                      onChangeText={handleChange("tags")}
                      value={values.tags}
                      style={styleRegistration.input}
                      borderRadius={8}
                      placeholder="Tags"
                      InputLeftElement={
                        <Hash
                          size={20}
                          style={styleRegistration.iconInputLeft}
                        />
                      }
                    />
                    <FormControl.ErrorMessage>
                      <Text>{errors.tags}</Text>
                    </FormControl.ErrorMessage>
                  </FormControl>
                </Box>
              </Box>
            )}
          </Formik>
        </Box>
      )}
    </Box>
  );
}
