<template>
  <p>{{ msg }}</p>
</template>

<script>
import Greeting from "./components/Greeting.vue";
export default {
  name: "App",
  components: {
    Greeting: Greeting,
  },
};
</script>

