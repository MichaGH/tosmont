import Navbar1 from "@/components/UI/Navbar1";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Navbar1 />
			<main>
                <Herosection />
                <WelcomeSection />
                <ServicesSection />
            </main>
		</>
	);
}

function Herosection() {
	return (
		<section className="relative w-full h-screen flex items-center justify-center">
			{/* Background Video */}
			<video
				autoPlay
				muted
				loop
				playsInline
				className="absolute top-0 left-0 w-full h-full object-cover"
			>
				<source src="/video/lathe1_full_freeconvert.mp4" type="video/mp4" />
			</video>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50"></div>

			{/* Hero Content */}
			<div className="relative z-10 text-center text-white px-6">
				<h1 className="text-4xl md:text-6xl font-bold mb-4">
					Precision CNC Machining
				</h1>
				<p className="text-lg md:text-xl mb-6">
					TESMONT – Reliable partner for CNC machining in the Czech Republic
				</p>
				<a
					href="#contact"
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition"
				>
					Get in Touch
				</a>
			</div>
		</section>
	);
}

function WelcomeSection() {
	return (
		<section className="w-full bg-white py-20">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				{/* Left - two vertical images */}
				<div className="grid grid-cols-2 gap-4 h-[500px]">
					<img
						src="/images/machine1.jpg"
						alt="CNC Machine"
						className="w-full h-full object-cover rounded-xl shadow-lg"
					/>
					<img
						src="/images/machine2.jpg"
						alt="CNC Machine"
						className="w-full h-full object-cover rounded-xl shadow-lg"
					/>
				</div>

				{/* Right - text */}
				<div>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Vítejte v Tesmont
					</h2>
					<p className="text-gray-700 leading-relaxed">
						Jsme česká společnost specializující se na precizní CNC obrábění.
						Využíváme moderní stroje a zkušenosti našeho týmu k výrobě
						kvalitních dílů podle požadavků našich zákazníků.
					</p>
				</div>
			</div>
		</section>
	);
}


// Reorganized services into categories
const services = [
  {
    category: "Dělení materiálu",
    description: "Používáme CNC kotoučovou pilu i NC pásovou pilu.",
  },
  {
    category: "Soustružení",
    description: "Automatické předávání dílce, soustružení z tyčí i přířezů, hrubování velkých dílů.",
  },
  {
    category: "Frézování",
    description: "Frézování na 4 osách i horizontální frézování velkých dílů.",
  },
  {
    category: "Drátové řezání",
    description: "Přesné dělení materiálu metodou drátového řezání.",
  },
  {
    category: "Broušení",
    description: "Bezhroté broušení, broušení na kulato (mezi hroty, otvory, vnitřní i vnější) a broušení na plocho.",
  },
  {
    category: "Odvalovací frézování ozubení",
    description: "Výroba řetězových a ozubených kol.",
  },
  {
    category: "Válcování závitů",
    description: "Přesné válcování závitů pro různé aplikace.",
  },
  {
    category: "Žíhání",
    description: "Rozměry vsázky 640 × 770 × 500 mm, hmotnost do 1t.",
  },
];

function ServicesSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Naše služby
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.category}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Placeholder SVG */}
              <img
                src="/icons/test.svg"
                alt="Service icon"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.category}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}