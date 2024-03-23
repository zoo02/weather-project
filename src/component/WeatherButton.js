import React from 'react'
import { Button } from 'react-bootstrap';


const WeatherButton = ({cities, setCity}) => { 
    
  return (
    <div className='locationButton'> 
      <Button variant="light">현재위치</Button>
      {cities.map((item, index)=>(
      <Button variant='secondary' key={index} onClick={()=>setCity(item)}>{item}</Button>
      ))}

    </div>
  )
}

export default WeatherButton