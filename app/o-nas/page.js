// app/o-nas/page.jsx
import HeroBanner from "@/components/HeroBanner";
import Certificates from "@/components/o-nas/Certificates";
import CountUpGrid from "@/components/o-nas/CountUpGrid";
import MissionValues from "@/components/o-nas/MissionValues";
import Timeline from "@/components/o-nas/Timeline";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function Page() {
	const stats = [
		{
			label: "Zákazek Ročne",
			start: 0,
			end: 1200,
			suffix: "+",
		},
		{
			label: "Zaměstnancu",
			start: 0,
			end: 25,
			suffix: "",
		},
		{
			label: "Let na trhu",
			start: 0,
			end: 9,
			suffix: "+",
		},
		{
			label: "Krajinách",
			start: 0,
			end: 6,
			suffix: "",
		},
	];

	const certs = [
		{ src: "/images/iso9001.png", alt: "ISO9001" },
		{ src: "/images/certs/cert2.png", alt: "ISO certifikát 2" },
		{ src: "/images/certs/cert3.png", alt: "Certifikát výroby" },
	];

	const milestones = [
		{
			year: "2016",
			title: "Založení firmy",
			text: "Rodinná firma založena s cílem poskytovat kvalitní CNC služby.",
		},
		{
			year: "2019",
			title: "První exporty",
			text: "Rozšíření na německý trh, nové dlouhodobé smlouvy.",
		},
		{
			year: "2022",
			title: "Nové výrobní prostory",
			text: "Přesun do moderních hal v Jindřichově Hradci.",
		},
		{
			year: "2024",
			title: "Modernizace parku",
			text: "Investice do 5-osých center a automatizace.",
		},
	];

	const values = [
		{
			title: "Přesnost",
			text: "Důraz na tolerance a opakovatelnost. Kontrola každé série dle výkresu.",
		},
		{
			title: "Spolehlivost",
			text: "Dlouhodobé vztahy se zákazníky a dodržování termínů.",
		},
		{
			title: "Flexibilita",
			text: "Od jednoho kusu po sériovou výrobu. Rychlé přenastavení a optimální plánování.",
		},
	];

	return (
		<>
			<HeroBanner
				title="O nás"
				bgImage="/images/cnc/cnc3.webp"
				breadcrumbs={[
					{ label: "Domů", href: "/" },
					{ label: "O nás", href: "/o-nas" },
				]}
			/>

			{/* Intro */}
			<section className="mt-12 lg:mt-20 px-4 lg:px-8 xl:px-0 grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 gap-8 items-start mb-14 font-space-grotesk ">
				<div className="">
					<h2 className="text-6xl font-bold text-blue-600 uppercase mb-8">
						Naše Firma
					</h2>
					<p className="text-gray-700 text-lg leading-relaxed mb-4">
						Jsme rodinná strojírenská firma specializovaná na precizní CNC
						obrábění. Od konceptu a prototypu po sériovou výrobu — poskytujeme
						kompletní řešení včetně kontroly kvality a servisních služeb.
					</p>
					<p className="text-gray-700 text-lg leading-relaxed mb-4">
						Naše závazky: přesnost, transparentnost a dlouhodobé partnerství.
						Investujeme do moderních strojů i vzdělávání týmu, abychom dodávali
						dílce, které splňují i ty nejnáročnější technické požadavky.
					</p>
				</div>

				<div className="relative rounded-xl overflow-hidden h-72 md:h-96 border border-gray-200">
					<Image
						src="/images/building1.png"
						alt="Výroba TOSMONT"
						fill
						className="object-cover object-center"
					/>
				</div>
			</section>
		<section class="max-w-7xl mb-12 mx-auto font-space-grotesk">
				<CountUpGrid stats={stats} />
			</section>
			{/* Stats */}

			{/* Mission / values 

			<section className="max-w-7xl mx-auto   font-space-grotesk">
				<MissionValues values={values} />
			</section>

			<section className=" max-w-7xl mx-auto my-8 font-space-grotesk">


				<div className="w-64 h-64 relative mx-auto">
					<Image src="/images/iso9001.png" className="object-cover" fill />
				</div>
			</section> */}
			<section className="bg-slate-500 text-white py-20 text-center">
				<h3 className="text-4xl font-bold mb-6">
					Hledáte spolehlivého partnera?
				</h3>
				<p className="text-lg mb-8">
					Obraťte se na nás – rádi připravíme nabídku a vyrobíme první vzorky.
				</p>
				<Link
					href="/kontakt"
					className="inline-block bg-blue-600 text-white px-8 py-4 font-semibold hover:bg-blue-700 transition"
				>
					Kontaktujte Nás!
				</Link>
			</section>
		</>
	);
}
