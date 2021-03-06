import React from 'react'
import content from '../content'
import Navigation from './Navigation'

function ProjectDetails6() {
  return (
    <div>
        <Navigation />

        <section>
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <div class="aspect-w-1 aspect-h-1">
                <img
                    class="object-cover rounded-xl"
                    src="/assets/proj6-1.jpeg"
                />
                </div>

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj6-2.jpeg"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj6-3.jpeg"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj6-4.jpeg"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj6-5.jpeg"
                    />
                </div>
                </div>
            </div>

            <div class="sticky top-0">
                <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Utplassering hos Bouvet
                    </h1>
                </div>

                </div>

                    <div>
                    <div class="prose max-w-none group-open:hidden">
                        <p>
                            For den siste oppgav?? mi i ??r s?? blei eg utplassert hos Bouvet for ?? l??re litt om korleis arbeidslivet faktisk er
                        </p>
                    </div>

                    </div>

                <div class="pb-6 prose max-w-none">
                    <p>
                        Hos Bouvet s?? blei eg satt p?? HTMS prosjektet der me jobber med ?? tracke folk og kj??ret??y for ?? unng?? ulykker og skader
                    </p>

                    <p>
                        M??ten det funker p?? er at det er nokon locators i taket som registrerer trackers som personer og kj??ret??y denne dataen kan videre bli sendt til ein server
                    </p>
                    <p>
                        min jobb var ?? sette opp et testing milj?? p?? kontoret til Bouvet, som kan brukes til ?? teste locators og trackere
                    </p>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProjectDetails6