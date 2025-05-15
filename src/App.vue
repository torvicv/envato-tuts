<script setup>
import Nav from './components/Navigation/Nav.vue';
import Home from './components/Pages/Home.vue';
import About from './components/Pages/About.vue';
import Contact from './components/Pages/Contact.vue';
import Profile from './components/Pages/Profile.vue';
import Settings from './components/Pages/Settings.vue';

import { ref } from 'vue';

const indexPage = ref(0);
const page = (p) => {
  indexPage.value = p;
  console.log('Page changed');
};
</script>

<template>
  <Nav @page="page" />

  <Home v-if="indexPage == 0" />
  <About v-else-if="indexPage == 1" />
  <Contact v-else-if="indexPage == 2" />
  <Profile v-else-if="indexPage == 100" />
  <Settings v-else-if="indexPage == 101" />
</template>
