import React from 'react'
import HexGallery from '../customs/HexGallery'

export default function PreviewSection2() {
    return (
        <section id="references" className="w-full bg-deev bg-white font-space-grotesk relative py-12">
            <div className="z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center ">
                <div className="absolute inset-0 bg-graph-paper opacity-80"/>
                {/* Left - Hex Gallery */}
                <div className="relative flex justify-center items-center w-full lg:mb-0 mb-16 lg:w-[500px] ">
                        <HexGallery />
                </div>

                {/* Right - Text */}
               <div className="bg-deev flex flex-col space-y-8">
                    {/* Title + Subtitle row */}
                    <div className="flex relative flex-row bg-deev space-x-6">
                        <h2 className="text-6xl font-bold text-blue-600 uppercase">KVALITA</h2>
                        <div className="w-[1px] my-[6px] bg-gray-400 ">

                        </div>
                        <div className="flex flex-col justify-center ">
                            <span className="text-xl text-gray-900">Prvotřídni technologie</span>
                            <span className="text-xl text-gray-900">Certifikace</span>

                        </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed flex flex-col space-y-4">
                        <p>
                            Naše práce hovoří sama za sebe. Realizovali jsme desítky zakázek pro české i zahraniční klienty, vždy s důrazem na preciznost a spolehlivost.
                        </p>
                        <p>
                            Každý projekt je pro nás příležitostí potvrdit naši odbornost a budovat dlouhodobá partnerství. Důvěra zákazníků je pro nás nejvyšší hodnotou.
                        </p>
                    </div>

                    {/*                     <p className="text-gray-700 leading-relaxed">
                        Jsme česká společnost specializující se na precizní CNC obrábění.
                        Využíváme moderní stroje a zkušenosti našeho týmu k výrobě
                        kvalitních dílů podle požadavků zákazníků.
                    </p> */}
                </div>
            </div>
        </section>
    )
}
