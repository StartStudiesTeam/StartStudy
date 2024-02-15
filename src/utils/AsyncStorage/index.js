import * as SecureStore from 'expo-secure-store';

export const SaveStorage = async (key, value) => {
    return SecureStore.setItemAsync(key, value);
}

export const GetStorage = async (key) => {
    const value = await SecureStore.getItemAsync(key);

    return value;
}
