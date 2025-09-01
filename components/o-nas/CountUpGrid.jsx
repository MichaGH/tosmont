"use client"
import React from 'react'
import CountUp from 'react-countup'

export default function CountUpGrid({stats}) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 bg-deev ">
            {stats.map((stat, i) => (
                <div key={i} className="flex flex-col text-center py-8 border border-gray-200">
                    <div className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight ">
                        <CountUp start={stat.start} end={stat.end} suffix={stat.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
                </div>
            ))}
        </div>
    )
}


