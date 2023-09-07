<script setup lang="ts">
import gql from 'graphql-tag';
import { useQuery } from '@vue/apollo-composable';
import ContentContainer from '@/components/ContentContainer.vue';

const { result } = useQuery(gql`
query {
  characters {
    results {
      id
    }
    info {
      count
    }
  }
  locations {
    info {
      count
    }
  }
  episodes {
    info {
      count
    }
  }
}
`)
</script>

<template>
  <div class="flex bg-black2 text-white w-full py-16 border-t border-gray dark:bg-white dark:text-black">
    <ContentContainer>
      <div class="flex flex-col gap-6 items-center w-full">
        <p class="flex text-2xl font-semibold uppercase tracking-wider">статистика</p>
        <ul class="flex justify-center gap-5 items-center text-lg">
          <li>Персонажей: <span class="text-orange font-semibold">{{ result?.characters.info.count }}</span></li>
          <li>Мест: <span class="text-orange font-semibold">{{ result?.locations.info.count }}</span></li>
          <li>Эпизодов: <span class="text-orange font-semibold">{{ result?.episodes.info.count }}</span></li>
        </ul>
      </div>
    </ContentContainer>
  </div>
</template>