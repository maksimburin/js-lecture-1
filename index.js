const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {
    console.log(request.method, request.url)
    let content = '';
    if (request.url == '/') {
        content = fs.readFileSync('index.html', 'utf8');
    } else if (request.url == '/style.css') {
        content = fs.readFileSync('style.css', 'utf8');
    }
    response.end(content);
});

/* Когда сервер запускается на heroku, мы точно не знаем какой порт мы можем использовать.
  Поэтому берем значение порта из переменной окружения */
server.listen(process.env.PORT || 3000);
console.log('server started!');