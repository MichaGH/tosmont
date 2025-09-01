import React from 'react'
import HeroButtonOutlined from '../customs/HeroButtonOutlined'
import HeroButtonFilled from '../customs/HeroButtonFilled'

const buttonSizings = "px-6 py-2 text-xs lg:text-base lg:px-8 lg:py-2 font-semibold"

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center bg-deev">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/videos/hero_cuts/2.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-6 font-space-grotesk flex flex-col space-y-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Precizní CNC výroba
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                        Spolehlivé řešení pro každý projekt
                    </p>
                </div>
                <div className="flex flex-row space-x-4 justify-center">
                    <HeroButtonOutlined text="O Nás" href="/o-nas" className={buttonSizings + " border border-blue-600 text-white"}/>
                    <HeroButtonFilled text="Služby" href="/sluzby1" className={buttonSizings + "  border-blue-600 hover:border-white bg-blue-700 hover:bg-white hover:text-black text-white"}/>
                </div>
            </div>
        </section>
    )
}
