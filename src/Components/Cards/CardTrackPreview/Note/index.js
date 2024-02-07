import { Box, Text, Modal, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { TouchableOpacity } from 'react-native';
import { useState } from "react";
import { ScrollView } from 'native-base';

export default function Note() {

    const [showModal, setShowModal] = useState(false);

    const data = {
        title: "Coliseu",
        note: (
            <>
                <Text style={styles.note} numberOfLines={4} ellipsizeMode="tail">
                    * Cretense e Micênicos A construção começou sob o governo de Fernando Henrique Costa.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013.
                    * A construção de Cretense e Micênicos foi concluída em 2013
                </Text>

                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                    <Modal.Content style={styles.modalContent}>
                        <Modal.CloseButton />
                        <Modal.Header>Colliseu</Modal.Header>
                        <Modal.Body>
                            <ScrollView>
                                <Text style={styles.note} >
                                    * Cretense e Micênicos A construção começou sob o governo de Fernando Henrique Costa.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013.
                                    * A construção de Cretense e Micênicos foi concluída em 2013
                                </Text>
                            </ScrollView>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2}>
                                <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Cancel
                                </Button>
                                <Button onPress={() => {
                                    setShowModal(false);
                                }}>
                                    Save
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </>
        ),
    }

    return (
        <Box style={styles.container}>
            <Box>
                <Box style={styles.header}>
                    <Text style={styles.title}>{data.title}</Text>
                    <TouchableOpacity>
                        <Icon name="file" size={20} style={styles.icon} onPress={() => setShowModal(true)} />
                    </TouchableOpacity>
                </Box>
                <TouchableOpacity style={styles.content} onPress={() => setShowModal(true)}>
                    {data.note}
                </TouchableOpacity>
            </Box>
        </Box>
    );
}