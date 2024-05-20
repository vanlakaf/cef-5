<script setup lang="ts">
import { onMounted } from "vue";
import creations from "@/data/creations.json";

defineProps({
  creation: typeof creations[0],
});
const emit = defineEmits(["close"]);

function close() {
  emit("close");
}

onMounted(() => {
  document.addEventListener("keyup", (e) => {
    if (e.code.toLowerCase() === "escape") {
      close();
    }
  });
});
</script>

<template>
  <div id="modal" @click="close">
    <div class="creation" @click.stop>
      <button @click="close">X</button>
      <article>
        <span class="article-image">
          <img :src="creation.picture" :alt="'Image: ' + creation.title" />
        </span>
        <div class="article-text">
          <h2>{{ creation.title }}</h2>
          <a :href="creation.link ?? '/#'" target="_blank"
            >Url du projet: {{ creation.link ?? "-- Lien indisponible --" }}</a
          >
          <p>
            {{ creation.description }} <br />
            Dernier date de développement du projet :
            <time :datetime="creation.creationDate">{{
              creation.creationDate
            }}</time>
          </p>
          <span>Technologies utilisées : </span>
          <ul>
            <li v-for="techno of creation.technos">{{ techno }}</li>
          </ul>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
#modal {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: #292929f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10000000;
}

.creation {
  background-color: #fff;
  width: 60%;
  position: relative;
  border-radius: 5px;
}

button {
  background-color: #6e6e6e81;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  outline: solid 2px white;
  border: none;
  box-shadow: 0 0 6px 2px #6d6d6d6e;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  cursor: pointer;
  font-size: x-large;
  color: white;
}

article {
  margin-bottom: 30px;
}

article span.article-image {
  display: inline-block;
  height: 150px;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-y: hidden;
}

article .article-text {
  padding: 0 20px;
  text-align: center;
}

article span.article-image img {
  width: 100%;
  margin: -20% 0;
}

article h2 {
  margin-top: 15px;
  font-weight: 600;
  font-size: 1.9rem;
}

article a {
  display: inline-block;
  width: 100%;
}
article a:hover {
  background-color: transparent;
}

article ul li {
  display: inline;
  margin: 0 5px;
}

article p {
  margin-top: 10px;

  font-size: 1.12rem;
}
</style>
