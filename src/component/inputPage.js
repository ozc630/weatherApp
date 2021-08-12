import React from "react";

const inputPage = (props) => {
    return (
        <form onSubmit={props.weatherMethod}>
            <input 
                type="text"
                name="city"
                placeholder="Город"/>
            <button > Получить погоду </button>
        </form>
    )
};

export default inputPage;