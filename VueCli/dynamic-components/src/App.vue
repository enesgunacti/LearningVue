<template>
  <select name="" id="">
    <option value="TestHome">Home</option>
    <option value="TestAbout">About</option>
  </select>
  <TestHome />
</template>



<script>
import TestHome from "./components/TestAbout.vue";
import TestAbout from "./components/TestHome.vue";
export default {
  name: "App",
  components: {
    TestHome,
    TestAbout,
  },
};
</script>

