import WebSocket, { WebSocketServer } from 'ws';
import http from 'http';
import express from 'express'

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello World")
})
const server=app.listen(8080)
//const server = http.createServer(function(request: any, response: any) {
  //  console.log((new Date()) + ' Received request for ' + request.url);
    //response.end("hi there");
//});
let userCount=0;
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
    
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    console.log("hello from server")
  });

  console.log("userCount:",++userCount)
  ws.send('Hello! Message From Server!!');
});

//server.listen(8080, function() {
  //  console.log((new Date()) + ' Server is listening on port 8080');
//});