import express from "express";
import http from "http";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import { resolve, dirname } from "path";

import { PORT } from "./config.js";
import cors from "cors";

// Initializations
const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  // cors: {
  //   origin: "http://localhost:3000",
  // },
});

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(resolve("frontend/dist")));

// Store connected users
let connectedUsers = [];

io.on("connection", (socket) => {
  console.log("Usuario conectado:", socket.id);

  // Add new user to the list of connected users
  connectedUsers.push(socket.id);

  // Emit the updated list of users to all clients
  io.emit("updateUserList", connectedUsers);

  // Send a welcome message to the new user
  socket.emit("message", {
    body: "Bienvenido al chat!",
    from: "Server",
  });

  // Broadcast the new message to all other users
  socket.on("message", (body) => {
    socket.broadcast.emit("message", {
      body,
      from: socket.id.slice(8), // Puedes personalizar esto para usar nombres de usuario
    });
  });

  // Handle user disconnect
  socket.on("disconnect", () => {
    console.log("Usuario desconectado:", socket.id);

    // Remove the user from the connected users list
    connectedUsers = connectedUsers.filter((id) => id !== socket.id);

    // Emit the updated list of users to all clients
    io.emit("updateUserList", connectedUsers);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
