import React, { useState, useEffect } from 'react';
import SEO from '../components/seo'
import { fetchWeather } from '../api/fetchWeather';
import WeatherContainer from '../components/WeatherContainer'
import Activities from '../components/Activities'
import Music from '../components/Music'
import styled from 'styled-components'
const StyledSection = styled.section`
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
`

const IndexPage = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        const fetchGeoLokation = async () => {
          const data = await fetchWeather(null, position.coords.latitude, position.coords.longitude);
          setWeather(data);
        }
        fetchGeoLokation()
      });

    }
  }, [])

  const search = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      console.log("Weather", data);
    }
  }

  return (
    <>
      <SEO title="Home" />
      <StyledSection>
        <input className="searchbar" type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
        {weather.main && <WeatherContainer weather={weather} />}
        {weather.main && <Activities weather={weather} />}
        {weather.main && <Music weather={weather} />}
      </StyledSection >
    </>
  )
}

export default IndexPage
