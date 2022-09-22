const vm = Vue.createApp({
  data() {
    return {
      firstName: "John",
      middleName: "",
      lastName: "Doe",
      url: "www.google.com",
      raw_url: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    increment() {
      this.age++;
    },
    updateFirstName(msg, event) {
      //console.log(msg)
      this.firstName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      console.log("Full computed property method was called");

      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch:{
    age(newVal,oldVal){
        setTimeout(()=> {
            this.age = 20
        },3000)
    }
  }
}).mount("#app");

// setTimeout(() => {
//     vm.firstName = 'Bob'
// },2000)
// Vue.createApp({
//     data(){
//         return {
//             firstName: 'Enes',
//             lastName: 'Gunacti'
//         }
//     }
// }).mount('#app2')
