<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

onMounted(() => {
  window.onscroll = manageScroll;
});

watch([route], ([currentRoute], [oldRoute]) => {
  const liList = document.querySelectorAll("header nav ul > li");
  liList.forEach((li) => li.classList.remove("underline"));
  liList.forEach((li) => {
    const href = li.querySelector("a")?.getAttribute("href");
    if (href === currentRoute.hash) {
      li.classList.add("underline");
    }
  });
});

function underlineMenuLink() {
  const windowHeight = window.innerHeight;
  const elements = document.querySelectorAll("header nav ul > li");
  elements.forEach((el) => {
    const href: string = el.querySelector("a")?.getAttribute("href")!;
    const targettedRect = document.querySelector(href)?.getBoundingClientRect();
    if (
      targettedRect?.top &&
      targettedRect.top <= windowHeight / 2 &&
      targettedRect.bottom > windowHeight / 2
    ) {
      router.replace(href);
    }
  });
}

function manageScroll() {
  const header = document.getElementById("portfolio-header");
  const viewport = header?.getBoundingClientRect();
  if (viewport?.top && viewport.top <= 0) {
    header?.classList.add("sticky");
  }
  underlineMenuLink();
}
</script>

<template>
  <div v-if="route.name !== 'not-found'" id="presentation">
    <div id="user-profile">
      <div id="user-card">
        <div id="main-avatar">
          <img src="@/assets/imgs/avatar.png" alt="Avatar de Vaneck" />
        </div>
        <div id="designation">
          <h2>Vaneck KAFFO</h2>
          <h3>Développeur fullstack JavaScript</h3>
        </div>
      </div>
      <div id="user-contacts">
        <p>
          Tel: <a href="tel:+33762459195" target="_blank">+33 7 62 45 91 95</a>
        </p>
        <p>
          E-mail:
          <a href="mailto:kanguevan1@gmail.com" target="_blank"
            >kanguevan1@gmail.com</a
          >
        </p>
        <p>
          Adresse:
          <a href="https://maps.app.goo.gl/HJJBaVecApWoqdxz6" target="_blank"
            >53, rue de valenciennes, 59000 LILLE</a
          >
        </p>
      </div>
    </div>
    <a href="#creations" id="scroller"
      ><span>{{ ">" }}</span
      ><span>{{ ">>" }}</span></a
    >
  </div>
  <header id="portfolio-header">
    <a href="/#presentation" id="avatar-as-logo">
      <img src="@/assets/imgs/avatar.png" alt="Avatar de Vaneck" />
    </a>
    <nav>
      <ul v-if="route.name !== 'not-found'">
        <li id="menu-link-carte"><a href="#presentation">Carte</a></li>
        <li id="menu-link-creations"><a href="#creations">Créations</a></li>
        <li id="menu-link-me-contacter">
          <a href="#me-contacter">Me contacter</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
@keyframes wave-1 {
  25% {
    opacity: 0.5;
  }

  75% {
    transform: scale(1.2);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes wave-2 {
  0% {
    height: 350px;
    width: 350px;
    opacity: 0.5;
  }

  50% {
    transform: scale(1.2);
    opacity: 1;
  }

  75% {
    transform: scale(1);
    opacity: 0;
  }
}

.sticky {
  position: sticky;
}

#presentation {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#user-profile {
  width: 550px;
  height: auto;
  margin-top: 160px;
  border-radius: 3px;
  border: solid 3px #8080804f;
  box-sizing: border-box;
  overflow: visible;
  position: relative;
  transition: margin-left 0.7s ease-in;
  box-shadow: 0 0 112px 2px #0009, 0 0 74px 3px #96d1bdd3,
    0 0 90px 2px #7f1f9257;
}

#user-profile:hover {
  margin-left: -544px;
}

#user-profile:hover #user-contacts {
  left: 544px;
}

#user-card {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 50px;
  background-color: #fff;
  z-index: 100;
}

#designation {
  width: 100%;
  height: 110px;
  background-color: #8080804f;
  text-align: center;
}

#designation :is(h2, h3) {
  font-weight: 600;
  margin: 10px 0;
}

#designation h2 {
  font-size: 1.7rem;
}

#user-contacts {
  background-color: #8080804f;
  position: absolute;
  top: 0;
  left: 0;
  height: calc(100% + 6px);
  width: 100%;
  z-index: 10;
  transition: left 0.7s ease-out;
  border-radius: 3px;
  margin: -3px 0;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#user-contacts p {
  font-size: 1.32rem;
  margin-bottom: 10px;
  text-align: center;
}

#main-avatar {
  position: relative;
  height: 350px;
  width: 350px;
  padding: 0;
  margin-bottom: 50px;
}

#main-avatar img {
  position: absolute;
  border-radius: 50%;
  height: 100%;
  width: 100%;
  border: solid 5px gray;
  box-sizing: border-box;
  z-index: 10;
}

#main-avatar::after,
#main-avatar::before {
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  display: block;
  border-radius: 50%;
  height: 350px;
  width: 350px;
  opacity: 0;
  border: solid 2px #b1b4b29a;
  background-color: #b1b4b24b;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  z-index: 5;
}

#main-avatar::before {
  animation-name: wave-1;
}

#main-avatar::after {
  animation-name: wave-2;
}

#scroller {
  display: inline-block;
  font-size: 2.1rem;
  font-weight: 900;
  color: #8080804f;
  transform: rotateZ(90deg);
  margin-top: 5%;
  cursor: pointer;
  background-color: transparent !important;
}

#scroller span:nth-child(2) {
  color: #8080809f;
}

header {
  position: relative;
  top: 0;
  left: 0;
  height: 120px;
  width: 100%;
  box-shadow: -2px 6px 9px 3px #8080809f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  z-index: 1000000;
  background-color: #fff;
}

#avatar-as-logo {
  display: inline-block;
  border-radius: 50%;
  height: 80px;
  width: 80px;
  overflow: hidden;
}

#avatar-as-logo img {
  height: 100%;
  width: 100%;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
}

nav ul li {
  font-size: larger;
  font-weight: 700;
  margin: 0 15px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: transparent;
  transition: border-bottom-color 0.8s ease;
}

nav ul li.underline {
  border-bottom-color: #808080;
}

nav ul li a {
  background-color: inherit;
  color: inherit;
  font-weight: inherit;
}
</style>
