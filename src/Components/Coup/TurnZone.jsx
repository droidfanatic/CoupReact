import { useEffect, useState } from "react";
import PlayerDisc from "./PlayerDisc";

function TurnZone({playerList, gameStart, isLeft = true, setGameStart}){
    const [isReal, setIsReal] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
    const [randomKey, setRandomKey] = useState(1);

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
        console.log(playerList);
        console.log(isReal);
    }, [playerList])

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
                <PlayerDisc playerList={playerList} playerId={0} isUserTurn={false} isRealPlayer={isReal[0]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={1} isUserTurn={false} isRealPlayer={isReal[1]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={2} isUserTurn={false} isRealPlayer={isReal[2]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={3} isUserTurn={false} isRealPlayer={isReal[3]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={4} isUserTurn={false} isRealPlayer={isReal[4]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={5} isUserTurn={false} isRealPlayer={isReal[5]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={6} isUserTurn={false} isRealPlayer={isReal[6]} gameStart={gameStart}/>
            </div> :
            <div>
                <PlayerDisc playerList={playerList} playerId={7} isUserTurn={false} isRealPlayer={isReal[7]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={8} isUserTurn={false} isRealPlayer={isReal[8]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={9} isUserTurn={false} isRealPlayer={isReal[9]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={10} isUserTurn={false} isRealPlayer={isReal[10]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={11} isUserTurn={false} isRealPlayer={isReal[11]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={12} isUserTurn={false} isRealPlayer={isReal[12]} gameStart={gameStart}/>
                <PlayerDisc playerList={playerList} playerId={13} isUserTurn={false} isRealPlayer={isReal[13]} gameStart={gameStart}/>
            </div>
            }
        </div>
    )
}

export default TurnZone;