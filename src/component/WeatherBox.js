import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const WeatherBox = ({ weather }) => {
    return (
        <div>
            <div className="weatherBox">
                <div>
                    <OverlayTrigger overlay={<Tooltip>현재 위치</Tooltip>}>
                    <a>📍 </a></OverlayTrigger>
                     {weather?.name}
                </div>
                <div>
                    <OverlayTrigger overlay={<Tooltip>현재 기온</Tooltip>}>
                        <a>🌡️ </a></OverlayTrigger>
                     {Math.floor(weather?.main.temp)}°C / 
                    <OverlayTrigger overlay={<Tooltip>습도</Tooltip>}>
                        <a> 💦 </a></OverlayTrigger>
                     {weather?.main.humidity}%
                </div>
                <div>
                    <OverlayTrigger overlay={<Tooltip>날씨 정보</Tooltip>}>
                    <a>📌 </a></OverlayTrigger>
                     {weather?.weather[0].description}
                </div>
            </div>
        </div>
    )
}

export default WeatherBox;
