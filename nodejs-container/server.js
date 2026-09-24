const http = require('node:http');
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  const healthy = req.url === '/' || req.url === '/health';
  const body = JSON.stringify(healthy ? {service: process.env.SERVICE_NAME || 'node-api', status: 'ok'} : {error: 'not found'});
  res.writeHead(healthy ? 200 : 404, {'content-type': 'application/json'}); res.end(body);
}).listen(port, '0.0.0.0');
