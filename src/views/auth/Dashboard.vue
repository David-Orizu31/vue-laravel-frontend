<script setup lang="ts">
    import axiosInstance from '@/lib/axios';
    import { ref } from 'vue';
    import router from '@/router';
    import type { User } from '@/types'

    const user = ref<User | null>(null)

    const getUser = async () => {
        try {
            const response = await axiosInstance.get('/user');
            user.value = response.data;
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        await axiosInstance.get('/sanctum/csrf-cookie', {
            baseURL: "http://localhost:8000",
        });
        try {
            await axiosInstance.post('/logout');
            user.value = null;
            router.push('/login');
        } catch (error) {
            console.error(error);
        }
    };

    getUser();
</script>

<template>
    <h1 class="text-3xl text-slate-200 px-4">Dashboard</h1>
    <div class="flex items-center justify-between px-4">
        <div>
            <p class="text-lg text-slate-200">Welcome back, {{ user?.name }}</p>
            <p class="text-sm text-slate-200">{{ user?.email }}</p>
        </div>
        <button @click="logout" class="btn btn-primary text-slate-200" style="cursor: pointer;">Logout</button>
    </div>
</template>