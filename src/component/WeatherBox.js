import React from "react";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const WeatherBox = ({ weather }) => {
    return (
        <div>
            <div className="weatherBox">
                <div>
                    <OverlayTrigger overlay={<Tooltip>현재 위치</Tooltip>}>
                        <a>📍 </a>
                    </OverlayTrigger>
                    {weather?.name || "날씨를 가져오는 데 실패하였습니다."}
                </div>
                <div>
                    <OverlayTrigger overlay={<Tooltip>현재 기온</Tooltip>}>
                        <a>🌡️ </a>
                    </OverlayTrigger>
                    {weather?.main?.temp !== undefined ? `${Math.floor(weather.main.temp)}°C` : "날씨 정보 없음"}
                    <OverlayTrigger overlay={<Tooltip>습도</Tooltip>}>
                        <a> 💦 </a>
                    </OverlayTrigger>
                    {weather?.main?.humidity !== undefined ? `${weather.main.humidity}%` : "날씨 정보 없음"}
                </div>
                <div>
                    <OverlayTrigger overlay={<Tooltip>날씨 정보</Tooltip>}>
                        <a>📌 </a>
                    </OverlayTrigger>
                    {weather && weather.weather && weather.weather[0]?.description}
                </div>
            </div>
        </div>
    )
}

export default WeatherBox;
