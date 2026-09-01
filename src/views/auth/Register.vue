<script setup lang="ts">
    import axiosInstance from '@/lib/axios';
    import { AxiosError } from 'axios';
    import type { RegisterForm } from '@/types';
    import type { FormKitNode } from '@formkit/core';
    import router from '@/router';

    const register = async (payload: RegisterForm, node?: FormKitNode) => {
        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: "http://localhost:8000",
        });
        try {
            await axiosInstance.post('/register', payload);
            router.push('/dashboard');
        } catch (e) {
            if (e instanceof AxiosError && e.response?.status === 422) {
                node?.setErrors([], e.response.data.errors);
            }
        }
    };
</script>

<template>
    <h1 class="text-3xl text-slate-200 p-4">Register</h1>

    <div class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <FormKit type="form" submit-label="Register" form-class="group/form" @submit="register">
            <FormKit type="text" label="Name" name="name" placeholder="Enter Name" />
            <FormKit type="email" label="Your email" name="email" placeholder="name@flowbite.com" />
            <FormKit type="password" label="Password" name="password" />
            <FormKit type="password" label="Password Confirmation" name="password_confirmation" />
        </FormKit>
    </div>

</template>