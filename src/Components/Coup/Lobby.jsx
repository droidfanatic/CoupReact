import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./CSS/lobby.css";

const Lobby = ({ setGameStart }) => {
  const [name, setName] = useState("");
  const [players, setPlayers] = useState([]);
  const [joined, setJoined] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io("http://localhost:5000/game");

    // Listen for 'player_joined' and update the players list
    socket.on("player_joined", (data) => {
      setPlayers(data.players);
    });

    // Listen for 'player_left' and update the players list
    socket.on("player_left", (data) => {
      setPlayers(data.players);
    });

    // Listen for 'game_started' event
    socket.on("game_started", () => {
      setGameStarted(true);
      setGameStart(true);
    });

    // Clean up when component unmounts
    return () => {
      socket.disconnect();
    };
  }, [setGameStart]);

  const joinLobby = () => {
    if (name.trim() === "") return;

    const socket = io("http://localhost:5000/game");
    socket.emit("join", { username: name });

    // Set joined state
    setJoined(true);
  };

  const leaveLobby = () => {
    if (!joined) return;

    const socket = io("http://localhost:5000/game");
    socket.emit("leave", { username: name });

    // Set joined state to false
    setJoined(false);
  };

  const startGame = async () => {
    const response = await fetch("http://localhost:5000/start", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.message === "Game started") {
      setGameStarted(true);
      setGameStart(true);
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="lobby-container">
      {/* Players List */}
      <div className="players-list">
        <h3>Players list</h3>
        <ul>
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>

      {/* Input & Buttons */}
      <div className="input-section">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={joined}
        />
        <button onClick={joinLobby} disabled={joined}>Join</button>
        <button onClick={leaveLobby} disabled={!joined}>Leave</button>
      </div>

      {/* Bottom Buttons */}
      <div className="bottom-buttons">
        <button>Rules</button>
        <button onClick={startGame} disabled={players[0] !== name || gameStarted}>Start Game</button>
      </div>
    </div>
  );
};

export default Lobby;
