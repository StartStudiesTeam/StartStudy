import React, { useState } from "react";
import { Box, Text, Modal, Button, ScrollView, View } from "native-base";
import { TouchableOpacity } from "react-native";
import styleNoteMinimized from "./style";
import { NotebookText } from "lucide-react-native";

export default function NoteMinimized(props: any) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
        _stack={{
          p: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        _text={{
          fontSize: 14,
          fontWeight: "700",
        }}
        leftIcon={<NotebookText size={20} color={"#fff"} />}
        rightIcon={<View style={{ width: 1 }} />}
        variant={"solid"}
        size={"null"}
        style={styleNoteMinimized.resumeButton}
        onPress={() => setShowModal(true)}
      >
        Resumo
      </Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content style={styleNoteMinimized.modalContent}>
          <Modal.CloseButton />
          <Modal.Header>{props.titleNote}</Modal.Header>
          <Modal.Body>
            <ScrollView>
              <Text style={styleNoteMinimized.note}>{props.note}</Text>
            </ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  setShowModal(false);
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
