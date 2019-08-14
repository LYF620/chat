const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const http = require("http");
// // app.use(bodyParser.json());
// // app.use(bodyParser.urlencoded({ extended: false }));
// // // 服务开启后访问指定编译好的dist文件下的数据
// // app.use(express.static(path.resolve(__dirname, "../dist")));
// app.get("*", function(req, res) {
//   const html = fs.readFileSync(
//     path.resolve(__dirname, "../dist/index.html"),
//     "utf-8"
//   );
//   res.send(html);
// });
// 后端api路由
// app.use('/api', userApi);
// 监听端口
var servers = http.createServer(function(req, res) {
  fs.readFile("./index.html", function(error, data) {
    //若根目录有index.html，访问地址，将显示index.html
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data, "utf-8");
  });
});
// var io=socketIo(servers);
// var io = require("socket.io").listen(servers);
var io = require('socket.io')(http);
io.sockets.on("connection", socket => {
  var timer = "";
  console.log("链接成功");
  socket.on("connection",function(){
    console.log("connect successful");
  })
  socket.on("start", () => {
    //监听前端发送的start
    timer = setInterval(function() {
      //定时器每五秒发一次
      socket.emit("login", {
        //触发emit,前端接收
        Action: "DataRecv",
        Data: {
          Reporting_mode: { T: "I", V: 5 }
        }
      });
    }, 5000);
  });
});
servers.listen(8080);
