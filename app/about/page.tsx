import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { services, trustPoints } from "@/lib/site-data";

export const metadata = {
  title: "About | Ramount",
  description: "Learn about Ramount, a Zimbabwean supplier of doors, cornice ceilings and hardware."
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-porcelain py-14">
        <div className="container-pad grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">About Ramount</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
              A more professional way to sell doors in Zimbabwe
            </h1>
            <p className="mt-5 text-base leading-8 text-charcoal/75">
              Ramount supplies doors, cornice ceilings and finishing hardware for customers who care about presentation, durability and clear buying guidance. The website works as a modern showroom customers can browse before starting a WhatsApp conversation.
            </p>
            <div className="mt-7 grid gap-3">
              {["Guide prices reduce back-and-forth", "Product pages make enquiries specific", ""].map((item) => (
                <p key={item} className="flex gap-3 text-sm font-bold text-charcoal">
                  <CheckCircle2 size={19} className="shrink-0 text-brass" /> {item}
                </p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist shadow-luxe">
            <Image
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85"
              alt="Premium interior door and ceiling finish"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pad">
          <SectionHeading eyebrow="What clients get" title="Useful support from first look to final quote" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="bg-porcelain p-6 ring-1 ring-ink/10">
                  <span className="grid h-12 w-12 place-items-center bg-brass/12 text-brass">
                    <Icon size={23} />
                  </span>
                  <h2 className="mt-5 text-lg font-black text-ink">{service.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-charcoal/72">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16">
        <div className="container-pad">
          <SectionHeading eyebrow="Trust" title="Built around Zimbabwean building needs" />
          <div className="grid gap-5 md:grid-cols-3">
            {trustPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="bg-white p-6 shadow-sm ring-1 ring-ink/10">
                  <Icon size={28} className="text-brass" />
                  <h2 className="mt-5 text-lg font-black text-ink">{point.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-charcoal/72">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
