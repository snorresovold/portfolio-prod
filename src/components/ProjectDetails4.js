import React from 'react'
import content from '../content'
import Navigation from './Navigation'

function ProjectDetails4() {
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
                    src="/assets/proj4-1.png"
                />
                </div>

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj4-2.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj4-3.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj4-4.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj4-5.png"
                    />
                </div>
                </div>
            </div>

            <div class="sticky top-0">
                <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Pokemon klone i python
                    </h1>
                </div>

                </div>

                    <div>
                    <div class="prose max-w-none group-open:hidden">
                        <p>
                            For dette prosjektet s?? lagte eg f??rst eit map i ei txt fil, s?? rendere eg kvar bokstav i mappet som et bildet, G=grass, D=dirt, W=water, disse blokkene har forskjellige verdier. Du kan ikkje bevege deg gjennom Water, og hvis du er i Dirt s?? har du en sjangse for ?? treffe ein pokemon
                        </p>
                    </div>

                    </div>

                <div class="pb-6 prose max-w-none">
                    <p>
                        Pokemonene er lagret i JSON og har selvsagt mange forskjellige verdier som gjer kvar pokemon unik, n??r en ny pokemon kommer s?? blir den lagt som et Python objekt med forskjellige verdier
                    </p>

                    <p>
                        Siden eg ikkje hadde masse tid p?? dette prosjektet s?? er all combat i konsollen 
                    </p>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProjectDetails4