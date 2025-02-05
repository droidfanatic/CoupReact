import PlayingCard from "./PlayingCard";
import "./CSS/playerZone.css"

function PlayerZone() {
    return(
        <div className="playerZone">
            <PlayingCard/>
            <PlayingCard/>
        </div>
    );
}

export default PlayerZone;