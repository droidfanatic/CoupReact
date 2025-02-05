import { useEffect, useState } from "react";

function PlayerDisc({playerList, playerId, isUserTurn = false, isRealPlayer = false, gameStart = false}) {
    const [name, setName] = useState('no name');
    const [isTurn, setIsTurn] = useState(false);
    const [isPlayer, setIsPlayer] = useState(false);

    useEffect(() => {
        setIsPlayer(isRealPlayer);
        if(isRealPlayer){
            setName(playerList[playerId]);
        }
        console.log(isPlayer);
    }, [playerList, isRealPlayer, gameStart])

    useEffect(() => {
        setIsTurn(isUserTurn);
    }, [isUserTurn])

    return(
        <div>
            {isPlayer ?
            <div>
                <h3>{name}</h3>
                <h5>{isTurn}</h5>
                {isTurn && <img src=''/>}
            </div> :
            <div>
            </div>
            }
        </div>
    )
}

export default PlayerDisc;