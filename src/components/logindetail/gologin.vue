<template>
  <div id="gologin">
    <login></login>
    <div class="h1">        
            <input @focusin='useron' @focusout='userout' id="userid" type="text" value="账号/手机号/邮箱"/>        
            
            <input @focusin='pswdon' @focusout='pswdout' id="pswd" type="text" value="输入密码"/>        
            <div class="login">
                <img src="" alt="">
            </div>
            <div class="tip">
                <router-link to="/index">忘记密码</router-link>
                <span>|</span>
                <router-link >注册</router-link>
            </div>
        </div>
  </div>
</template>

<script>
import login from '../login'
export default {
  name: 'index',
  components:{
      login
  },
  mounted() {      
    this.$("#gologin").width($(window).width());
    this.$("#gologin").height($(window).height());
    console.log(this.getViewportSize());
  },
  methods:{
      useron(e){
          if(e.target.value=="账号/手机号/邮箱"){
                    e.target.value="";
                    }
      },
      userout(e){
          if(e.target.value==""){
                e.target.value="账号/手机号/邮箱";
                    }
      },
      pswdon(e){
          if(e.target.value=="输入密码"){
                    e.target.value="";
                    }
      },
      pswdout(e){
          if(e.target.value==""){
               e.target.value="输入密码";
                    }   
      }
  },
  data () {
    return {
      
    }
  }
}
</script>

<style >
    *{
        margin:0;
        padding:0;
    }
    html,body{
        height:100%;
        width:100%;
    }
    #gologin{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        height:100%;
        width:100%;
    }
    .h1{
            margin-top:35%;
            display:flex;
            flex-direction: column;
            height:100%;
            width:100%;
    }
    #userid{
            
            outline: none;
            border-style: none;
            background-color: #ebebeb;
            text-align: center;
            margin:0 auto;
            margin-bottom:5px;
            border-radius: 25px;
            height:50px;
            width:75%;
            font-size:17px;
            color: #aeaeae;
        }
        #pswd{
            display:flex;
            outline:none;
            border-style: none;
            background-color: #ebebeb;
            text-align: center;
            margin:5px auto;
            border-radius: 25px;
            height:50px;
            width:75%;
            font-size:17px;
            color: #aeaeae;
        }
        .h2{
            flex:1;
        }
        .login{
            height:50px;
            width:50px;
            margin:10px auto;
            text-align:center;
            line-height:50px;
            background-color: blue;
            border-radius: 50%;
            color:#fff;
        }
        .tip{
            text-align: center;
            height:15px;
            line-height: 15px;
            color: #fff;
        }
        a{
            text-decoration: none;
            color: #fff;
        }
</style>
