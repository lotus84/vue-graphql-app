<script setup lang="ts">
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import ContentContainer from '@/components/ContentContainer.vue';

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const { result, loading } = useQuery(gql`
query {
  episode(id: ${ props.id }) {
    id
    name
    air_date
    characters {
      id
      name
    }
  }
}
`)
</script>

<template>
  <div class="flex grow items-center justify-center w-full h-full" v-if="loading">
    <p class="text-3xl font-semibold text-red">Идет загрузка...</p>
  </div>
  <div v-else class="flex w-full items-start justify-start py-16">
    <ContentContainer>
      <div class="flex flex-col gap-8 w-full items-center justify-start">
        <p class="text-lg text-purple">Название эпизода: <span class="text-3xl text-green font-semibold">{{ result.episode.name }}</span></p>
        <p class="text-lg text-purple">Дата выхода эпизода в эфир: <span class="text-3xl text-green font-semibold">{{ result.episode.air_date }}</span></p>
        <p class="text-lg text-purple">Действующие лица:</p>
        <ul class="flex flex-wrap gap-2 max-w-[900px] mx-auto">
          <li v-for="item, index in result.episode.characters" :key="item.id">
            <RouterLink
              class="text-orange transition-all hover:text-green"
              :to="{ name: 'character', params: { id: item.id } }"
            >
            {{ item.name }}
            <template v-if="index !== (result.episode.characters.length - 1)">,</template>
          </RouterLink>
          </li>
        </ul>
      </div>
    </ContentContainer>
  </div>
</template>