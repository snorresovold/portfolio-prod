import React from 'react'

function ProjectCard({id, title, content}) {
  return (
        <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 m-4 dark:border-gray-700">
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{content}</p>
            </div>
        </div>
  )
}

export default ProjectCard