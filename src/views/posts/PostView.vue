<script setup lang="ts">
import { useRoute } from 'vue-router';
import axiosInstance from '@/lib/axios';
import { watch, ref } from 'vue';
import type { Post } from '@/types';

const route = useRoute();
const post = ref<Post | null>(null);

const getPost = async (id: string | string[]) => {
    try {
        const { data } = await axiosInstance.get(`/dashboard/posts/${id}`);
        post.value = data.data;
    } catch (error) {
        console.log(error);
    }
}

watch(
    () => route.params.id,
    (id) => getPost(id), { immediate:true })
</script>

<template>
    <h1 class="text-3xl text-slate-200 p-4">{{ post?.title }}</h1>
    <span class="text-sm text-slate-200 p-4">Created at: {{ post?.createdAt }}</span>
    <div class="max-w-[24em] mx-auto bg-slate-950 rounded-lg p-4 text-white">
        {{ post?.body }}
    </div>
</template>