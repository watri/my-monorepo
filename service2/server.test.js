const assert = require('assert');
const http = require('http');

describe('Node.js server test', () => {
  it('should respond to the root path with "Hello from Node.js service2!"', (done) => {
    const server = http.createServer((req, res) => {
      if (req.url === '/') {
        res.end('Hello from Node.js service2!\n');
      } else {
        res.end('Invalid path\n');
      }
    });

    server.listen(3000, () => {
      http.get('http://localhost:3000/', (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          assert.equal(data, 'Hello from Node.js service2!\n');
          server.close();
          done();
        });
      });
    });
  });

  it('should respond to an invalid path with "Invalid path"', (done) => {
    const server = http.createServer((req, res) => {
      if (req.url === '/') {
        res.end('Hello from Node.js service2!\n');
      } else {
        res.end('Invalid path\n');
      }
    });

    server.listen(3000, () => {
      http.get('http://localhost:3000/invalid', (response) => {
        let data = '';
        response.on('data', (chunk) => {
          data += chunk;
        });

        response.on('end', () => {
          assert.equal(data, 'Invalid path\n');
          server.close();
          done();
        });
      });
    });
  });
});
