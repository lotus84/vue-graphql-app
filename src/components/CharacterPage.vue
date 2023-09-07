<script setup lang="ts">
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import { RouterLink } from 'vue-router';
import ContentContainer from '@/components/ContentContainer.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const { result, loading } = useQuery(gql`
query {
  character(id: ${ props.id }) {
    name
    status
    species
    type
    gender
    origin {
      id
      name
      dimension
      residents {
        name
        id
      }
    }
    image
    episode {
      id
      name
    }
  }
}
`)
</script>

<template>
  <div v-if="loading" class="flex grow items-center justify-center w-full h-full">
    <p class="text-3xl font-semibold text-red">Идет загрузка...</p>
  </div>
  <div v-else class="flex w-full items-start justify-start py-16">
    <ContentContainer>
      <div class="flex flex-col gap-8 w-full">
        <div class="flex items-center justify-center gap-6 w-full">
          <div class="flex shrink-0 items-center justify-center w-48 h-48 border-black border-2 rounded-full overflow-hidden dark:border-white">
            <img class="object-cover object-center" :src="result.character.image" alt="">
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-2xl font-semibold">{{ result.character.name }}</p>
            <p>{{ result.character.gender }} - {{ result.character.species }}</p>
            <p>Исходное местоположение персонажа:<br> {{ result.character.origin.name }}</p>
          </div>
        </div>
        <div class="flex flex-col w-full items-start justify-start max-w-[900px] mx-auto">
          <p class="text-lg font-semibold text-red mb-4">Эпизоды, в которых появлялся(-лась) {{ result.character.name }}</p>
          <ul class="flex flex-wrap gap-2 mb-6">
            <li v-for="item, index in result.character.episode" :key="item.id">
              <RouterLink class="hover:text-green" :to="{ name: 'episode', params: { id: item.id } }">
              {{ item.name }}
              <template v-if="index !== (result.character.episode.length - 1)">,</template>
              </RouterLink>
            </li>
          </ul>
          <p v-if="result.character.origin.residents.length" class="text-lg font-semibold text-green mb-4">Список персонажей, которых в последний раз видели в данной локации:</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="item, index in result.character.origin.residents" :key="item.id">
              {{ item.name }}
              <template v-if="index !== (result.character.origin.residents.length - 1)">,</template>
            </li>
          </ul>
        </div>
      </div>
    </ContentContainer>
  </div>
</template>