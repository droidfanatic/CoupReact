import { useEffect, useState } from "react";
import "./CSS/playingCard.css"

function PlayingCard({cardid}) {
    const [card, setCard] = useState('');

    useEffect(() => {
        switch(cardid){
            case 1:
                setCard('');
                break;
            case 2:
                setCard('');
                break;
            case 3:
                setCard('');
                break;
            case 4:
                setCard('');
                break;
            case 5:
                setCard('');
                break;
            default:
                setCard('');
        }
    }, [cardid])

    return(
        <div className="playingCard">
            <img src={card} width={100} height={100}/>
        </div>
    )
}

export default PlayingCard;