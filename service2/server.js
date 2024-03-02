// server.js
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Hello from Node.js service2!\n');
    } else {
        res.end('Invalid path\n');
    }
});

server.listen(3000, () => {
    console.log('Node.js server listening on port 3000');
});