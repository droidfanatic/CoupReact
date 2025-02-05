import { useEffect, useState } from "react";

function PlayerHand({playerId, cardIds}) {
    const [cardOne, setCardOne] = useState('');
    const [cardTwo, setCardTwo] = useState('');

    useEffect(() => {
        for (let i = 0; i < 2; i++){
            switch(cardIds[i]){
                case 1:
                    if(i == 0){
                        setCardOne('');
                    }
                    else{
                        setCardTwo('');
                    }
                    break;
                case 2:
                    if(i == 0){
                        setCardOne('');
                    }
                    else{
                        setCardTwo('');
                    }
                    break;
                case 3:
                    if(i == 0){
                        setCardOne('');
                    }
                    else{
                        setCardTwo('');
                    }
                    break;
                case 4:
                    if(i == 0){
                        setCardOne('');
                    }
                    else{
                        setCardTwo('');
                    }
                    break;
                case 5:
                    if(i == 0){
                        setCardOne('');
                    }
                    else{
                        setCardTwo('');
                    }
                    break;
                default:
                    if(i == 0){
                        setCardOne('');
                    }
                    else{
                        setCardTwo('');
                    }
            }
        }
    }, [cardIds])

    return(
        <div>
            <div>
                <img src={cardOne} width={100} height={100}/>
                <img src={cardTwo} width={100} height={100}/>
            </div>
        </div>
    )

}

export default PlayerHand;