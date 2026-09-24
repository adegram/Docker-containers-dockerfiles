const http = require('node:http');
const port = Number(process.env.PORT || 8080);
http.createServer((req, res) => {
  const ok = req.url === '/' || req.url === '/health';
  res.writeHead(ok ? 200 : 404, {'content-type': 'application/json'});
  res.end(JSON.stringify(ok ? {service: 'multi-stage-node', status: 'ok'} : {error: 'not found'}));
}).listen(port, '0.0.0.0');
