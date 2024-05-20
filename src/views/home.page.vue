<script setup lang="ts">
import SeparatorComponent from "@/components/separator.component.vue";
import CreationComponent from "@/components/creation.component.vue";
import ContactForm from "@/components/contact-form.component.vue";
import creations from "@/data/creations.json";
</script>

<template>
  <main>
    <section id="creations">
      <SeparatorComponent />
      <h2>Mes créations</h2>
      <p>
        Du front au back, en passant par le développement de dépendances pour
        JavaScript et l'intégration des interfaces web, j'ai pas mal exercé.
        Trouvez quelques de mes réalisations dans ces cartes.
      </p>
      <div id="creation-card-list">
        <CreationComponent v-for="creation of creations" :creation="creation" />
      </div>
    </section>
    <section id="me-contacter">
      <SeparatorComponent />
      <h2>Me contacter</h2>
      <p>
        Envie de tenter l'aventure avec moi, prenez contact et discutons de
        notre futur commun.
      </p>
      <ContactForm />
    </section>
  </main>
</template>

<style scoped>
section {
  display: flex;
  place-items: center center;
  flex-direction: column;
}

h2 {
  text-align: center;
  font-size: 2.4rem;
  font-weight: 900;
  position: relative;
  margin-bottom: 30px;
}

p {
  padding: 10px 30px;
  text-align: center;
  font-size: 1.4rem;
  width: 70%;
}

h2::before {
  content: "";
  display: inline-block;
  height: 30px;
  width: 30px;
  background-color: #96d1bdd3;
  position: absolute;
  top: -5px;
  left: -35px;
}

h2::after {
  content: "";
  display: inline-block;
  height: 10px;
  width: 230px;
  background-color: #7f1f9257;
  position: absolute;
  bottom: -5px;
  right: -80px;
}

#creation-card-list {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 40px 20px;
}
</style>
