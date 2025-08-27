import ScrollVelocity from "@/components/customs/ScrollVelocity";
import HeroSection from "@/components/homepage/HeroSection";
import PreviewSection from "@/components/homepage/PreviewSection";
import PreviewSection2 from "@/components/homepage/PreviewSection2";
import ServicesSection4 from "@/components/homepage/ServicesSection4";
import StepperSection from "@/components/homepage/StepperSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import WelcomeSection from "@/components/homepage/WelcomeSection";
import Navbar1 from "@/components/UI/Navbar1";
const scrollItems = [
	"PŘESNOST · KVALITA · SPOLEHLIVOST · EFEKTIVITA · PROFESIONÁLNOST",
	"soustružení frézování broušení meření",
];
const backup =
	" Přesnost · Kvalita · Spolehlivost · Efektivita · Profesionálnost ·";
const scrollItems2 = [
	"PŘESNOST · KVALITA · SPOLEHLIVOST · EFEKTIVITA · PROFESIONÁLNOST · ",
	"soustružení · frézování · broušení · meření · ",
];
export default function Home() {
	return (
		<>
			<Navbar1 />
			<main className="bg-deev">
				<HeroSection />
				<WelcomeSection />
				<ServicesSection4 />
				<StepperSection />

				<PreviewSection2 />

				<section
					className="w-full "
					style={{
						color: "transparent", // make fill transparent
						WebkitTextStroke: "2px #2563EB", // blue outline
					}}
				>
					<ScrollVelocity
						texts={scrollItems2}
						velocity={100}
						className="custom-scroll-text"
					/>
				</section>
				<TestimonialsSection />
			</main>
		</>
	);
}
