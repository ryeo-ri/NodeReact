//웹 서버 생성을 위한 내장 모듈 가져오기 
const http = require('http');
// 파일 시스템 객체 가져오기 
const fs = require('fs');

//웹 서버 생성 
const server = http.createServer((reqeust,response)=>{
    fs.readFile('./index.html',(err,data)=>{
        response.writeHead(200,{'Content-type':'text/html'});
        response.end(data);
    }); 
});


//윕 서버 실행 
server.listen(3001,() => {
    console.log("Server is running...");
});