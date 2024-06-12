import { useState } from 'react'
import {
  WeatherBox,
  Background,
  Header,
  Title,
  SearchBox,
  BtnSearch,
  InputBox,
  WeatherInfoBox,
  Temperatur,
  CityName,
  ContentBox,
  IconBox,
  ErrooBox,
  TitleError,
  ErrorMessage
} from './styled'
import bgFote from 'assets/weather.jpg'

const apiKey = '9b010adeeda6ca00ec5e5e8f19a27c5d'

function Weather() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState<any>(undefined)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  //   console.log(weatherData)

  const getWeather = async () => {
    if (!city) {
      alert('Введите название города')
      return
    }

    setLoading(true)
    setError('')
    setWeatherData(null)

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}qw`
      )
      if (!response.ok) {
        throw new Error('Не удалось получить данные о погоде')
      }
      const result = await response.json()
      const tempCelsius = result.main.temp - 273.15

      setWeatherData({
        temp: tempCelsius.toFixed(0),
        name: result.name,
        icon: result.weather[0].icon,
      })
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('Неизвестная ошибка')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getWeather()
    }
  }

  return (
    <Background image={bgFote}>
      <Header>
        <Title>Weather App</Title>
      </Header>
      <WeatherBox>
        <SearchBox>
          <InputBox
            type="text"
            placeholder="Введите название города"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <BtnSearch onClick={getWeather}>Получить погоду</BtnSearch>
        </SearchBox>
        {loading && <div>Загрузка.....</div>}

        {error && <ErrooBox><TitleError>API Error</TitleError><ErrorMessage>{error}</ErrorMessage></ErrooBox>}

        {weatherData && (
          <WeatherInfoBox>
            <ContentBox>
              <Temperatur>{weatherData.temp}°C</Temperatur>
              <CityName>{weatherData.name}</CityName>
            </ContentBox>
            <IconBox
              src={`http://openweathermap.org/img/w/${weatherData.icon}.png`}
              alt="weather icon"
            />
          </WeatherInfoBox>
        )}
      </WeatherBox>
    </Background>
  )
}

export default Weather
