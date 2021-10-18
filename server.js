const http = require("http");

const server =  http.createServer((request, Response) => {
    Response.end("hello from NodeJS Server 23");
});

const port = 2000;
const ip = "127.0.0.1";


server.listen(port,ip,()=>{
    console.log(`Server is running at http://${ip}:${port}`);
});
