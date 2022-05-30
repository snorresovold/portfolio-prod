import React from 'react'
import Navigation from '../components/Navigation'
import ProjectCard from '../components/ProjectCard'
import content from '../content'

function Projects() {
  return (
    <div>
        <Navigation />
        <div className='grid grid-cols-4 gap-4'>
        {content.termin1.prosjekter.map((title, content) => {
            
        })}
        </div>
    </div>
  )
}

export default Projects