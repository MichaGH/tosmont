"use client";

import TechnicalLimits from "@/components/sluzby1/TechnicalLimits";

export default function CNCPage() {
	const capabilities = [
		{
			title: "Soustružení",
			description:
				"Precizní soustružení z tyčí, přířezů i masivních bloků s tolerancí ±0,01 mm. Ideální pro dílce s přesnými tvary a hladkým povrchem.",
			icon: "/icons/services/service2.svg",
		},
		{
			title: "Frézování",
			description:
				"Horizontální i 4osé CNC frézky pro složité tvary a detaily. Možnost práce s velkými dílci i jemnými komponentami.",
			icon: "/icons/services/service2.svg",
		},
		{
			title: "Drátové řezání",
			description:
				"Přesné dělení jemných a složitých dílců drátovou technologií. Ideální pro náročné tvary a materiály od oceli po titan.",
			icon: "/icons/services/service2.svg",
		},
	];

	const images = [
		"/images/cnc/cnc1.webp",
		"/images/cnc/cnc2.webp",
		"/images/cnc/cnc3.webp",
	];

    const limits = [
        {
            title: "Maximální podélný posuv",
            value: "2000mm",
            icon: "/images/icons"
        },
        {
            title: "Maximální příčný posuv",
            value: "800 mm"
        },
        {
            title: "Max. svislý posun vřeteníku",
            value: "560 mm"
        },
        {
            title: "Nosnost strojů",
            value: "2 t"
        },
    ]

	return (
		<div className="sluzby-wrapper">
			{/* Page title */}
			<section className=" sluzby-section">
				<h2 className=" sluzby-title">
					CNC Obrábění – Precizní a flexibilní
				</h2>
				<p className="sluzby-text">
					Naše CNC služby zahrnují soustružení, frézování a drátové řezání. Díky
					moderním strojům a zkušenému týmu dokážeme zpracovat složité tvary,
					masivní dílce i jemné detaily s maximální přesností. Každý projekt je
					individuálně naplánován a kontrolován.
				</p>
			</section>
            <TechnicalLimits limits={limits} />
			
			{/* Capabilities */}
			<section className="max-w-5xl mx-auto space-y-12">
				{capabilities.map((cap, i) => (
					<div
						key={cap.title}
						className={`flex flex-col md:flex-row items-center md:items-start gap-6 `}
					>
						<img
							src={cap.icon}
							alt={cap.title}
							className="w-16 h-16 md:w-20 md:h-20 object-contain"
						/>
						<div className="flex-1">
							<h3 className="text-2xl font-bold text-gray-900 mb-2">
								{cap.title}
							</h3>
							<div className="h-1 w-16 bg-blue-600 mb-4"></div>
							<p className="text-gray-700 leading-relaxed">{cap.description}</p>
						</div>
					</div>
				))}
			</section>

			{/* Pictures */}
			<section className="sluzby-section">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`CNC obrábění ${i + 1}`}
                            className="w-full h-64 md:h-56 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform"
                        />
                    ))}
                </div>
            </section>

			{/* Upper Limits / Highlights */}

			{/* Optional “wow” section */}
			<section className="sluzby-section">
				<h3 className=" sluzby-subtitle">
					Specializované projekty
				</h3>
				<p className="sluzby-text">
					Obrábíme složité komponenty pro průmyslové stroje, zdravotnické
					přístroje i letecký průmysl. Naše know-how umožňuje výrobu dílců s
					náročnými tolerancemi a unikátními geometrickými tvary.
				</p>
			</section>
		</div>
	);
}
