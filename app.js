const vm = Vue.createApp({
    data(){
        return {
            firstName: 'John',            
            lastName: 'Doe',
            url:'www.google.com'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    },
}).mount('#app')

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