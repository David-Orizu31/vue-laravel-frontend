<script setup lang="ts"></script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
    <div class="w-full max-w-xl rounded-2xl border border-red-900/60 bg-slate-900/80 p-8 text-center shadow-2xl shadow-red-950/20">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Error 500</p>
      <h1 class="mt-4 text-5xl font-bold text-white">Something went wrong</h1>
      <p class="mt-4 text-base text-slate-300">
        The server encountered an unexpected error. Please try again in a few moments.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link
          to="/"
          class="inline-flex items-center justify-center rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-400"
        >
          Back home
        </router-link>
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
          @click="() => $router.go(-1)"
        >
          Go back
        </button>
      </div>
    </div>
  </main>
</template>
