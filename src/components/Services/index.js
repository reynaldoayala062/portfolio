import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-6.svg'
import Icon4 from '../../images/svg-9.svg'
import Icon5 from '../../images/svg-10.svg'
import Icon6 from '../../images/svg-11.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'


const Services = () => {
    return (
        <ServicesContainer id="skills">
            <ServicesH1>Skills</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>HTML & CSS</ServicesH2>
                    <ServicesP>Creating unique ux and ui designs that ties everthing togehter</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>React.js</ServicesH2>
                    <ServicesP>Knowledgable in styled components, redux, and more</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>JavaScript</ServicesH2>
                    <ServicesP>Building clean and reusable code for clients and team members</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon4}/>
                    <ServicesH2>Ruby on Rails</ServicesH2>
                    <ServicesP>Skilled in CRUD, Restful API's, and MVC method</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon5}/>
                    <ServicesH2>Cloud Storage</ServicesH2>
                    <ServicesP>Experince working with Heroku, AWS Amplify, AWS S3</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon6}/>
                    <ServicesH2>Mobile Development</ServicesH2>
                    <ServicesP>Using media screen to make web apps mobile friendly</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer >
    )
}

export default Services
