import { useEffect, useState } from "react";
import CardCounter from "./CardCounter";
import "./CSS/gameZone.css"

function GameZone() {
    return(
        <div className="gameZone">
            <CardCounter/>
            <CardCounter/>
            <CardCounter/>
            <CardCounter/>
            <CardCounter/>
        </div>
    )
}

export default GameZone;