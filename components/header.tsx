"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { company, whatsappLink } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/92 backdrop-blur">
      <div className="container-pad flex h-20 items-center justify-between">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded">
          <span className="grid h-11 w-11 place-items-center bg-ink text-lg font-black text-white">
            R
          </span>
          <span>
            <span className="block text-xl font-black uppercase leading-none text-ink">
              Ramount
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-walnut">
              Doors Zimbabwe
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded text-sm font-bold text-charcoal transition hover:text-brass"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${company.phone.replace(/\s/g, "")}`}
            className="focus-ring rounded px-3 py-2 text-sm font-bold text-charcoal"
          >
            {company.phone}
          </a>
          <a
            href={whatsappLink("Hello Ramount, I would like a quotation.")}
            className="focus-ring bg-ink px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:bg-brass"
          >
            Quote
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
          className="focus-ring grid h-11 w-11 place-items-center border border-ink/15 bg-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-porcelain lg:hidden">
          <nav className="container-pad grid gap-2 py-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded px-2 py-3 text-base font-bold text-charcoal"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink("Hello Ramount, I would like a quotation.")}
              className="focus-ring mt-2 bg-ink px-5 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white"
            >
              WhatsApp Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
