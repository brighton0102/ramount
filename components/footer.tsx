import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { categories, company, whatsappLink } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-pad grid gap-10 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center bg-brass text-xl font-black">
              R
            </span>
            <div>
              <p className="text-2xl font-black uppercase leading-none">Ramount</p>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/60">
                Doors and ceilings
              </p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Premium doors, cornice ceilings and finishing hardware for homes,
            developments and commercial projects across Zimbabwe.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brass">
            Explore
          </h2>
          <div className="grid gap-3 text-sm text-white/75">
            <Link href="/products" className="hover:text-white">Products</Link>
            <Link href="/categories" className="hover:text-white">Categories</Link>
            <Link href="/about" className="hover:text-white">About Ramount</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brass">
            Categories
          </h2>
          <div className="grid gap-3 text-sm text-white/75">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="hover:text-white"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-brass">
            Talk to sales
          </h2>
          <div className="grid gap-4 text-sm text-white/75">
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex gap-3 hover:text-white">
              <Phone size={18} className="mt-0.5 text-brass" /> {company.phone}
            </a>
            <a href={`mailto:${company.email}`} className="flex gap-3 hover:text-white">
              <Mail size={18} className="mt-0.5 text-brass" /> {company.email}
            </a>
            <p className="flex gap-3">
              <MapPin size={18} className="mt-0.5 text-brass" /> {company.address}
            </p>
            <a
              href={whatsappLink("Hello Ramount, I found your website and need help.")}
              className="mt-2 inline-flex w-fit items-center bg-brass px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-white"
            >
              WhatsApp now
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-pad flex flex-col gap-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ramount. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-white"><Instagram size={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
