import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { LoginForm, User, RegisterForm } from '@/types';
import axiosInstance from '@/lib/axios';
import { AxiosError } from 'axios';
import type { FormKitNode } from '@formkit/core';
import router from '@/router';

export const useAuthStore = defineStore("auth", () => {
    const user = ref<User | null>(null);
    const isLoggedIn = ref<boolean>(false);

    const register = async (payload: RegisterForm, node?: FormKitNode) => {
        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: "http://localhost:8000",
        });
        try {
            await axiosInstance.post('/register', payload);
            await getUser();
            router.push('/dashboard');
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                node?.setErrors([], e.response.data.errors);
            }
        }
    };

    const login = async (payload: LoginForm, node?: FormKitNode) => {
        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: "http://localhost:8000",
        });
        // errors.email = [];
        // errors.password = [];
        try {
            await axiosInstance.post('/login', payload);
            await getUser();
            router.push('/dashboard');
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                // errors.email = e.response.data.errors.email;
                // errors.password = e.response.data.errors.password;
                node?.setErrors([], e.response?.data.errors)
            }
        }
    };

    const getUser = async () => {
        try {
            const response = await axiosInstance.get('/user');
            user.value = response.data;
            isLoggedIn.value = true;
        } catch (error) {
            console.error(error);
        }
    };

    const cleanState = () => {
        user.value = null;
        isLoggedIn.value = false;
    }

    const logout = async () => {
        try {
            await axiosInstance.post('/logout');
            user.value = null;
            isLoggedIn.value = false;
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    return {
        user,
        isLoggedIn,
        register,
        login,
        getUser,
        logout,
        cleanState
    };
    },
    {
    persist: {
        storage: sessionStorage,
        pick: ["user", "isLoggedIn"],
    },
})