<script setup lang="ts">
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';

import TheIntro from '@/components/TheIntro.vue';

const { result } = useQuery(gql`
query {
  characters(page: 2, filter: { name: "Morty" }) {
    info {
      count
    }
    results {
      name
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`)
</script>

<template>
  <TheIntro />
  <div>{{ result }}</div>
</template>
