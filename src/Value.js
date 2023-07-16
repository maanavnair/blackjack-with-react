

export default function Value(props){
    return(
        <div className="value">
            <h2>Points: {props.points}</h2>
            <p>Total: {props.total}</p>
        </div>
    )
}