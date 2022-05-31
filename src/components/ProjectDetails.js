import React from 'react'
import { useLocation } from 'react-router'

function ProjectDetails() {
    const sampleLocation = useLocation()
    return (
        <div>
            {sampleLocation}
        </div>
    )
}

export default ProjectDetails