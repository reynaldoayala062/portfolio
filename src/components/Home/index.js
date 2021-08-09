import { React, useState } from 'react'
import { Button } from '../ButtonElements'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HomeElements'
import Video from '../../videos/video.mp4'

const Home = () => {
    const [hover, setHover] = useState(false)
 
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Welcome to my world </HeroH1>
                <HeroP> Let me show you around and give you a tour of the place </HeroP>
                <HeroBtnWrapper>
                    <Button to="services" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Home
