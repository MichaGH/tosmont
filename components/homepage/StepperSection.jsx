import Image from 'next/image'
import React from 'react'

const stepsContent = [
    {
        title: "Zadání & konzultace",
        subtitle: "Společně si ujasníme požadavky, technické detaily a cíle projektu."
    },
    {
        title: "Výroba & kontrola",
        subtitle: "Precizní zpracování na CNC a klasických strojích s důkladnou kontrolou kvality."
    },
    {
        title: "Dodání & podpora",
        subtitle: "Hotový výrobek doručíme včas a jsme připraveni na případné úpravy či servis.."
    }
]

export default function StepperSection() {
    return (
        <section id="works" className="relative bg-neutral-900 py-10 sm:py-16 lg:py-24 font-space-grotesk">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl text-white uppercase font-extrabold mx-auto md:text-6xl lg:text-5xl">Jak spolupráce probíha?</h2>

                </div>
                <div className="relative mt-12 lg:mt-20">
                    <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <Image alt="" width={1000} height={500} className="w-full" src="/images/curved-dotted-line.svg" />
                    </div>
                    <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">

                        {stepsContent.map((content, i) => (
                            <div key={i}>
                                <div
                                    className="flex items-center justify-center w-16 h-16 mx-auto bg-blue-600 border-2 border-blue-600 rounded-full shadow">
                                    <span className="text-xl font-semibold  text-white">{i+1}</span>
                                </div>
                                <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">{content.title}</h3>
                                <p className="mt-4 text-base text-gray-400 md:text-lg">
                                    {content.subtitle}
                                </p>
                            </div>
/*                             <div key={i}>
                                <div
                                    className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                                    <span className="text-xl font-semibold text-gray-700">{i+1}</span>
                                </div>
                                <h3 className="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">{content.title}</h3>
                                <p className="mt-4 text-base text-gray-400 md:text-lg">
                                    {content.subtitle}
                                </p>
                            </div> */
                        ))}

                    </div>
                </div>
            </div>
            <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
                style={{
                    background: "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)"
                }}>
            </div>
        </section>
    )
}
