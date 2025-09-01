import HeroBanner from "@/components/HeroBanner";
import ServicesSideMenu from "@/components/sluzby1/ServicesSideMenu";
import getServicesList from "./servicesList";

const services = getServicesList();

export default function SluzbyLayout({ children }) {
	return (
		<>
			<HeroBanner title="Služby" bgImage="/images/cnc/cnc4.webp" />

			<div className="container max-w-7xl mx-auto flex flex-col md:flex-row gap-8">{/* px4 py8 mt8 */}
				<ServicesSideMenu items={services} />

				<div className="flex-1 py-4 md:py-8 lg:pt-0">{children}</div>
			</div>
		</>
	);
}


