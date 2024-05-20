<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <footer>
    <span class="media-icon">
      <a target="_blank" href="https://linkedin.com/in/vaneck-kaffo">
        <FontAwesomeIcon :icon="['fab', 'linkedin-in']" />
      </a>
    </span>
    <span class="media-icon">
      <a target="_blank" href="https://twitter.com">
        <FontAwesomeIcon :icon="['fab', 'twitter']" />
      </a>
    </span>
    <span class="media-icon">
      <a target="_blank" href="https://github.com/vanlakaf">
        <FontAwesomeIcon :icon="['fab', 'github']" />
      </a>
    </span>
    <p>
      Dernière mise à jour le : <time datetime="29/04/2024">29/04/2024</time>
    </p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 130px;
  margin-top: 15px;
  padding-top: 15px;
  background-color: #9a9a9a;
  text-align: center;
  color: #dfdfdf;
  font-size: 1.2rem;
  font-weight: 600;
}

footer .media-icon {
  height: 30px;
  width: 30px;
  display: inline-block;
  margin: 0 5px;
  font-size: 22px;
}

footer .media-icon i {
  color: black;
}
</style>
