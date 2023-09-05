<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import IconMoon from '@/components/icons/IconMoon.vue';
import IconSun from '@/components/icons/IconSun.vue';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <button
    class="inline-flex items-center justify-center p-4 text-2xl text-black hover:text-green dark:text-white dark:hover:text-green transition-all"
    @click="toggleDark()"
  >
    <IconMoon v-if="!isDark" />
    <IconSun v-else />
  </button>
</template>