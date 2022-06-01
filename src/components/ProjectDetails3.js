import React from 'react'
import content from '../content'
import Navigation from './Navigation'

function ProjectDetails3() {
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
                    src="/assets/proj3-4.png"
                />
                </div>

                <div class="grid grid-cols-2 gap-4 lg:mt-4">
                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj3-1.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj3-5.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj3-3.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj3-2.png"
                    />
                </div>
                </div>
            </div>

            <div class="sticky top-0">
                <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Drone med bildegjenkjenning
                    </h1>
                </div>

                </div>

                    <div>
                    <div class="prose max-w-none group-open:hidden">
                        <p>
                            Først så lerte eg meg å få tello dronen til å fly
                        </p>
                    </div>

                    </div>

                <div class="pb-6 prose max-w-none">
                    <p>
                        Etter dronen flydde så fikk eg dronen til å ta et bilde og sende bildet til ein klient som kan processe det
                    </p>

                    <p>
                        når bildet blir processed så bruker klienten OpenCV2 og python til å leite etter piler i bildet
                    </p>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProjectDetails3