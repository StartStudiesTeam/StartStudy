import { create } from 'zustand';
import api from '../../Services/api';
import { GetStorage, RemoveStorage, SaveStorage } from '../../utils/AsyncStorage';
import { isEmpty, isEmptyString, isNotEmpty } from "../../utils/Variables";

export const AuthStore = create((set, get) => ({
    pageFlow: '',
    signedGuest: false,
    signedUser: false,
    user: {},
    accessToken: '',
    refreshToken: '',
    setToken: async (accessToken) => {
        set({ accessToken });
        await SaveStorage("accessToken", accessToken);
    },
    setRefreshToken: async (refreshToken) => {
        set({ refreshToken });
        await SaveStorage("refreshToken", refreshToken);
    },
    setPageFlow: async (pageFlow) => {
        set({ pageFlow });
    },
    setSignedGuest: async () => {
        const accessToken = get().accessToken;
        const user = get().user;

        if (isEmptyString(accessToken) && isEmpty(user)) {
            set({ signedGuest: true });
        }
    },
    setSignedUser: async () => {
        const accessToken = get().accessToken;
        const user = get().user;

        if (isNotEmpty(accessToken) && isNotEmpty(user)) {
            set({ signedUser: true });
        }
    },
    signOut: async () => {
        set({
            accessToken: '',
            refreshToken: '',
            user: {},
            signedUser: false,
            signedGuest: false
        });

        await RemoveStorage("authUser");
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
                const user = response.body.data;

                set({
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                    user: user,
                    signedUser: true
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
                const user = response.body.data;

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
            const user = { email: credential.email };

            const response = await api.post("/mailcheck", {
                email: credential.email,
            });

            SaveStorage("user", JSON.stringify(user));

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
            const pageFlow = get().pageFlow.toString();

            const response = await api.patch("/codetoken", {
                email: emailStorage,
                codeToken: credential.code,
            });

            if (response.body) {
                if ((pageFlow !== 'recoveryPassword')) {
                    set({
                        signedUser: true,
                    });
                }

                set({ accessToken: response.body.accessToken });

                await SaveStorage("accessToken", response.body.accessToken);
            }

            return response;
        } catch (error) {
            return error;
        }
    },
    newPassword: async (credential) => {
        try {
            const emailStorage = JSON.parse(await GetStorage("user")).email;

            const response = await api.put("/newpassword", {
                email: emailStorage,
                password: credential.newPassword,
            });

            set({
                accessToken: accessToken,
                refreshToken: refreshToken,
                user: user,
                signedUser: true,
            });

            await SaveStorage("accessToken", response.body.accessToken);
            await SaveStorage("refreshToken", response.body.refreshToken);
            await SaveStorage("user", response.body.refreshToken.usersId);

        } catch (error) {
            return (error);
        }
    }
}));