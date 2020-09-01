import React from 'react'
import { weatherObjekt } from '../api/weatherObjekt'
import styled from 'styled-components'
const StyledActivitiesSection = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: .5rem;

    article {
        border-radius: .5rem;
        position: relative;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        text-transform: capitalize;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        h2 {
            font-weight: bold;
        }

        & > * {
            z-index: 5;
        }

        ::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(250,250,250, .25);
        }
    }
`

function Activities({ weather }) {
    return (
        <StyledActivitiesSection>
            {weatherObjekt[weather.weather[0].main].activities.map((element, index) => {
                return (
                    <article key={index} style={{ backgroundImage: `url(${element.img})` }} >
                        <h2>{element.title}</h2>
                        <p>{element.location}</p>
                        <p>Pris: {element.price}</p>
                    </article>
                )
            })}
        </StyledActivitiesSection >
    )
}

export default Activities
