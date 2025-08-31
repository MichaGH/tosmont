import HeroBanner from "@/components/HeroBanner";
import ServicesSideMenu from "@/components/sluzby1/ServicesSideMenu";

const services = [
	{ title: "Úvod", href: "/sluzby1" },
	{ title: "CNC Soustrožení", href: "/sluzby1/cnc-soustrozeni" },
	{ title: "CNC Frézovaní", href: "/sluzby1/cnc-frezovani" },
	{ title: "CNC Drátové Řezání", href: "/sluzby1/cnc-dratove-rezani" },
	{ title: "Broušení", href: "/sluzby1/brouseni" },
	{ title: "Zváření", href: "/sluzby1/zvareni" },
	{ title: "Tepelné zpracování", href: "/sluzby1/tepelnezpraceni" },
	{ title: "Měření", href: "/sluzby1/mereni" },
	{ title: "Servis", href: "/sluzby1/servis" },
	{ title: "Stehovaní", href: "/sluzby1/stehovani-stroju" },
	{ title: "*cnc obrabeni", href: "/sluzby1/cnc" },
];

export default function SluzbyLayout({ children }) {    
	return (
		<>
			<HeroBanner title="Služby" bgImage="/images/cnc/cnc4.webp" />

			<div className="mt-12 container mx-auto px-4 py-8 flex flex-row  gap-8">
				<ServicesSideMenu items={services} />

				<div className="flex-1">{children}</div>
			</div>
		</>
	);
}
