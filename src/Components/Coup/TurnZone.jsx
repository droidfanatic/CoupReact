import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import PlayerDisc from "./PlayerDisc";

function TurnZone({playerList, gameStart, isLeft = true, setGameStart}){
    const [isReal, setIsReal] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [isTurn, setIsTurn] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false])
    const [randomKey, setRandomKey] = useState(1);

    useEffect(() => {
        // Connect to the Socket.IO server
        const socket = io("http://localhost:5000/game");

        socket.on("random_turn", (data) => {
            // setIsTurn([false,false,false,false,false,false,false,false,false,false,false,false,false,false])
            // setIsTurn(isTurn[data.turn] = true);
        });
    
        // Clean up when component unmounts
        return () => {
          socket.disconnect();
        };
      }, []);

    useEffect(() => {
        if(gameStart == false){
            setIsReal([false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
        }
    }, [gameStart])

    useEffect(() => {
        let temp = isReal;
        for (let i = 0; i < playerList.length; i++){
            temp[i] = true;
        }
        setIsReal(temp);
        setRandomKey(randomKey * 2);
        getRandomTurn();
    }, [playerList])

    const getRandomTurn = () => {
        const socket = io("http://localhost:5000/game");
        socket.emit("randomturn");
    };

    const endGame = async () => {
        try {
            const response = await fetch("http://localhost:5000/reset");
            if (!response.ok) {
              throw new Error("Failed to reset game");
            }
            setGameStart(false)
          } catch (error) {
            console.error("Error to reset game:", error);
            alert("Error to reset game. Please try again later.");
          }
    };

    return(
        <div>
            { isLeft ?
            <div>
                <button onClick={endGame}>End Game</button>
                <PlayerDisc playerList={playerList} playerId={0} isUserTurn={isTurn[0]} isRealPlayer={isReal[0]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={1} isUserTurn={isTurn[1]} isRealPlayer={isReal[1]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={2} isUserTurn={isTurn[2]} isRealPlayer={isReal[2]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={3} isUserTurn={isTurn[3]} isRealPlayer={isReal[3]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={4} isUserTurn={isTurn[4]} isRealPlayer={isReal[4]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={5} isUserTurn={isTurn[5]} isRealPlayer={isReal[5]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={6} isUserTurn={isTurn[6]} isRealPlayer={isReal[6]} gameStart={gameStart}/>
            </div> :
            <div>
                <PlayerDisc playerList={playerList} playerId={7} isUserTurn={isTurn[7]} isRealPlayer={isReal[7]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={8} isUserTurn={isTurn[8]} isRealPlayer={isReal[8]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={9} isUserTurn={isTurn[9]} isRealPlayer={isReal[9]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={10} isUserTurn={isTurn[10]} isRealPlayer={isReal[10]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={11} isUserTurn={isTurn[11]} isRealPlayer={isReal[11]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={12} isUserTurn={isTurn[12]} isRealPlayer={isReal[12]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={13} isUserTurn={isTurn[13]} isRealPlayer={isReal[13]} gameStart={gameStart}/>
            </div>
            }
        </div>
    )
}

export default TurnZone;