import React from "react";

const CityItem = (props) => {
    
    return (
        <span onClick={()=>{console.log(props.city)}}> {props.city}</span>
    )
} 

export default CityItem