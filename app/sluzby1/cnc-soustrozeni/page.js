import ExpandingGallery from "@/components/customs/ExpandingGallery";
import GalleryClient from "@/components/sluzby1/gallery/GalleryClient";
import MachineryList from "@/components/sluzby1/MachineryList";
import MaterialsTabs from "@/components/sluzby1/MaterialsTabs";
import Pouziti from "@/components/sluzby1/Pouziti";
import SupportedMaterials from "@/components/sluzby1/SupportedMaterials";
import TechnicalLimits from "@/components/sluzby1/TechnicalLimits";

import {
	MoveHorizontal,
	MoveVertical,
	MoveDiagonal,
	Weight,
} from "lucide-react";

export default function Page() {
	const images = [
		"/images/cnc/cnc1.webp",
		"/images/cnc/cnc2.webp",
		"/images/cnc/cnc3.webp",
	];

	const materials = [
		"Ocel",
		"Nerez",
		"Hliník",
		"Mosaz",
		"Měď",
		"Slitinz",
		"Plasty",
	];

	const limits = [
		{
			title: "Maximální podélný posuv",
			value: "2000 mm",
			icon: MoveHorizontal, // length (X)
		},
		{
			title: "Maximální příčný posuv",
			value: "800 mm",
			icon: MoveDiagonal, // width (Y)
		},
		{
			title: "Max. svislý posun vřeteníku",
			value: "560 mm",
			icon: MoveVertical, // height (Z)
		},
		{
			title: "Nosnost strojů",
			value: "2 t",
			icon: Weight, // load capacity
		},
	];

	const usages = [
		"Automobilový průmysl",
		"Letecký průmysl",
		"Strojírenství",
		"Výroba forem a nástrojů",
		"Prototypování",
	];

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
    comment:
      "Vysokorychlostní soustruh vhodný pro sériovou výrobu přesných dílů.",
    image: "/images/machinery/blank.jpg",
  },
];

const galleryItems = [
    "/images/references/1.jpg",
    "/images/references/2.jpg",
    "/images/references/3.webp",
    "/images/references/4.webp",
    "/images/references/5.jpg",
    "/images/references/6.webp",
    "/images/references/7.webp",
    "/images/references/8.webp",
    "/images/references/9.webp",
    "/images/references/10.webp",
    "/images/references/10.webp",
    "/images/references/10.webp"
]

	return (
		<div className="sluzby-wrapper">
			{/* Page title */}
			<section className=" sluzby-section">
				<h2 className="sluzby-title">CNC Soustrožení</h2>
				<p className="sluzby-text">
					Naše CNC soustružnické služby kombinují moderní stroje a zkušený tým,
					aby zajistily maximální přesnost a kvalitu výroby. Od jednoduchých
					válečků po složité tvarované dílce, každý projekt je pečlivě
					naplánován a kontrolován.
				</p>
				<p className="sluzby-text">
					Díky přesnému řízení pohybu v osách X, Y a Z a možnostem manipulace s
					těžkými dílci dokážeme vyrobit komponenty, které splňují přísné
					průmyslové standardy. S důrazem na toleranci a kvalitu povrchu
					poskytujeme řešení vhodná pro automobilový, letecký a strojírenský
					průmysl.
				</p>
			</section>
			<section className="sluzby-section">
				<ExpandingGallery images={images} />
			</section>
			<section className="sluzby-section w-full">
				<TechnicalLimits limits={limits} />
			</section>



			<section className="sluzby-section w-full">
				<h3 className="sluzby-subtitle">Vybavení</h3>
                <MachineryList machinery={machinery} />
			</section>
            <section className="sluzby-section w-full">
				<h3 className="sluzby-subtitle">Naše Práce</h3>
                <GalleryClient galleryItems={galleryItems} />

            </section>
		</div>
	);
}
