import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { SectionHeading } from "@/components/section-heading";
import { categories, faqs, products, services, trustPoints, whatsappLink } from "@/lib/site-data";

export default function HomePage() {
  const featured = products.slice(0, 6);

  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-ink text-white">
        <Image
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
          alt="Luxury home entrance with premium doors"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/78 to-ink/20" />
        <div className="container-pad relative flex min-h-[calc(100vh-5rem)] items-center py-16">
          <div className="max-w-3xl">
            <p className="eyebrow text-brass">Premium doors in Zimbabwe</p>
            <h1 className="mt-5 font-serif text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
              Ramount
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
              Browse statement doors, everyday interior doors, cornice ceilings and finishing hardware with guide prices before speaking to sales on WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/products"
                className="focus-ring inline-flex items-center justify-center gap-2 bg-brass px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-ink"
              >
                Browse products <ArrowRight size={18} />
              </Link>
              <a
                href={whatsappLink("Hello Ramount, I would like help choosing doors.")}
                className="focus-ring inline-flex items-center justify-center gap-2 border border-white/30 px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-ink"
              >
                <MessageCircle size={18} /> WhatsApp sales
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/20 pt-6">
              {["Doors", "Cornices", "Hardware"].map((item) => (
                <div key={item}>
                  <p className="text-2xl font-black text-white">{item}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                    Catalogue
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16">
        <div className="container-pad">
          <SectionHeading eyebrow="" title="Let us help you find your Style , Discover the Perfect Fit ">
            
          </SectionHeading>
          <div className="grid gap-6 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group relative min-h-[360px] overflow-hidden bg-ink text-white shadow-luxe"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover opacity-60 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-2xl font-black">{category.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/78">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pad">
          <SectionHeading eyebrow="Featured catalogue" title="A premium browsing experience without checkout friction">
            Customers can compare styles, guide prices and finishes, then enquire directly on WhatsApp.
          </SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="focus-ring inline-flex items-center gap-2 bg-ink px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white hover:bg-brass"
            >
              View full catalogue <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-porcelain py-16">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Why Ramount</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
              Make the buying decision easier before the customer arrives.
            </h2>
            <p className="mt-5 text-base leading-8 text-charcoal/75">
              Many clients want to understand styles, approximate pricing and options before calling. This website gives Ramount a professional catalogue that builds trust while still keeping sales personal through WhatsApp.
            </p>
          </div>
          <div className="grid gap-4">
            {[...services, ...trustPoints].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4 bg-white p-5 shadow-sm ring-1 ring-ink/10">
                  <span className="grid h-12 w-12 shrink-0 place-items-center bg-brass/12 text-brass">
                    <Icon size={23} />
                  </span>
                  <div>
                    <h3 className="font-black text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-charcoal/70">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-pad">
          <SectionHeading eyebrow="Buying guide" title="Useful answers before requesting a quote" />
          <div className="grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="bg-porcelain p-6 ring-1 ring-ink/10">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-1 shrink-0 text-brass" size={20} />
                  <div>
                    <h3 className="font-black text-ink">{faq.question}</h3>
                    <p className="mt-2 text-sm leading-7 text-charcoal/72">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
