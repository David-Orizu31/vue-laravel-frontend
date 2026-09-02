<script setup lang="ts">
    import { useAuthStore } from '@/store/auth';
    import { onMounted } from 'vue';

    const auth = useAuthStore();
    
    onMounted(() => {
        auth.getUser();
    })
</script>

<template>
    <h1 class="text-3xl text-slate-200 px-4">Dashboard</h1>
    <div class="flex items-center justify-between px-4">
        <div>
            <p class="text-lg text-slate-200">Welcome back, {{ auth.user?.name }}</p>
            <p class="text-sm text-slate-200">{{ auth.user?.email }}</p>
        </div>
        <button @click="auth.logout" class="btn btn-primary text-slate-200" style="cursor: pointer;">Logout</button>
    </div>
</template>