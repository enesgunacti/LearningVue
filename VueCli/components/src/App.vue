<template>
  <h3>Hey!</h3>

  <greeting :age="age"></greeting>
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
</template>

<script>
import Greeting from "./components/MyGreeting.vue";
import User from "./components/MyUser.vue";
export default {
  name: "App",
  components: {
    Greeting,
    User,
  },
  data() {
    return {
      age: 20,
    };
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    },
  },
};
</script>



