<template>
  <div id="gologin">
    <div class="h1">     
            <input @focusin='useron' @focusout='userout' id="userid" type="text" value="账号/手机号/邮箱"/>        
            <input @focusin='pswdon' @focusout='pswdout' id="pswd" type="text" value="输入密码"/>        
            <div class="login">
                <img :src="imgurl">
            </div>
            <router-view></router-view>
            <div class="tip">
                    <router-link to='/chat'>跳转</router-link>
                    <span>|</span>
                    <router-link to='/register'>注册</router-link>
            </div>
        </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: 'index',
  mounted() {      
    //   Axios.post("/login".then(res=>{
    //       console.log(res.data);
    //   }))
    
    Axios.post("/login").then(res => {
        this.userlist=res.data.result.user;     
    });
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
        imgurl:require("../../static/loginpic/arrow.png"),
        userlist:null
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
            position:relative;
            height:50px;
            width:50px;
            margin:10px auto;
            text-align:center;
            line-height:50px;
            background-color: rgb(20, 126, 197);
            border-radius: 50%;
            color:#fff;
        }
        .login>img{
            position:absolute;
            left:11px;
            top:6px;
            width:65%;
            height:75%;
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
