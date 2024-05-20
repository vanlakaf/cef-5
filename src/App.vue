<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/header.component.vue';
import FooterComponent from '@/components/footer.component.vue';

</script>

<template>
  <HeaderComponent />
  <RouterView />
  <FooterComponent />
</template>

<style scoped>
.separator {
  height: 100px;
}
</style>
