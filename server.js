const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
// Servir archivos estáticos
app.use(express.static("public"));
// Detectar conexiones
io.on("connection", (socket) => {
    console.log("Usuario conectado:", socket.id);
    // Recibir mensajes
    socket.on("mensaje", (texto) => {
        console.log("Mensaje recibido:", texto);

        // Enviar mensaje a todos los clientes
        //io.emit("mensaje", texto);
        // NUEVO: enviar también el id de quien emite el mensaje
         io.emit("mensaje", { id: socket.id, texto });
    });

    // Detectar desconexión
    socket.on("disconnect", () => {
        console.log("Usuario desconectado:", socket.id);
    });
});

server.listen(3000, () => {
    console.log("Servidor activo en http://localhost:3000");
});
