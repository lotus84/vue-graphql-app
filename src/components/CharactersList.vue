<script setup lang="ts">
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import ContentContainer from '@/components/ContentContainer.vue';
import CharacterCard from '@/components/CharacterCard.vue';

const { result, loading } = useQuery(gql`
query {
  characters {
    results {
      id
      name
      species
      status
      location {
        id
        name
      }
      image
      episode {
        id
        name
      }
    }
    info {
      count
      pages
    }
  }
}
`)
</script>

<template>
  <div v-if="loading" class="flex items-center justify-center w-full h-full py-16">
    <p class="text-3xl font-semibold text-red">Идет загрузка...</p>
  </div>
  <div v-else class="flex bg-white text-black w-full py-32 dark:bg-black2 dark:text-white">
    <ContentContainer>
      <div class="grid grid-cols-2 gap-7 justify-items-center mx-auto">
        <CharacterCard v-for="item in result.characters.results" :key="item.id" :character="item" />
      </div>
    </ContentContainer>
  </div>
</template>