const http = require('http');
const PORT = 3000;
const fs = require('fs');
const path = require('path');

const materias = [{
    id: "1", nombreMateria: "Taller de Programación 2"
}
];

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

    if (req.method === 'GET' && req.url === '/traer/materias') {
        // Devolver el arreglo en formato JSON
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(materias));
    }



});

servidor.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}.`);
})