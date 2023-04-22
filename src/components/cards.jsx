/* eslint-disable react/prop-types */
export default function Cards(props) {
    return(
       <div className = "card">
        <img className="card--image" src={`${props.item.image}`}></img>
        <div className ="card--details">
        <img className="card--pin" src="./assets/pin.png"></img>
        <span className="card--country">{props.item.country}</span> <span className="card--map"><a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps</a></span>
        <p className="card--location">{props.item.location}</p>
        <h4 className ="card--date">{props.item.startDate}- {props.item.endDate}</h4>
        <p className="description">{props.item.description}</p>
        </div>

       </div>
    )
}