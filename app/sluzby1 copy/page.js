"use client";

import MaterialsTabs from "@/components/sluzby1/MaterialsTabs";

export default function SluzbyIndex() {
	return (
		<div className="sluzby-wrapper">
			{/* Intro Text */}
			<section className="sluzby-section">
				<h2 className="sluzby-title">
					Kompletní Řešení
				</h2>

				<p className="sluzby-text">
					Poskytujeme kompletní služby CNC obrábění, broušení, tepelného
					zpracování a speciální výroby. Díky moderním technologiím a
					zkušenostem našeho týmu zajistíme přesné a spolehlivé díly i pro ty
					nejnáročnější projekty. Každý materiál má své specifické vlastnosti,
					proto k nim přistupujeme individuálně.
				</p>
				<p className="sluzby-text">
					Od přípravy materiálu, přes soustružení, frézování, broušení, až po
					kontrolu a servis – naše služby pokrývají celý výrobní proces s
					maximální precizností.
				</p>
			</section>

			<section className="sluzby-section">
				<h3 className="sluzby-subtitle">
					Široké spektrum materiálu
				</h3>
				<MaterialsTabs />
			</section>
		</div>
	);
}
