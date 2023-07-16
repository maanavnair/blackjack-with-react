

export default function Buttons(props){
    return(
        <div className="button">
            <button className="btn" onClick= {props.startGame}>{props.start}</button>
            <button className="btn" onClick={props.draw}>Get New Card</button>
        </div>
    );
}