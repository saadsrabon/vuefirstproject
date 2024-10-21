Vue.createApp({
    data() {
      return {
        name: "Saad",
        age: 27,
        image:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg"
      };
    },
    methods:{
      random(){
        return Math.floor(Math.random()*10)
      }
    }
  }).mount("#assignment");


