import React from 'react'
import content from '../content'
import Navigation from './Navigation'

function ProjectDetails5() {
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
                    src="/assets/proj5-1.png"
                />
                </div>

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj5-2.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj5-3.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj5-4.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj5-5.png"
                    />
                </div>
                </div>
            </div>

            <div class="sticky top-0">
                <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Cybersikkerhet og penetesting
                    </h1>
                </div>

                </div>

                    <div>
                    <div class="prose max-w-none group-open:hidden">
                        <p>
                            for cybersikkerhet og penetesting prosjektet mitt så bestemte eg meg for å først laste ner Kali på ein raspberry pi så eg kunne bruke nokon verktøy som kommer med Kali
                        </p>
                    </div>

                    </div>

                <div class="pb-6 prose max-w-none">
                    <p>
                        Eg fokuserte for det meste på nettsider og korleis man kan hacke/beskytte dei, eg fekk i oppdrag å hacke iktfag.com, eg klarte det ikkje men kom langt å lærte møkje, eg har lert meg hacking metoder på nettet som sql injections, xss, hvordan man "walker" ei nettside og masse Linux
                    </p>

                    <p>
                        eg har lert meg korleis eg bruker verktøy som wp-scan fuzzer sqlinject og reverse shell
                    </p>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProjectDetails5