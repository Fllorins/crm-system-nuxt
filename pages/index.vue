<script lang="ts" setup>
import { useKanbanQuery } from '@/components/kanban/useKanbanQuery';
// import dayjs from 'dayjs'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants';
import type { ICard, IColumn } from '~/components/kanban/kanban.types';
import type { EnumStatus } from '~/types/deals.types';

useSeoMeta({
  title: 'Home | CRM system',
});

const dragCardRef = ref<ICard | null>(null);
const sourceColumnRef = ref<IColumn | null>(null);
const { data, isLoading, refetch } = useKanbanQuery();

</script>
<template>
  <div class="p-10">
    <h1 class="font-bold text-2xl mb-10">CRM system</h1>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div class="grid grid-cols-5 gap-16">
        <div v-for="(column, index) in data" :key="column.id">
          <div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
            {{ column.name }}
          </div>

          <div>
            <UiCard class="mb-3" draggable="true">
              <UiCardHeader role="button">name card</UiCardHeader>
              <UiCardContent>Компания</UiCardContent>
              <UiCardFooter>Date</UiCardFooter>
            </UiCard>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
