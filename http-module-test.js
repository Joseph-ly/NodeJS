var http = require('http'); // node自带http模块

http.createServer(function(request, response) {
    // send HTTP header
    // HTTP 状态值：200: ok
    // 内容类型： text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World');
}).listen(8888);
console.log('hello world');
