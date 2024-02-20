import * as SecureStore from 'expo-secure-store';

export const SaveStorage = async (key, value) => {
    return await SecureStore.setItemAsync(key, value);
}

export const GetStorage = async (key) => {
    return await SecureStore.getItemAsync(key);;
}

export const RemoveStorage = async (key) => {
    return await SecureStore.deleteItemAsync(key);
}
