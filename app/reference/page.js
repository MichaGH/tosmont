import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import Link from "next/link";

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
      <section className="w-full mx-auto px-6 py-16 h-screen flex justify-center items-start font-space-grotesk">

<div className="text-3xl text-gray-700">
  <p className="mb-6">Tady bude galerie referencí:</p>
  <ul className="list-disc list-inside space-y-4">
    <li>Může tu být kompletní galerie hotových výrobků.</li>
    <li>
      Fotky můžeme dát jen sem, nebo jen do jednotlivých služeb (
      <Link
        href="/sluzby/cnc-soustrozeni#nase-prace"
        className="text-blue-700 underline inline"
      >
        /sluzby/cnc-soustrozeni
      </Link>{" "}
      → Naše práce), nebo obojí.
    </li>
    <li>Galerie se dá samozřejmě členit podle kategorií (typ služby, materiál, stroj atd.).</li>
    <li>Stránka je zatím jen pro orientaci, galerii budeme postupně doplňovat.</li>
  </ul>
</div>


      </section>
    </>
  );
}
