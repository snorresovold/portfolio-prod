import React from 'react'
import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'
import content from '../content'

function Projects() {
  return (
    <div>
        <Navigation />
        <p className=' text-3xl font-bold text-center mb-4'>Termin 1</p>
        <p className=' text-xl font-bold text-center mb-4'>Dette er prosjekter som eg har hatt i første termin på haugaland vgs</p>

        <div className='flex flex-wrap justify-center items-center' >
        {content.termin1.prosjekter.map((input) => {
            return (
                <ProjectCard title={input.title} content={input.content} />
            )
        })}
        </div>        
        <p className=' text-3xl font-bold text-center mb-4'>Termin 2</p>
        <p className=' text-xl font-bold text-center mb-4'>Dette er prosjekter som eg har hatt i andre termin på haugaland vgs</p>

        <div className='flex flex-wrap justify-center items-center' >
        {content.termin2.prosjekter.map((input) => {
            return (
                <ProjectCard title={input.title} content={input.content} />
            )
        })}
        </div>
        

    </div>
  )
}

export default Projects