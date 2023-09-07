<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink } from 'vue-router';
import { CHARACTER_STATUSES } from '@/constants/character';

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
});

const characterStatus = computed(() => {
  return props.character.status.toLowerCase();
});

const isAliveStatus = computed(() => {
  return characterStatus.value === CHARACTER_STATUSES.alive;
});
const isDeadStatus = computed(() => {
  return characterStatus.value === CHARACTER_STATUSES.dead;
});
const isUnknownStatus = computed(() => {
  return characterStatus.value === CHARACTER_STATUSES.unknown;
});
</script>

<template>
  <div class="flex w-full max-w-[600px] bg-gray text-white rounded-3xl overflow-hidden transition-all hover:bg-brown">
    <div class="inline-flex shrink-0 justify-center items-center w-56 h-56">
      <img class="w-full h-full object-cover object-center" :src="props.character.image" alt="">
    </div>
    <div class="flex flex-col items-start gap-2 p-4">
      <RouterLink
        class="text-lg font-semibold text-orange transition-colors hover:text-green"
        :to="{ name: 'character', params: { id: props.character.id } }"
      >
        {{ props.character.name }}
      </RouterLink>
      <p><span v-if="isAliveStatus" class="inline-flex shrink-0 items-center justify-center bg-green w-3 h-3 mr-3 rounded-full"></span><span v-else-if="isDeadStatus" class="inline-flex shrink-0 items-center justify-center bg-red w-3 h-3 mr-3 rounded-full"></span><span v-else-if="isUnknownStatus" class="inline-flex shrink-0 items-center justify-center bg-gray3 w-3 h-3 mr-3 rounded-full"></span>{{ props.character.status }} - {{ props.character.species }}</p>
      <p>Последнее известное местоположение:<br> <span class="text-orange">{{ props.character.location.name }}</span></p>
      <p>Впервые замечен в:<br>
        <RouterLink
          class="text-orange transition-all hover:text-green"
          :to="{ name: 'episode', params: { id: props.character.episode[0].id } }"
        >
          {{ props.character.episode[0].name }}
        </RouterLink>
      </p>
    </div>
  </div>
</template>