<!-- <template>
//   <div id="chat">
//     <div class="block">
//         <div class="msg" ref="box">
//             <div v-for="(item,index) in list" :key="index" :class="[item.type,'msg-item']">
//                 <p>
//                     {{item.content}}
//                 </p>
//             </div>
//         </div>
//     </div>
//     <div class="input-group">
//         <input type="text" v-model = "contentText">
//         <button @click="sendText">发送</button>
//     </div> 
//   </div>
// </template>
// <script>-
// export default {
//   name: 'chat',
//   data () {
//     return {
//       list:[],
//       contentText:""
//     }
//   },
//   mounted(){
//     if(window.Websocket){
//             console.log(1);
//     }
//   },
//   methods:{
//       sendText(){
//           let that = this;
//           this.list = [...this.list,{type:"mine",content:this.contentText}];
//           this.backtext(function(){
//               that.contentText = "";
//           });
//           console.log(this.list);      },
//       backtext(callback){
//           let that = this;
//           if(window.Websocket){
//             console.log(1);
//             let ws = new WebSocket("ws://localhost:8080");
//             ws.onopen = function (e) {
//                 console.log("链接服务器成功");
//                 console.log("that.contentText is", that.contentText);
//                 ws.send(that.contentText);
//                 callback();
//           };
//           ws.onclose = function (e) {
//             console.log("服务器关闭")
//           };
//           ws.onerror = function () {
//             console.log("服务器出错")
//           };
//           ws.onmessage = function (e) {
//             that.list = [...that.list, {type: "robot", content: e.data}]
//             }
//           }
//     },
//      watch: {
//       //监听list,当有修改的时候进行div的屏幕滚动，确保能看到最新的聊天
//       list: function () {
//         let that = this;y
//         setTimeout(() => {
//           that.$refs.box.scrollTop = that.$refs.box.scrollHeight;
//         }, 0);
//         //加setTimeout的原因：由于vue采用虚拟dom，我每次生成新的消息时获取到的div的scrollHeight的值是生成新消息之前的值，所以造成每次都是最新的那条消息被隐藏掉了
//       }
//     },
//   }
// }
// </script>

// <style >
//     .test3 {
//     text-align: center;
//   }
 
//   .msg {
//     width: 100px;
//     height: 100px;
//     overflow: auto;
//     padding-top: 5px;
//     border: 1px solid red;
//     display: inline-block;
//     margin-bottom: 6px;
//   }
//     .msg-item {
//       position: relative;
//       overflow: hidden;
//     }
//     .msg-item >p {
//         display: inline-block;
//         border-radius: 40px;
//         background: #3C3D5A;
//         color: white;
//         padding: 2px 12px;
//         margin: 0 0 2px 0;
//         max-width: 70%;
//         text-align: left;
//         box-sizing: border-box;
//       }
//       .mine >p {
//           float: right;
//           background: aquamarine;
//           color: white;
//         }

// </style>
