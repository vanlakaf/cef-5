<script setup lang="ts">
import creations from "@/data/creations.json";
import ModalComponent from "@/components/modal.component.vue";
import { ref } from "vue";

const props = defineProps({
  creation: typeof creations[0],
});

const showModal = ref(false);

function openModal() {
  showModal.value = true;
}
</script>

<template>
  <article>
    <div id="creation-image">
      <img
        :src="creation.picture"
        :alt="'image-creation-' + creation.creationId"
      />
    </div>
    <div id="article-text">
      <h3>{{ creation.title }}</h3>
      <button @click="showModal = true">Voir plus de détails</button>
    </div>
    <ModalComponent
      :creation="creation"
      v-if="showModal"
      @close="showModal = false"
    />
  </article>
</template>

<style scoped>
article {
  height: 600px;
  width: 400px;
  box-sizing: border-box;
  border: solid 1px #9a9a9a;
  margin: 20px;
  transition: box-shadow 0.7s ease;
}

#creation-image {
  height: 400px;
  width: 100%;
  position: relative;
}

#creation-image::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -200px;
  left: 0;
  width: 100%;
  height: 120%;
  background: linear-gradient(transparent, #9a9a9a 50%);
  z-index: 1;
}

#creation-image img {
  height: 100%;
  width: 100%;
}

article:hover {
  box-shadow: 9px 12px 13px 1px #9a9a9a;
}

#article-text {
  position: relative;
  z-index: 10;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

#article-text h3 {
  text-align: center;
  font-size: 1.9rem;
  margin-bottom: 20px;
  color: white;
}

#article-text button {
  width: 100%;
  margin: 0;
  height: 80px;
  text-align: center;
  outline: none;
  border: none;
  background-color: #6d6565;
  font-size: 1.25rem;
  color: white;
  cursor: pointer;
}
</style>
