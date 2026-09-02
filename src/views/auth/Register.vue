<script setup lang="ts">
    import { useAuthStore } from '@/store/auth';

    const { register } = useAuthStore();
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