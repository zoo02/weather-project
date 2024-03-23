import React from "react"

const WeatherBox = ({ weather }) => {
	return (
		<div>
			<div className="weatherBox">
				<div>{weather?.name}</div>
				<div>{Math.floor(weather?.main.temp)}°C / {Math.floor(weather?.main.temp * 1.8 + 32)}°F</div>
				<div>{weather?.weather[0].description}</div>
			</div>
		</div>
	)
}

export default WeatherBox
