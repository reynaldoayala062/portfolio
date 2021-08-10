import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-6.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id="skills">
            <ServicesH1>Front End Stack</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>HTML & CSS</ServicesH2>
                    <ServicesP>Creating unique ux and ui designs that ties everthing togehter</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>React.js</ServicesH2>
                    <ServicesP>Building clean and reusable code for clients and team members</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>JavaScript</ServicesH2>
                    <ServicesP>With great beauty comes great brains</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
            
        </ServicesContainer >
    )
}

export default Services
