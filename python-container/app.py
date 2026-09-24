from http.server import BaseHTTPRequestHandler, HTTPServer
import json, os
class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path not in ('/', '/health'):
            self.send_error(404); return
        body = json.dumps({'service': os.getenv('SERVICE_NAME', 'python-api'), 'status': 'ok'}).encode()
        self.send_response(200); self.send_header('Content-Type', 'application/json'); self.send_header('Content-Length', str(len(body))); self.end_headers(); self.wfile.write(body)
HTTPServer(('0.0.0.0', int(os.getenv('PORT', '8000'))), Handler).serve_forever()
