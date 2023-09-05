<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import ContentContainer from '@/components/ContentContainer.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
import IconLogo from '@/components/icons/IconLogo.vue';

const links = ref([
  {
    text: 'О сериале',
    href: 'about',
  },
]);
</script>

<template>
  <header class="fixed top-0 left-0 flex w-full bg-white text-black border-b border-gray2 dark:bg-black2 dark:text-white">
    <ContentContainer>
      <div class="flex items-center justify-start gap-3 w-full">
        <RouterLink
          class="inline-flex items-center justify-center p-2 text-xl text-black hover:text-green dark:text-white dark:hover:text-green transition-all"
          active-class="header-link-active"
          :to="{ name: 'home' }"
        >
          <IconLogo class="w-10 h-10" />
        </RouterLink>
        <nav class="flex grow items-center justify-end">
          <template v-for="link, index in links" :key="index">
            <RouterLink
              class="inline-flex items-center justify-center p-4 text-xl font-semibold text-black hover:text-green dark:text-white dark:hover:text-green transition-all"
              active-class="header-link-active"
              :to="{ name: link.href }"
            >
              {{ link.text }}
            </RouterLink>
          </template>
        </nav>
        <ThemeToggle />
      </div>
    </ContentContainer>
  </header>
</template>
