import React from "react";
import "./CSS/Coup/layout.css";
import { useEffect, useState } from "react";
import TurnZone from "../Components/Coup/TurnZone";
import GameZone from "../Components/Coup/GameZone";
import PlayerZone from "../Components/Coup/PlayerZone";
import Lobby from "../Components/Coup/Lobby";

function CoupGame() {
    const [gameStart, setGameStart] = useState(false);
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetchPlayers();
      }, [gameStart]);
    
      const fetchPlayers = async () => {
        try {
          const response = await fetch("http://localhost:5000/lobby");
          if (!response.ok) {
            throw new Error("Failed to fetch players");
          }
          const data = await response.json();
          setPlayers(data.players);
          console.log(players);
        } catch (error) {
          console.error("Error fetching players:", error);
          alert("Error fetching players. Please try again later.");
        }
      };

    return (
        <div>
            { gameStart ?
            <div className="container" style={{ backgroundColor: 'green', width: '100vw', height: '100vh' }}>
                <div className="sidebar">
                    <TurnZone
                    playerList={players}
                    gameStart={gameStart}
                    setGameStart={setGameStart}
                    />
                </div>
    
                <div className="main">
                    <div className="top">
                        <GameZone/>
                    </div>
                    <div className="bottom">
                        <PlayerZone/>
                    </div>
                </div>
    
                <div className="sidebar">
                    <TurnZone
                    playerList={players}
                    gameStart={gameStart}
                    isLeft={false}
                    />
                </div>
            </div> :
            <div>
                <Lobby
                    setGameStart={setGameStart}
                />
            </div>
            }
        </div>
    );
}
  
export default CoupGame;