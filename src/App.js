import React, {Component} from "react";

import Header from "./component/header";
import InputPage from "./component/inputPage";
import OutputPage from "./component/outputPage";

// import CityItem from './component/cityItem'

import "./component/component.css"


const apiKey = "64c9513ef4af6bd76c8f5d0a0f7e7db4"

export default class App extends Component {
    state = {
        name: false,
        temp: false,
        pressure: false,
        error: true,
        wind: false,
        failed: false,
        humidity: false,
        loading: false,
        country: false
    };
    
    getWeather = async (e) => {

        e.preventDefault();
        let city = e.target.elements.city.value;
        
        this.setState({
            loading: true
        });

        const apiUrl = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
        const data =  await apiUrl.json();

        if (await data.cod === '400') {
            this.setState({
                error: false,
                failed: true,
                loading: false
            })
        }

        if (await data.cod === '404') {
            this.setState({
                error: false,
                failed: true,
                loading: false
            })
        }  

        if (await data.name) {
                this.setState({
                    name: data.name,
                    temp: ( ((data.main.temp)-32) * (5/9)).toFixed(1),
                    pressure: ((data.main.pressure)/(1.333)).toFixed(1),
                    wind: data.wind.speed,
                    error: false,
                    failed: false,
                    humidity: data.main.humidity,
                    loading: false,
                    country: data.sys.country
            })
        } else if (!city) {
                this.setState({
                    error: true,
                    failed: false,
                    loading: false
            })
        }

    };

    upateState = async (e) => {
        let city = e.target.innerText
        
        this.setState({
            loading: true
        });
    
        const apiUrl = await
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`);
        const data =  await apiUrl.json();

        if (await data.cod === '400') {
 
            this.setState({
                error: false,
                failed: true,
                loading: false
            })
        }

        if (await data.cod === '404') {
            this.setState({
                error: false,
                failed: true,
                loading: false
            })
        }  

        if (city) {
                this.setState({
                    name: city,
                    temp: ( ((data.main.temp)-32) * (5/9)).toFixed(1),
                    pressure: ((data.main.pressure)/(1.333)).toFixed(1),
                    wind: data.wind.speed,
                    error: false,
                    failed: false,
                    humidity: data.main.humidity,
                    loading: false,
                    country: data.sys.country
            })

        }  

        if (!city) {
                this.setState({
                    error: true,
                    failed: false,
                    loading: false
            })
            console.log(city)
        }

    };

    render() {
        const {name, temp, pressure, wind, error, failed, humidity, loading, country} = this.state

        return (
            <> 

                <div className="app-container">

                    <div className="app">
                    <Header />
                        <div className="container">
                            <OutputPage 
                                name={name}
                                temp={temp}
                                pressure={pressure}
                                error={error}
                                failed={failed}
                                wind={wind}
                                humidity={humidity}
                                loading={loading}
                                country={country}
                            />
                        </div>
                        <InputPage weatherMethod={this.getWeather}/>
                        <div className="cityContainer"> 
                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> Moscow </div>
                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> London </div>
                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> Paris </div>
                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> Kyiv </div>

                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> New York </div>
                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> Dubai </div>

                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> Anus </div>
                            <div className="cityItem" onClick={(e)=>{this.upateState(e)}}> Niger </div>
                        </div>

                    </div>  

                </div>

            </>
        )
    }
};