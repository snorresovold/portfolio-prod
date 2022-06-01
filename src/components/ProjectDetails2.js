import React from 'react'
import content from '../content'
import Navigation from './Navigation'

function ProjectDetails2() {
  return (
    <div>
        <Navigation />

        <section>
        <div class="relative max-w-screen-xl px-4 py-8 mx-auto">
            <div class="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                <div class="grid grid-cols-1 gap-4 lg:mt-4">

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj2-1.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj2-2.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj2-3.png"
                    />
                </div>

                <div class="aspect-w-1 aspect-h-1">
                    <img
                    class="object-cover rounded-xl"
                    src="/assets/proj2-4.png"
                    />
                </div>
                </div>
            </div>

            <div class="sticky top-0">
                <div class="flex justify-between mt-8">
                <div class="max-w-[35ch]">
                    <h1 class="text-2xl font-bold">
                        Premiere Pro video redigering
                    </h1>
                </div>

                </div>

                    <div>
                    <div class="prose max-w-none group-open:hidden">
                        <p>
                            Først så lagte eg ein portal som skulle ligne på portalene fra Doctor Strange
                        </p>
                    </div>

                    </div>

                <div class="pb-6 prose max-w-none">
                    <p>
                        Så ein "Hudyoken" effekt der man skyter ein laser eller flammekule ut av nevene
                    </p>

                    <p>
                        Så en effekt som gjer at det ser ut som at det kommer flammer fra fingeren din
                    </p>
                    <p>
                        og til slutt ein green screen effekt der stolen forsvinner og det ser ut som at eg svever i luften
                    </p>
                </div>

            </div>
            </div>
        </div>
        </section>
    </div>
  )
}

export default ProjectDetails2