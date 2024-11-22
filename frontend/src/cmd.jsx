import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";

// Conexión al socket
const socket = io("/");
//const socket = io("http://desktop-2nopba2/");

export default function Cmd() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.on("message", receiveMessage);
    return () => {
      socket.off("message", receiveMessage);
    };
  }, []);

  const receiveMessage = (message) =>
    setMessages((state) => [...state, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages((state) => [...state, newMessage]);
    setMessage("");
    socket.emit("message", newMessage.body);
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      {/* Contenedor CMD */}
      <div className="w-2/4 h-2/4 bg-black text-green-500 flex flex-col border border-green-500 ">
        {/* Navbar */}
        <div className="flex items-center justify-between bg-gray-800 text-white p-2 mb-2 ">
          <h1 className="text-center text-sm font-bold flex-grow">
            |--------|
          </h1>
          <Link to="/services/page/app">
            <button className="bg-red-500 hover:bg-red-600 text-black px-2 py-1 rounded-md text-xs">
              X
            </button>
          </Link>
        </div>

        {/* Mensajes e Input */}
        <div className="flex flex-col">
          {/* Contenedor de mensajes */}
          <div className="overflow-y-auto mb-2 max-h-72">
            {messages.map((message, index) => (
              <div key={index}>
                <span className="text-gray-500">&gt;&gt;&gt;:</span> {message.body}
              </div>
            ))}
          </div>

          {/* Input directamente debajo */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-gray-500">&gt;&gt;&gt;:</span>
            <input
              name="message"
              type="text"
              placeholder=""
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              className="bg-black text-green-500 border-none focus:outline-none flex-grow ml-2"
              value={message}
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
}
