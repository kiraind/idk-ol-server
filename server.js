var http = require('http')
var data = require('./data.json')

data = JSON.stringify(data);

http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === '/page') {
        response.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        response.end(data);
    }
    else if (request.url === '/posthere') {
        if (getRandomInt(1, 100) === 42) {
            response.writeHead(404, {
                'Content-Type': 'text/plain; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            response.end('nope');
        }
        else {
            response.writeHead(200, {
                'Content-Type': 'text/plain; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            response.end('ok');
        }
    }
    else {
        response.writeHead(404, {
            'Content-Type': 'text/plain; charset=utf-8',
            'Access-Control-Allow-Origin': '*'
        });
        response.end('nope');
    }
}).listen(9000)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}