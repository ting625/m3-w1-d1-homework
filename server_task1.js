const http = require('http');

const server = http.createServer((req, res) => {
    // Set the response header
    res.setHeader('Content-Type', 'text/plain');

    // Check the URL of the current request
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Home Page.');
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('About Page.');
    } else if (req.url === '/contact') {
        res.statusCode = 200;
        res.end('Contact Page.');
    } else {
        res.statusCode = 404;
        res.end('Invalid Request!');
    }
});

// Listen for requests on port 5000
const port = 5000;
server.listen(port, () => {
    console.log(`The NodeJS server on port ${port} is now running...`);
});