import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";

const machinery = [
  {
    name: "HEDELIUS TILTENTA 9",
    specs: [
      "Max. zatížení otočného stolu: 1200 / 1800 kg",
      "Max. zatížení pevného stolu: 5000 kg",
      "X/Y/Z: 4600 x 900 x 900 mm",
    ],
    comment:
      "Univerzální obráběcí centrum s naklápěcím hlavním vřetenem umožňující 5-osé obrábění. Nejvyšší přesnost je zaručena prostřednictvím čtyř posuvných os nástroje a jedné osy obrobku.",
    image: "/images/machinery/blank.jpg",
  },
  {
    name: "CNC Soustruh XYZ TC 320 LTY",
    specs: [
      "Průměr soustružení: 300 mm",
      "Délka soustružení: 500 mm",
      "Otáčky: 4000 ot/min",
    ],
    comment: "Vysokorychlostní soustruh vhodný pro sériovou výrobu přesných dílů.",
    image: "/images/machinery/blank.jpg",
  },
  {
    name: "FANUC Robodrill α-D21LiB5",
    specs: [
      "X/Y/Z: 700 x 400 x 330 mm",
      "Otáčky: 24 000 ot/min",
      "Nástrojová zásoba: 21 pozic",
    ],
    image: "/images/machinery/blank.jpg",
  },
  {
    name: "HEDELIUS TILTENTA 9",
    specs: [
      "Max. zatížení otočného stolu: 1200 / 1800 kg",
      "Max. zatížení pevného stolu: 5000 kg",
      "X/Y/Z: 4600 x 900 x 900 mm",
    ],
    comment:
      "Univerzální obráběcí centrum s naklápěcím hlavním vřetenem umožňující 5-osé obrábění. Nejvyšší přesnost je zaručena prostřednictvím čtyř posuvných os nástroje a jedné osy obrobku.",
    image: "/images/machinery/blank.jpg",
  },
  {
    name: "CNC Soustruh XYZ TC 320 LTY",
    specs: [
      "Průměr soustružení: 300 mm",
      "Délka soustružení: 500 mm",
      "Otáčky: 4000 ot/min",
    ],
    comment: "Vysokorychlostní soustruh vhodný pro sériovou výrobu přesných dílů.",
    image: "/images/machinery/blank.jpg",
  },
  {
    name: "FANUC Robodrill α-D21LiB5",
    specs: [
      "X/Y/Z: 700 x 400 x 330 mm",
      "Otáčky: 24 000 ot/min",
      "Nástrojová zásoba: 21 pozic",
    ],
    image: "/images/machinery/blank.jpg",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        title="Strojní Výbava"
        bgImage="/images/cnc/cnc3.webp"
        breadcrumbs={[{ label: "Kontakt", href: "/kontakt" }]}
      />

      {/* Section: Machinery */}
      <section className="w-full max-w-7xl mx-auto px-6 py-16 font-space-grotesk">


        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {machinery.map((machine, index) => (
            <div
              key={index}
              className="bg-white shadow-md  overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">
                  {machine.name}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm mb-4">
                  {machine.specs.map((spec, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      {spec}
                    </li>
                  ))}
                </ul>
                {machine.comment && (
                  <p className="text-gray-600 text-sm italic border-t border-gray-100 pt-4">
                    {machine.comment}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
