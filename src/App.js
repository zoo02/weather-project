import { useEffect,useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton'
import ClipLoader from "react-spinners/ClipLoader";

// 1. 처음 앱이 실행되면 현재 위치 기반의 날씨가 보여진다.
// 2. 날씨 정보에는 도시, 섭씨, 화씨 날씨 상태가 보여진다.
// 3. 5개의 각기 다른 지역 버튼이 되어있다.(1번째는 현재 위치, 2-5는 맘대로)
// 4. 도시 버튼을 클릭할 때마다 해당하는 도시의 날씨 정보를 보여준다.
// 5. 다른 도시 버튼 클릭해서 날씨 정보 보다가 1번째 버튼(현재위치)을 클릭하면
//    다시 현재 위치기반 날씨정보를 보여준다.
// 6. 데이터를 받아오는 동안 로딩 스피너가 보여진다.

// const apiKey = `c07ca931cf96f8537a0ab8a37d9a2a8e`


function App() {

    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState("")
    const [loading, setLoading] = useState(false)
    const cities = ["Seoul","New York","London", "Paris"]
    const getCurrentLocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            let latitude = position.coords.latitude
            let longitude = position.coords.longitude
            getWeatherByCurrentLocation(latitude,longitude)
        })
    }
    
    const getWeatherByCurrentLocation = async (lat, lon) => {
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c07ca931cf96f8537a0ab8a37d9a2a8e&units=metric`
        setLoading(true)
        let response = await fetch(url)
        let data = await response.json()
        setWeather(data)
        setLoading(false)
    }

    const getWeatherByCity = async () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c07ca931cf96f8537a0ab8a37d9a2a8e&units=metric`
        setLoading(true)
        let response = await fetch(url)
        let data = await response.json()
        setWeather(data)
        setLoading(false)
    }


    useEffect(()=>{
        city == ""? getCurrentLocation() : getWeatherByCity()
    },[city])

  return (
    <div>
        {loading ? (
        <div className='container'>
            <ClipLoader color="#71aaff" loading={loading} size={100} />
            </div>) :
         (<div className='container'>
         <WeatherBox weather={weather}/>
         <WeatherButton cities={cities} setCity={setCity} />
     </div>)}
    </div>
  );
  }

export default App;
