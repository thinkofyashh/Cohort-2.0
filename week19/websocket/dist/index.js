"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Hello World");
});
const server = app.listen(8080);
//const server = http.createServer(function(request: any, response: any) {
//  console.log((new Date()) + ' Received request for ' + request.url);
//response.end("hi there");
//});
let userCount = 0;
const wss = new ws_1.WebSocketServer({ server });
wss.on('connection', function connection(ws) {
    ws.on('error', console.error);
    ws.on('message', function message(data, isBinary) {
        console.log("hello from server");
    });
    console.log("userCount:", ++userCount);
    ws.send('Hello! Message From Server!!');
});
//server.listen(8080, function() {
//  console.log((new Date()) + ' Server is listening on port 8080');
//});
