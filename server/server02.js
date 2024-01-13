//웹 서버 생성을 위한 내장 모듈 가져오기 
const http = require('http');

//웹 서버 생성 
const server = http.createServer();


server.on() ("reqeust", function(){
    console.log("Request Event!!");
})

server.on() ("connection", function(){
    console.log("connection Event!!");
})



//윕 서버 실행 
server.listen(3001,() => {
    console.log("Server is running...");
});