import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities}) => {
    console.log(cities)
  return (
    <div className='locationButton'> 
      <Button variant="light">현재위치</Button>
      {cities.map((item)=>(
      <Button variant='secondary'>{item}</Button>
      ))}

    </div>
  )
}

export default WeatherButton