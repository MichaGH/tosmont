import Image from "next/image";
import Technical1 from "../vectors/Technical1";

export default function WelcomeSection() {
    return (
        <section id="about" className="bg-deev w-full bg-white py-36 font-space-grotesk relative">
            <Technical1 className="absolute inset-0 z-0 opacity-100 h-full w-full " stroke={"#F2F2F2"} />
            <div className="z-10 *:z-10 max-w-6xl bg-deev mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                {/* Right - text */}
                <div className="bg-deev flex flex-col space-y-8">
                    {/* Title + Subtitle row */}
                    <div className="flex relative flex-row bg-deev space-x-4">
                        <h2 className="text-6xl font-bold text-blue-600 uppercase">Kdo jsme?</h2>
                        <div className="w-[1px] bg-gray-400 ">

                        </div>
                        <div className="flex flex-col justify-between ">
                            <span className="text-xl text-gray-900">Spolehlivost</span>
                            <span className="text-xl text-gray-900">Záruka Kvality</span>

                        </div>
                    </div>
                    <div className="text-gray-700 leading-relaxed flex flex-col space-y-4">
                        <p>
                            TOSMONT servis s.r.o., rodinná firma založená v roce 2016, se dynamicky rozvíjí. Od roku 2022 působíme v moderních výrobních prostorách v Jindřichově Hradci s týmem více než 20 zkušených zaměstnanců. 
                        </p>
                        <p>
                            Naší prioritou je kvalita, přesnost a spolehlivost. Zvládáme jak kusovou výrobu (1–100 ks), tak sériovou (100–10 000 ks) pro české i zahraniční klienty. Od roku 2019 úspěšně působíme také na německém trhu.
                        </p>
                    </div>

                    {/*                     <p className="text-gray-700 leading-relaxed">
                        Jsme česká společnost specializující se na precizní CNC obrábění.
                        Využíváme moderní stroje a zkušenosti našeho týmu k výrobě
                        kvalitních dílů podle požadavků zákazníků.
                    </p> */}
                </div>
                <div className="relative h-full">
                    <Image
                        src="/images/building1.png"
                        alt="CNC Machine"
                        className="object-contain object-center"
                        fill
                    />
                </div>
            </div>
        </section>
    );
}
