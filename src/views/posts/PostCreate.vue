<script setup lang="ts">
import axiosInstance from '@/lib/axios';
import router from '@/router';
import type { FormKitNode } from '@formkit/core';
import { AxiosError } from 'axios';

type PostForm = {
    title: string;
    body: string;
}
const createPost = async (payload: PostForm, node?: FormKitNode) => {
    try {
        await axiosInstance.post('/dashboard/posts', payload);
        router.push('/dashboard/posts');
    } catch (e) {
        if (e instanceof AxiosError && e.response?.status === 422) {
            node?.setErrors([], e.response?.data.errors);
        }
    }
}
</script>

<template>
    <h1 class="text-3xl text-slate-200 p-4">Create Post</h1>

    <div class="max-w-sm mx-auto p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <FormKit type="form" submit-label="Create" form-class="group/form" @submit="createPost">
            <FormKit type="text" label="Title" name="title" placeholder="Title"/>
            <FormKit type="textarea" label="Body" name="body" placeholder="Description"/>
        </FormKit>
    </div>
</template>