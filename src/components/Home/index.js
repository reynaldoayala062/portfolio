import { React, useState } from 'react'
import { ButtonLink } from '../ButtonElements'
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
                <HeroH1> Howdy, I'm Reynaldo Ayala</HeroH1>
                <HeroP> I'm a frontend developer with passion to create unique UX/UI design </HeroP>
                <HeroBtnWrapper>
                    <ButtonLink to="skills" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get In Touch {hover ? <ArrowForward /> : <ArrowRight/> }
                    </ButtonLink>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Home
