<script setup lang="ts"></script>

<template>
  <main class="flex min-h-screen items-center justify-center bg-slate-950 px-6 py-12">
    <div class="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/80 p-8 text-center shadow-2xl shadow-slate-950/40">
      <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">Error 404</p>
      <h1 class="mt-4 text-5xl font-bold text-white">Page not found</h1>
      <p class="mt-4 text-base text-slate-300">
        The page you are looking for does not exist or has been moved.
      </p>

      <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <router-link
          to="/"
          class="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
        >
          Go home
        </router-link>
        <router-link
          to="/login"
          class="inline-flex items-center justify-center rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800"
        >
          Login
        </router-link>
      </div>
    </div>
  </main>
</template>
