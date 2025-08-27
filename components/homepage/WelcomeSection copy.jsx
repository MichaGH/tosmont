export default function WelcomeSection() {
    return (
        <section id="about" className="w-full bg-white py-20 font-space-grotesk">
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
