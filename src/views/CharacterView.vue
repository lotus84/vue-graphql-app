<script setup lang="ts">
import CharacterPage from '@/components/CharacterPage.vue';
</script>

<template>
  <CharacterPage :id="$route.params.id" />
</template>