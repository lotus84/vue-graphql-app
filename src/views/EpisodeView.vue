<script setup lang="ts">
import EpisodePage from '@/components/EpisodePage.vue';
</script>

<template>
  <EpisodePage :id="$route.params.id" />
</template>