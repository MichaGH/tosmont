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
		"/images/placeholder.svg",
		"/images/placeholder.svg",
		"/images/placeholder.svg",

	];

	const materials = [
		"Material 1",
		"Nerez",
		"Hliník",
		"Mosaz",
		"Měď",
		"Slitinz",
		"Plasty",
	];

	const limits = [
		{
			title: "Limit",
			value: "999 mm",
			icon: MoveHorizontal, // length (X)
		},
		{
			title: "Limit",
			value: "999 mm",
			icon: MoveHorizontal, // length (X)
		},
		{
			title: "Limit",
			value: "999 mm",
			icon: MoveHorizontal, // length (X)
		},
		{
			title: "Limit",
			value: "999 mm",
			icon: MoveHorizontal, // length (X)
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
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    "/images/placeholder.svg",
    
]

	return (
		<div className="sluzby-wrapper">
			{/* Page title */}
			<section className=" sluzby-section">
				<h2 className="sluzby-title">Tepelné Spracování</h2>
				<p className="sluzby-text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quae voluptatem aperiam nisi ipsum nihil, accusamus, voluptas sint nostrum amet vitae porro? Itaque consequuntur, veniam asperiores ut iure architecto rem?
				</p>
				<p className="sluzby-text">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam accusamus eum minus? Voluptatem sequi eligendi doloremque quibusdam earum officia doloribus in, et, ipsa vero aperiam deleniti voluptatum rerum nam consequatur!
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
