<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const isSubmitted = ref(false);
const form = reactive({
  firstName: "",
  lastName: "",
  messageObject: "",
  messageContent: "",
});
const formIsValid = computed(() => {
  return (
    form.firstName.length !== 0 &&
    form.lastName.length !== 0 &&
    form.messageObject.length !== 0 &&
    form.messageContent.length !== 0
  );
});

function clearForm() {
  form.firstName = "";
  form.lastName = "";
  form.messageObject = "";
  form.messageContent = "";
}

function sendMail() {
  isSubmitted.value = true;
  if (formIsValid.value) {
    alert("Le mail a bien été envoyé...");
    clearForm();
  } else {
    alert("Le formulaire de contact n'a pas été completement rempli.");
  }
  isSubmitted.value = false;
}
</script>

<template>
  <form @submit.prevent="sendMail">
    <span class="line">
      <span class="control w-half">
        <label for="first-name">Prénom</label>
        <input
          type="text"
          id="first-name"
          v-model="form.firstName"
          @disabled="isSubmitted"
        />
      </span>
      <span class="control w-half">
        <label for="last-name">Nom</label>
        <input
          type="text"
          id="last-name"
          v-model="form.lastName"
          @disabled="isSubmitted"
        />
      </span>
    </span>
    <span class="line">
      <span class="control w-full">
        <label for="obejct">Objet</label>
        <input
          type="text"
          id="object"
          v-model="form.messageObject"
          @disabled="isSubmitted"
        />
      </span>
    </span>
    <span class="line">
      <span class="control w-full">
        <label for="message">Message</label>
        <textarea
          type="text"
          id="message"
          rows="5"
          v-model="form.messageContent"
          @disabled="isSubmitted"
        ></textarea>
      </span>
    </span>
    <button type="submit">Envoyer</button>
  </form>
</template>

<style scoped>
.w-half {
  width: 49%;
}

.w-full {
  width: 100%;
}

form {
  margin: 30px 0;
  width: 80%;
}

form button {
  width: 100%;
  background-color: #7f1f92;
  height: 50px;
  outline: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color linear 0.6s;
}

form button:hover {
  background-color: #3f9478;
}

.line {
  display: inline-flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 10px;
}

.control {
  display: inline-flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
}

.control :is(input, textarea) {
  width: 100%;
  box-sizing: border-box;
  border: solid 2px #9a9a9a;
  border-radius: 4px;
  padding: 7px 15px;
  outline: none;
  font-size: 1.2rem;
}

.control input {
  height: 50px;
}

.control textarea {
  height: 300px;
  resize: none;
  font-family: inherit;
}
</style>
