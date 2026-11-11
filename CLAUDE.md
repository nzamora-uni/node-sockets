# CLAUDE.md

Ejercicio académico (UVAQ) de chat en tiempo real con Node.js y Socket.IO.

## Comandos

- Instalar dependencias: `npm install`
- Correr el servidor: `node server.js` (http://localhost:3000)
- Tests: no hay (`npm test` es un placeholder)

## Estructura

- `server.js`: servidor Express + Socket.IO (puerto 3000). Sirve `public/` y retransmite cada evento `mensaje` a todos los clientes con `io.emit`.
- `public/index.html`: cliente único (HTML + JS inline). Envía y recibe el evento `mensaje`.

## Stack

- Node.js con CommonJS (`require`), no ES modules.
- Express 5 y Socket.IO 4.

## Convenciones

- Código y comentarios en español.
- Proyecto simple de un solo servidor: no agregar frameworks ni build steps sin que se pida.
- Algunos cambios propuestos se dejan comentados con la etiqueta `NUEVO` para compararlos con el código actual. No los actives ni los borres sin que se pida.

## Git

- Rama principal: `main`. Los cambios van por rama nueva y Pull Request.
- `node_modules/` y `.env` están ignorados; `package-lock.json` sí se versiona.
