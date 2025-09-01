import HeroBanner from "@/components/HeroBanner";
import { Mail, MapPin, Smartphone } from "lucide-react";
import Link from "next/link";

const contactPersons = [
	{
		role: "Jednatel",
		name: "Martin Filsoch",
		email: "info@tosmont.cz",
		phone: "+420 723 747 784",
	},
	{
		role: "Výroba",
		name: "Vedoucí výroby",
		email: "vyroba@tosmont.cz",
		phone: "+420 722 990 402",
	},
	{
		role: "Dílna",
		name: "Mistr",
		email: "dilna@tosmont.cz",
		phone: "+420 702 246 912",
	},
	{
		role: "Fakturace",
		name: "Ing. Petra Buďová",
		email: "fakturace@tosmont.cz",
		phone: "+420 722 990 359",
	},
];

export default function Page() {
	return (
		<>
			{/* Hero Banner */}
			<HeroBanner
				title="Kontakt"
				bgImage="/images/cnc/cnc3.webp"
				breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
			/>

			{/* Section 1: Company Info + Form */}
			<section className="w-full bg-gray-50 py-24 font-space-grotesk">
				<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
					{/* LEFT: Company Info */}
					<div className="rounded-lg mt-4">
						<div className="pb-6 border-b border-gray-200">
							<h2 className="text-4xl font-bold text-gray-900">
								TOSMONT servis s.r.o.
							</h2>
							<p className="mt-2 text-lg text-gray-500">
								Strojírenská a zámečnícká výroba
							</p>
						</div>

						<div className="mt-10 space-y-10">
							{/* Address */}
							<div>
								<h3 className="uppercase tracking-wide text-sm font-semibold text-gray-500">
									Sídlo
								</h3>
								<div className="mt-3 space-y-3">
									<div className="flex items-start gap-3">
										<MapPin className="w-5 h-5 mt-0.5 text-blue-600" />
										<span className="text-gray-700">
											Babory 809, 394 68 Žirovnice
										</span>
									</div>
									<div className="flex items-start gap-3">
										<Mail className="w-5 h-5 mt-0.5 text-blue-600" />
										<a
											href="mailto:info@tosmont.cz"
											className="text-gray-700 hover:text-blue-700"
										>
											info@tosmont.cz
										</a>
									</div>
									<div className="flex items-start gap-3">
										<Smartphone className="w-5 h-5 mt-0.5 text-blue-600" />
										<a href="#" className="text-gray-700 hover:text-blue-700">
											+420 722 990 402{" "}
											<span className="text-gray-400">— objednávky</span>
										</a>
									</div>
									<div className="flex items-start gap-3">
										<Smartphone className="w-5 h-5 mt-0.5 text-blue-600" />
										<a href="#" className="text-gray-700 hover:text-blue-700">
											+420 723 747 784{" "}
											<span className="text-gray-400">— servis</span>
										</a>
									</div>
								</div>
							</div>

							{/* Workshop */}
							<div>
								<h3 className="uppercase tracking-wide text-sm font-semibold text-gray-500">
									Provozovna
								</h3>
								<div className="mt-3 space-y-3">
									<div className="flex items-center gap-3">
										<MapPin className="w-5 h-5 text-blue-600" />
										<span className="text-gray-700">
											Otín 424, 377 01 Jindřichův Hradec
										</span>
									</div>
									<Link
										href="https://maps.google.com/?q=Ot%C3%ADn+424,+377+01+Jind%C5%99ich%C5%AFv+Hradec"
										target="_blank"
										className="inline-flex items-center gap-2 text-sm text-blue-700 hover:underline"
									>
										Zobrazit na mapě
									</Link>
								</div>
							</div>

							{/* Legal */}
							<div className="flex flex-col space-y-2 text-gray-500 pt-6">
                                <span>IČ: 05647321 </span>
                                <span>DIČ: CZ05647321 </span>
                                <span>KB 123-3745990217/0100 </span>
							</div>
						</div>
					</div>

					{/* RIGHT: Contact Form */}
					<div className="">
						<form className="bg-white ring-1 ring-gray-100 rounded-lg p-8 h-full">
							<div className="flex items-baseline justify-between mb-12">
								<h3 className="text-3xl font-semibold text-gray-900">
									Napište nám
								</h3>
								<p className="text-xs text-gray-500">
									Pole označená * jsou povinná
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<label className="block">
									<span className=" text-gray-500">Jméno *</span>
									<input
										name="name"
										required
										className="mt-1 w-full border-b border-gray-200 py-2 px-1 focus:outline-none focus:border-b-blue-600"
										placeholder="Vaše jméno"
									/>
								</label>

								<label className="block">
									<span className=" text-gray-500">Firma</span>
									<input
										name="company"
										className="mt-1 w-full border-b border-gray-200 py-2 px-1 focus:outline-none focus:border-b-blue-600"
										placeholder="Název firmy"
									/>
								</label>

								<label className="block md:col-span-1">
									<span className=" text-gray-500">E-mail *</span>
									<input
										name="email"
										type="email"
										required
										className="mt-1 w-full border-b border-gray-200 py-2 px-1 focus:outline-none focus:border-b-blue-600"
										placeholder="vas@email.cz"
									/>
								</label>

								<label className="block md:col-span-1">
									<span className=" text-gray-500">Telefon</span>
									<input
										name="phone"
										type="tel"
										className="mt-1 w-full border-b border-gray-200 py-2 px-1 focus:outline-none focus:border-b-blue-600"
										placeholder="+420 ..."
									/>
								</label>

								<label className="block md:col-span-2">
									<span className=" text-gray-500">Zpráva *</span>
									<textarea
										name="message"
										required
										rows={5}
										className="mt-1 w-full border border-gray-100 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-blue-600"
										placeholder="Obsah poptávky..."
									></textarea>
								</label>
							</div>

							<div className="mt-6 flex items-center justify-between">
								<p className="text-xs text-gray-500">
									Odesláním souhlasíte se zpracováním osobních údajů.
								</p>
								<button
									type="submit"
									className="inline-flex text-lg items-center gap-2 bg-blue-600 text-white  font-medium rounded-md px-4 py-2 hover:bg-blue-700 transition"
								>
									Odeslat
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Section 2: Contact Persons */}
			<section className="w-full relative bg-white py-24 font-space-grotesk">
				{/* Subtle graph background */}
				<div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#d1d5db_1px,transparent_1px),linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

				<div className="relative max-w-7xl mx-auto px-12 py-12 bg-desv bg-white shadow-lg">
					<div className="divide-y divide-gray-100  ">
						{contactPersons.map((person) => (
							<div
								key={person.role}
								className="py-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-lg"
							>
								<p className="font-bold text-gray-900 text-xl uppercase">
									{person.role}
								</p>
								<p className="text-gray-800">{person.name}</p>
								<div className="flex flex-col gap-2">
									<p className="flex items-center gap-2 text-gray-700">
										<Mail className="w-5 h-5 text-blue-600" /> {person.email}
									</p>
									<p className="flex items-center gap-2 text-gray-700">
										<Smartphone className="w-5 h-5 text-blue-600" />{" "}
										{person.phone}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Section 3: Map */}
			<section className="w-screen h-[400px] md:h-[600px]">
  <iframe
    title="TOSMONT Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.123456789!2d14.847123!3d49.122345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4709ca123456789%3A0xabcdef123456789!2sBabory+809%2C+394+68+Žirovnice!5e0!3m2!1sen!2scz!4v1693360000000!5m2!1sen!2scz"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>
		</>
	);
}
