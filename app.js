Vue.createApp({
    data(){
     return{
        result:0,
        confirmedResult:""
     }
    },
    computed:{
       isShow(){
        if(this.result<37){
          return  this.confirmedResult ="Not yet there"
        }else if(this.result>37){
          return  this.confirmedResult ="Result is greater"
        }else{
          return  this.confirmedResult = this.result
        }
       }
    },
    watch:{
      result(value){
        setTimeout((value)=>{
            this.result=0
            console.log(this.result)
        },5000)
      }
    },
    methods:{
        add(value){
        this.result +=value
        console.log(this.result)
        },
        
    }
}).mount('#assignment')