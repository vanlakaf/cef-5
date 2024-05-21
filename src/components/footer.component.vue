<script setup lang="ts">
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithubAlt,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Then add it to library
library.add(faGithubAlt, faLinkedinIn, faTwitter);
</script>

<template>
  <footer>
    <span class="media-icon" title="LinkedIn">
      <a target="_blank" href="https://linkedin.com/in/vaneck-kaffo">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
      </a>
    </span>
    <span class="media-icon" title="Twitter">
      <a target="_blank" href="https://twitter.com">
        <font-awesome-icon icon="fa-brands fa-twitter" />
      </a>
    </span>
    <span class="media-icon" title="Github">
      <a target="_blank" href="https://github.com/vanlakaf">
        <font-awesome-icon icon="fa-brands fa-github-alt" />
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
  background-color: #3b3b3b;
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

footer .media-icon a {
  color: #67a515;
}
</style>
