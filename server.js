const http = require("http");
const fs = require("fs");
const port = 3000;
const ip = "127.0.0.1";

const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./${filename}`, (error, data) => {
        if(error){
            response.statusCode = 500;
            response.setHeader("Content-Type","text/plain");
            response.end("ERROR!");
        } else{
            response.statusCode = statusCode;
            response.setHeader("Content-Type","text/html");
            response.end(data);
        }
    });
};

const server =  http.createServer((request, response) => {
    // console.log(request.url, request.method);
    const method = request.method;
    let url = request.url;


    if(method === "GET") {
        sendResponse("Questionaire.html",200,response);
    }
    else{
        sendResponse("404.html",404,response);

    }     
});


server.listen(port,ip,() => {
    console.log(`Server is running at http://${ip}:${port}`);
});
