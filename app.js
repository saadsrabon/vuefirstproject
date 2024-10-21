Vue.createApp({
    data(){
      return{
        output:"Output",
        changed:"Output" ,
      }
    },

    methods:{
     showAlert(){
        alert("This is an alert!")
     },
     changeOutPut(event){
        this.output= event.target.value
        console.log(event.target.value)
     },
     changeOutPutEnter(event){
        this.changed= event.target.value
        console.log(event.target.value)
     }
    }
}).mount('#assignment')