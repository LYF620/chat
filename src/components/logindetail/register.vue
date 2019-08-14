<template>
  <div id="index">
    <div class="block"> 
      <div class="h1">
            <input @focusin='emailon' @focusout='emailout' id="email" type="text" value="请输入邮箱"/>        
            <input @focusin='idon' @focusout='idout' id="id" type="text" value="请输出昵称/ID"/>        
            <input @focusin='loginpswdon' @focusout='loginpswdout' id="pswd" type="text" value="输入密码"/>        
            <input @focusin='confirmpswdon' @focusout='confirmpswdout' id="pswd" type="text" value="请确认密码"/>      
      </div>    
      <div class="h2">
            <!-- <form action="" method="get"> 
            <label><input name="Fruit" type="radio" value="" />
                <img src="imgUrl1" alt="">
            </label> 
            <label><input name="Fruit" type="radio" value="" />
                <img src="imgUrl2" alt="">
            </label> 
            </form>   -->
            <div>
              <ul class="ring">
                <li>
                  <img :src="imgUrl1">
                </li>
                <li>
                  <img :src="imgUrl2">
                  </li>
              </ul>     
            </div>
            <router-link to='/'>
              <div class="go">前往dsadsadasd登录</div>
            </router-link>
                
      </div>    
            
            
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'index',
  data () {
    return {
      icheck:[false,false],
      imgUrl1:require("../../../static/loginpic/boy.png"),
      imgUrl2:require("../../../static/loginpic/girl.png")
    }
  },
  mounted(){
    this.$socket.emit('start');
    console.log(this.$socket);
  },
  sockets:{
      connect:function() {//与socket.io连接后回调
        console.log('socket connected');
      },
      login:function(value) {
        console.log(value);//监听login(后端向前端emit  login的回调)
      }
  },
  methods:{
      // check(){
      //   this.$("li").on("click",function(){
      //     console.log(this.$);
      //   })
      // },
      emailon(e){
          if(e.target.value=="请输入邮箱"){
                    e.target.value="";
                    }
      },
      emailout(e){
          if(e.target.value==""){
                e.target.value="请输入邮箱";
                    }
      },
      idon(e){
          if(e.target.value=="请输出昵称/ID"){
                    e.target.value="";
                    }
      },
      idout(e){
          if(e.target.value==""){
                e.target.value="请输出昵称/ID";
                    }
      },
      loginpswdon(e){
          if(e.target.value=="输入密码"){
                    e.target.value="";
                    }
      },
      loginpswdout(e){
          if(e.target.value==""){
                e.target.value="输入密码";
                    }
      },
      confirmpswdon(e){
          if(e.target.value=="请确认密码"){
                    e.target.value="";
                    }
      },
      confirmpswdout(e){
          if(e.target.value==""){
                e.target.value="请确认密码";
          }
      }
  }
}
</script>

<style >
*{
  margin:0;
  padding:0;
}
.block{
  margin-top:35%;
}
.h1{
  margin-top:35%;
  display:flex;
  flex-direction: column;
  height:100%;
  width:100%;
}

.h1>input{      
            outline: none;
            border-style: none;
            background-color: #ebebeb;
            text-align: center;
            margin:0 auto;
            margin-bottom:10px;
            border-radius: 25px;
            height:50px;
            width:75%;
            font-size:17px;
            color: #aeaeae;
}
.h2{
  margin-top:10%;
  width:100%;
  height:35px;
}
.ring{
  width:100%;
  height:100%;
}
.ring li {
	position: relative;
	float: right;
	width: 50%;
	height: 50%;
	border-radius: 50%;
  /* margin: 20px;
	padding: 10px; */
	list-style:none;
} 
.ring li:before {
  cursor: pointer;
	content: '';
	display: block;
	position: absolute;
	width: 25px;
	height: 25px;
  left: 3.5rem;
  top:35px;
	border-radius: 50%;
	border: 2px solid rgb(48, 48, 48);
}
.ring li:hover:before{
  cursor: pointer;
	content: '';
	display: block;
	position: absolute;
	width: 25px;
	height: 25px;
  left: 3.5rem;
  top:35px;
	border-radius: 50%;
  background-color: black;
  transition: all .5s ease-in-out;
}
.ring li>img{
  margin-left:4rem;
  width:5rem;
  height:5rem;
}
.go{
  position:absolute;
  bottom:15%;
  width:10rem;
  height:3rem;
  text-align: center;
  line-height: 3rem;
  border-radius: 20px;
  background-color:rgb(20, 126, 197); 
  letter-spacing:3.5px;
  color:#FFF;
  left:30%;
}
</style>
