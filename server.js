const http = require('http');
const PORT = 3000;
const fs = require('fs');
const path = require('path');

const servidor = http.createServer((req, res) => {
    // Manejar la solicitud GET a la ruta "/"
    if (req.method === 'GET' && req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');

        // Leer el archivo HTML
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al cargar el archivo');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }

    if (req.method === 'GET' && req.url === '/formulario/alta') {
        const filePath = path.join(__dirname, 'alta.html');

        // Leer el archivo HTML
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error al cargar el archivo');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }


});

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`);
})