import { useEffect, useState } from "react";
import "./CSS/cardCounter.css"

function CardCounter({cardid}) {
    const [card, setCard] = useState(''); 
    const [count, setCount] = useState(0);

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
        <div>
            <div className="cardCounter">
                <img src={card} width={100} height={100}/>
            </div>
            <div>
                <h3>{count}</h3>
            </div>
        </div>
    )
}

export default CardCounter;