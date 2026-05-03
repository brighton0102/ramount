import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { formatPrice, Product, whatsappLink } from "@/lib/site-data";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden bg-white shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-luxe">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-mist">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className={`transition duration-500 group-hover:scale-105 ${
              product.category === "Doors" ? "object-contain p-5" : "object-cover"
            }`}
          />
          {product.badge && (
            <span className="absolute left-4 top-4 bg-ink px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-white">
              {product.badge}
            </span>
          )}
        </div>
      </Link>
      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.16em] text-brass">
              {product.category}
            </p>
            <h3 className="mt-2 text-xl font-black text-ink">{product.name}</h3>
          </div>
          <p className="shrink-0 text-lg font-black text-walnut">{formatPrice(product.price)}</p>
        </div>
        <p className="min-h-14 text-sm leading-6 text-charcoal/75">{product.summary}</p>
        <div className="mt-5 flex gap-2">
          <Link
            href={`/products/${product.slug}`}
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 border border-ink/15 px-4 py-3 text-sm font-black text-ink transition hover:border-brass hover:text-brass"
          >
            View <ArrowRight size={16} />
          </Link>
          <a
            href={whatsappLink(`Hello Ramount, I am interested in the ${product.name}.`)}
            aria-label={`Ask about ${product.name} on WhatsApp`}
            className="focus-ring grid h-12 w-12 place-items-center bg-[#25D366] text-white"
          >
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}
