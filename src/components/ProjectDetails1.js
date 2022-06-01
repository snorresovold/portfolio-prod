import React from 'react'
import content from '../content'
import Navigation from './Navigation'

function ProjectDetails1() {
  return (
    <div>
        <Navigation />

        <section>
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/DjxjMyTgxzg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div class="sticky top-0">
                <div class="flex justify-between mt-8">

                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Chatbrett med django
                    </h1>
                </div>

                </div>

                    <div>
                    <div class="prose max-w-none group-open:hidden">
                        <p>
                            Et sosialt medie i Django med brukere og custom bruker authentication
                        </p>
                    </div>

                    </div>

                <div class="pb-6 prose max-w-none">
                    <p>
                        Alt er lagt med standard django og ingen tredjepartis bibliotek
                    </p>

                    <p>
                        Har brukt Djagno sin ORM istedet for REST-API en deres
                    </p>
                    <p>
                        Har brukt Django sin Standard Django-HTML og standard Css for frontend
                    </p>
                </div>
                <p>Link til github prosjekt</p><a href="https://github.com/snorresovold/django-chatboard">https://github.com/snorresovold/django-chatboard</a>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProjectDetails1