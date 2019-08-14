<template>
  <div id="app"  >
      <img :src="imgUrl1">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted(){
    this.$("#app").width($(window).width());
    this.$("#app").height($(window).height());
  },
  components:{
    
  },
  data () {
    return {
      imgUrl1:require("../static/loginpic/logo.png")
    }
  },

}
</script>

<style >
*{
  margin:0;
  padding:0;
}
body,html{
  height:100%;
  width:100%;
}
#app{
   overflow:hidden;
   position: fixed;
   background:url("./assets/1.jpg");
   width:100%;
   height:100%;
   background-size:cover;
   box-sizing: border-box;   
}
img{
  float:right;
  width:5rem;
  height:3rem;
  margin-right:2rem;
}
</style>
