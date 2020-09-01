import React from 'react'
import { weatherObjekt } from '../api/weatherObjekt'
import styled from 'styled-components'
const StyledActivitiesSection = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: .5rem;

    article {
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
        border-radius: .5rem;
        text-transform: capitalize;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        img {
            border-radius: .5rem .5rem 0 0;
        }
        h2 {
            font-weight: bold;
        }
    }
`

function Activities({ weather }) {
    return (
        <StyledActivitiesSection>
            {weatherObjekt[weather.weather[0].main].activities.map((element, index) => {
                return (
                    <article key={index} >
                        <img src={element.img} alt={element.title} />
                        <div>
                            <h2>{element.title}</h2>
                            <p>{element.location}</p>
                            <p>Pris: {element.price}</p>
                        </div>
                    </article>
                )
            })}
        </StyledActivitiesSection >
    )
}

export default Activities
