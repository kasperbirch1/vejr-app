import React from 'react'
import { weatherObjekt } from '../api/weatherObjekt'
// import { FaPlay } from 'react-icons/fa';
import styled from 'styled-components'
const StyledMusicSection = styled.section`
   
   article {
    display: flex;
    align-items: center;

    img {
        --img-size: 50px;
        width: var(--img-size);
        height: var(--img-size);
        margin-right: .5rem;
    }
    div {
        h2 {
            font-weight: bold;
        }
    }

   }
`

const Music = ({ weather }) => {
    return (
        <StyledMusicSection>
            {weatherObjekt[weather.weather[0].main].music.map((element, index) => {
                return (
                    <article key={index} style={{ backgroundImage: `url(${element.img})` }} >
                        <img src={element.coverImg} alt={element.songTitle} />
                        <div>
                            <h2>{element.songTitle}</h2>
                            <p>{element.artist}</p>
                        </div>
                    </article>
                )
            })}
        </StyledMusicSection>
    )
}

export default Music