import React from 'react'
import { weatherObjekt } from '../api/weatherObjekt'
import styled from 'styled-components'
const StyledSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    p:nth-child(2) {
        justify-self: center;
        font-size: 2rem;
    }
    p:nth-child(3) {
        justify-self: end;
    }
`





function WeatherContainer({ weather }) {
    return (
        <StyledSection>
            <p>{weather.name}<sup>, {weather.sys.country}</sup></p>
            <p>{weatherObjekt[weather.weather[0].main].icon}</p>
            <p>{Math.round(weather.main.temp)}<sup>&deg;</sup> </p>
        </StyledSection>
    )
}

export default WeatherContainer
