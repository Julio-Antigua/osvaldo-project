import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import io from "socket.io-client";

// const socket = io("http://localhost:3001");
const socket = io("https://node-test-84xy.onrender.com");

export default function App() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [connectedUsers, setConnectedUsers] = useState([]); // Estado para los usuarios conectados

  useEffect(() => {
    socket.on("message", receiveMessage);
    socket.on("updateUserList", updateUserList); // Escuchar los cambios en la lista de usuarios

    return () => {
      socket.off("message", receiveMessage);
      socket.off("updateUserList", updateUserList);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [message, ...state]);

  const updateUserList = (users) => {
    setConnectedUsers(users); // Actualizar la lista de usuarios conectados
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages((state) => [newMessage, ...state]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  return (
    <div className="h-screen bg-zinc-800 text-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center bg-zinc-900 p-4">
        {/* Título y subtítulo */}
        <div>
          <h1 className="text-3xl font-bold">911</h1>
          <p className="text-sm">Chat Room Necesidades Médicas</p>
        </div>
        {/* Opciones */}
        <div className="flex gap-4">
          <Link to="/cmd">
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
              Ir a CMD
            </button>
          </Link>
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md">
            Invitar
          </button>
          <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md">
            Incluir tu página
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Chat Area */}
        <div className="flex-1 flex flex-col p-4">
          <ul className="flex-grow overflow-y-auto bg-zinc-800 p-4 rounded-md">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`my-2 p-2 text-sm rounded-md ${message.from === "Me" ? "bg-sky-700 ml-auto" : "bg-black"}`}
              >
                <b>{message.from}</b>: <a href="http://localhost:5173/cmd">{message.body}</a>
              </li>
            ))}
          </ul>

          {/* Input at the bottom */}
          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900 p-4 w-full flex items-center"
          >
            <input
              name="message"
              type="text"
              placeholder="Write your message..."
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 border-zinc-500 p-2 w-full text-black"
              value={message}
              autoFocus
            />
            <button
              type="submit"
              className="ml-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
            >
              Enviar
            </button>
          </form>

          {/* Invitación de amigos debajo del input */}
          <div className="mt-4 text-sm text-gray-400 flex items-center space-x-2">
            <p>Invita a tus amigos a este enlace:</p>
            <a
              href="http://localhost:3000"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://localhost:3000
            </a>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-64 bg-zinc-900 p-4">
          <h3 className="text-lg font-bold mb-2">Miembros Conectados</h3>
          <div className="text-sm mb-2">
            <h4 className="font-semibold">Conectados:</h4>
            {connectedUsers.length > 0 ? (
              connectedUsers.map((user, index) => (
                <p key={index} className="mb-1">
                  user{index}-{user}
                </p>
              ))
            ) : (
              <p>No hay usuarios conectados</p>
            )}
          </div>
          <div className="text-sm mb-2">
            <h4 className="font-semibold">Invitados:</h4>
            <p>AnnoNymus015, RebXliu69</p>
          </div>
          <div className="text-sm mb-2">
            <h4 className="font-semibold">Ausentes:</h4>
            <p>SarCam26</p>
          </div>
        </div>
      </div>
    </div>
  );
}
