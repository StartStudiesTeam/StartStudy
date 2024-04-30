import { Actionsheet, Box, Text, Avatar, Button, ScrollView, View, Pressable, Divider } from "native-base";
import { Languages, ChevronRight, User, Moon, BellDot, Handshake } from 'lucide-react-native';
import styles from "./style";

const AccountMenu = function (props) {

    return (
        <Actionsheet
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <Actionsheet.Content>
                <Box style={styles.container}>
                    <Box style={[styles.content]}>
                        <Avatar
                            bg="green.500"
                            source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                            }}>
                            Photo
                        </Avatar>
                        <Box>
                            <Text style={styles.name}>Samuel Jesus</Text>
                            <Text style={styles.email}>samuel.jesan2018@gmail.com</Text>
                        </Box>
                    </Box>
                    <Box >
                        <ChevronRight color="gray" size={20} />
                    </Box>
                </Box>
                <Divider />
                <ScrollView w={'100%'}>
                    <Text style={styles.itemTitleGroup}>Settings & Preferences</Text>
                    <Pressable style={styles.item}>
                        <User color="gray" size={20} />
                        <Text style={styles.itemTitle}>Profile User</Text>
                        <Box>
                            <ChevronRight color="gray" size={20} />
                        </Box>
                    </Pressable>

                    <Pressable style={styles.item}>
                        <Languages color="gray" size={20} />
                        <Text style={styles.itemTitle}>Languages</Text>
                        <Box>
                            <ChevronRight color="gray" size={20} />
                        </Box>
                    </Pressable>
                    <Text style={styles.itemTitleGroup}>Account</Text>
                    <Pressable style={styles.item}>
                        <Moon color="gray" size={20} />
                        <Text style={styles.itemTitle}>Dark Mode</Text>
                        <Box>
                            <ChevronRight color="gray" size={20} />
                        </Box>
                    </Pressable>
                    <Pressable style={styles.item}>
                        <BellDot color="gray" size={20} />
                        <Text style={styles.itemTitle}>Notifications</Text>
                        <Box>
                            <ChevronRight color="gray" size={20} />
                        </Box>
                    </Pressable>
                    <Pressable style={styles.item}>
                        <Handshake color="gray" size={20} />
                        <Text style={styles.itemTitle}>Terms and Conditions</Text>
                        <Box>
                            <ChevronRight color="gray" size={20} />
                        </Box>
                    </Pressable>

                </ScrollView>
                <Divider mt={4} />
                <Box style={styles.footer}>
                    <Button variant={'outline'} size={'sm'} _text={{ color: 'red.300' }} >
                        Sign Out
                    </Button>
                </Box>
            </Actionsheet.Content>
        </Actionsheet >
    );
}

export default AccountMenu;