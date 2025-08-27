import Image from "next/image";
import Technical1 from "../vectors/Technical1";

export default function WelcomeSection() {
    return (
        <section id="about" className="w-full bg-white py-20 font-space-grotesk relative">
            <Technical1 className="absolute inset-0 z-0 opacity-15" />
            <div className="z-10 h-[800px] bg-deev mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left - two vertical images */}
                <div className="grid grid-cols-2 gap-16 ">
                    <div className=" h-[500px] flex flex-col justify-end">
                        <div className="relative h-[450px] w-[full] ">
                            <Image
                                src="/images/cnc/cnc1.webp"
                                alt="CNC Machine"
                                className="object-cover object-center"
                                fill
                            />
                        </div>
                    </div>
                    <div className=" h-[500px] flex flex-col justify-start">
                        <div className="relative h-[450px] w-full">
                            <Image
                                src="/images/cnc/cnc1.webp"
                                alt="CNC Machine"
                                className=""
                                fill
                            />
                        </div>
                    </div>

                </div>

                {/* Right - text */}
                <div>
                    {/* Title + Subtitle row */}
                    <div className="flex relative flex-row bg-deev space-x-4">
                        <h2 className="text-6xl font-bold text-blue-600 uppercase">O nás</h2>
                        <div className="w-[1px] bg-gray-400 ">

                        </div>
                        <div className="flex flex-col justify-between ">
                            <span className="text-xl text-gray-900">Naše hodnoty</span>
                            <span className="text-xl text-gray-900">Naše hodnoty</span>

                        </div>
                    </div>

                    {/* Body text */}
                    <p className="text-gray-700 leading-relaxed">
                        Jsme česká společnost specializující se na precizní CNC obrábění.
                        Využíváme moderní stroje a zkušenosti našeho týmu k výrobě
                        kvalitních dílů podle požadavků zákazníků.
                    </p>
                </div>
            </div>
        </section>
    );
}
