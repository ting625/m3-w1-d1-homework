const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Define the file path based on the URL
    let filePath = '';
    if (req.url === '/') {
        filePath = path.join(__dirname, 'home.html');
    } else if (req.url === '/about') {
        filePath = path.join(__dirname, 'about.html');
    } else if (req.url === '/contact') {
        filePath = path.join(__dirname, 'contact.html');
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Invalid Request!');
        return;
    }

    // Read the file and respond
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Server Error!');
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    });
});

// Listen for requests on port 5000
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`The NodeJS server on port ${PORT} is now running...`);
});
