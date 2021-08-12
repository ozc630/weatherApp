import React from "react";

import loading from './componentImages/loading.svg' // relative path to image 

const outputPage = (props) => {
    
    if (props.loading) {
        return (
            <div className="loading">
                <img src={loading} alt={"loading"}/> 
            </div>
        )
    }

    let temp;

    if (props.error) {
        return (
            <div> Введите город, в котором хотите узнать погоду</div>
        )
    } 

    if (props.failed) {
            return (
                <div> Такого города в нашей базе данных нет :( </div>
            ) 
    }   

    
    if (props.name) {

        if (props.temp > 0) {
            temp = "+" + props.temp
        } else {
            temp = props.temp
        }

        return (
            <>
                <div className="city"> Погода в городе : {props.name}, {props.country} </div>
                <div className="temp">
                    <h1>{temp}° </h1>  {/* ℃ */}
                </div>
                
                <div className="other-weather">
                    <div className="pressure"> 
                        <i className="fas fa-tachometer-alt"></i>
                        {props.pressure} мм. рт. ст.
                    </div>
                    <div className="wind"> 
                        <i className="fas fa-wind"></i>
                        {props.wind} м/с
                    </div>


                    <div 
                    className="humidity" >
                    <i className="fas fa-tint"></i>
                    {props.humidity}%
                </div>
                </div>

                
            </>
        )

    } 


};

export default outputPage;