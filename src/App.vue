<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
</script>

<template>
  <div class="flex flex-col min-h-screen bg-white text-black dark:bg-black2 dark:text-white">
    <TheHeader />
    <main class="flex flex-col grow pt-[60px]">
      <RouterView />
    </main>
  </div>
</template>
