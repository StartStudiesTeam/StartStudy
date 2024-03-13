import { create } from 'zustand';
import api from '../../Services/api';
import { GetStorage, RemoveStorage, SaveStorage } from '../../utils/AsyncStorage';

export const AuthStore = create((set) => ({
    pageFlow: "",
    activeMenu: false,
    user: {},
    accessToken: null,
    refreshToken: null,
    setToken: async (accessToken) => {
        set({ accessToken });
        await SaveStorage("accessToken", accessToken);
    },
    setRefreshToken: async (refreshToken) => {
        set({ refreshToken });
        await SaveStorage("refreshToken", refreshToken);
    },
    signOut: async () => {
        set({
            accessToken: null,
            refreshToken: null,
            user: null,
        });
        await RemoveStorage("accessToken");
        await RemoveStorage("refreshToken");
        await RemoveStorage("user");
    },
    signIn: async (credential) => {
        try {
            const response = await api.post("/signin", {
                email: credential.email,
                password: credential.password,
            });

            if (response.body) {
                const refreshToken = response.body.refreshToken.id;
                const accessToken = response.body.accessToken;
                const user = response.body.refreshToken.usersId;

                set({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    user: user,
                    activeMenu: true
                });

                await SaveStorage("accessToken", accessToken);
                await SaveStorage("refreshToken", refreshToken);
                await SaveStorage("user", user);
            }

            return response;

        } catch (error) {
            return error;
        }
    },
    signUp: async (credential) => {
        try {
            const response = await api.post("/signup", {
                name: credential.name,
                nick_name: credential.nickName,
                email: credential.email,
                password: credential.password,
                phone_number: credential.numberPhone,
            });

            if (response.body) {
                const refreshToken = response.body.refreshToken.id;
                const accessToken = response.body.accessToken;
                const user = { email: credential.email };

                set({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    user: user
                });

                await SaveStorage("accessToken", accessToken);
                await SaveStorage("refreshToken", refreshToken);
                await SaveStorage("user", JSON.stringify(user));
            }

            return response;

        } catch (error) {
            return error;
        }
    },
    mailCheck: async (credential) => {
        try {
            const response = await api.post("/mailcheck", {
                email: credential.email,
            });

            set({
                user: { email: credential.email }
            });

            return response;
        } catch (error) {
            return error;
        }
    },
    confirmCodeToken: async (credential) => {
        try {
            const emailStorage = JSON.parse(await GetStorage("user")).email;

            const response = await api.patch("/codetoken", {
                email: emailStorage,
                codeToken: credential.code,
            });

            if (response.body) {

                const accessToken = response.body.accessToken;

                set({
                    accessToken: accessToken,
                    activeMenu: true,
                });

                await SaveStorage("accessToken", accessToken);
            }

            return response;
        } catch (error) {
            return error;
        }
    },
    recoveryPassword: async (data) => {
        try {
            const response = await api.post("/forgetpassword", {
                email: data.email,
                newPassword: data.newPassword,
            });
        } catch (error) {
            console.log(error);
        }
    }
}));