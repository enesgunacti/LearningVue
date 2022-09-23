<template>
  <p v-if="age > 25">{{ msg }}</p>
  <p v-else>You must be 25 years or oldet to view this message</p>
</template>

<script>
export default {
  name: "MyGreeting",
  props: ["age"],
  data() {
    return {
      msg: "Hello World",
    };
  },
};
</script>   

<style scoped lang="scss">
$color: red;

p {
  color: $color;
}
</style>
  
