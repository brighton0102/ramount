import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories, products } from "@/lib/site-data";

export const metadata = {
  title: "Categories | Ramount",
  description: "Browse Ramount product categories for doors, cornice ceilings and hardware."
};

export default function CategoriesPage() {
  return (
    <section className="bg-porcelain py-14">
      <div className="container-pad">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Categories</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Product areas Ramount can supply
          </h1>
          <p className="mt-4 text-base leading-8 text-charcoal/75">
            Start with a category, compare products, then request a quote directly through WhatsApp.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {categories.map((category) => {
            const count = products.filter((product) => product.category === category.name).length;
            return (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group overflow-hidden bg-white shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-luxe"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-brass">
                    {count} products
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-ink">{category.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-charcoal/72">{category.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brass">
                    Browse category <ArrowRight size={17} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
