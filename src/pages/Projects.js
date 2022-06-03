import React from 'react'
import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'
import content from '../content'

function Projects() {
  return (
    <div>
        <Navigation />

        <div className='flex flex-wrap justify-center items-center' >
        {content.termin1.prosjekter.map((input) => {
            return (
                <ProjectCard title={input.title} content={input.content} id={input.id}/>
            )
        })}
        </div>        

        <div className='flex flex-wrap justify-center items-center' >
        {content.termin2.prosjekter.map((input) => {
            const id = input.id //real quick fix because i had to
            return (
                <ProjectCard title={input.title} content={input.content} id={id}/>
            )
        })}
        </div>
    </div>
  )
}

export default Projects