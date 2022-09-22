let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})
vm.component('hello',{
  template:`<h1>{{message}}</h1>`,
  data() {
    return {
      message:'Hello World'
    }
  }
})
vm.mount('#app')

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello world!"
//     }
//   },
//   render(){
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount('#app2')

// setTimeout(()=>{
// vm.mount('#app')
// },3000)