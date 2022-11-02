import React from 'react'

const Card = ({myData}) => {    
    const {name , weather, main:{temp}, wind} = myData;
 return (
   <div className="text-center d-flex justify-content-center p-5">
     <div className="card " style={{ width: "20rem" }}>
       <img
         src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
         className="card-img-top"
         alt="img"
         style={{ width: "10rem" ,margin:"0 auto" }}
       />
       <div className="card-body">
         <h5 className="card-title">{name}</h5>
       </div>
       <ul className="list-group list-group-flush">
         <li className="list-group-item bg-danger">
           {weather[0]?.description}
         </li>
         <li className="list-group-item ">{temp} &deg;C</li>
         <li className="list-group-item bg-danger">
           wind-speed: {wind?.speed}, degree: {wind?.deg}&deg;
         </li>
       </ul>
     </div>
   </div>
 ); 
}

export default Card