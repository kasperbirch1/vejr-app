import React from 'react'
import { weatherObjekt } from '../api/weatherObjekt'
// import { FaPlay } from 'react-icons/fa';
import styled from 'styled-components'
const StyledMusicSection = styled.section`
    display: grid;
    grid-gap: .5rem;
   article {
    display: flex;
    align-items: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    img {
        --img-size: 4rem;
        width: var(--img-size);
        height: var(--img-size);
        margin-right: .5rem;
        border-radius: .5rem 0 0 .5rem ;
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
                    <article className="box-shadow-border-radius" key={index} style={{ backgroundImage: `url(${element.img})` }} >
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