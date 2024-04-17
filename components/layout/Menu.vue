<script lang="ts" setup>
import { MENU_DATA } from './menu.data';
</script>
<template>
  <div>
    <nuxt-link
      v-for="item in MENU_DATA"
      :key="item.name"
      :to="item.url"
      class="flex items-center py-1 px-3 rounded-lg hover:bg-gray-700 hover:shadow transition-all mb-2.5 cursor-pointer"
    >
      <Icon :name="item.icon" class="mr-3" />
      <span>{{ item.name }}</span>
    </nuxt-link>
  </div>
</template>
