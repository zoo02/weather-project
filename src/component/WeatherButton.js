import React, { useState } from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities, selectedCity,cityChange}) => { 
  return (
    <div className='locationButton'> 
      <Button variant={`${selectedCity == null ? "secondary" : "light"}`} onClick={()=> cityChange("current")}>현재위치</Button>
      {cities.map((city)=>(
      <Button variant={`${selectedCity == city ? "secondary" : "light"}`} onClick={()=>cityChange(city)}>{city}</Button>
      ))}

    </div>
  )
}

export default WeatherButton