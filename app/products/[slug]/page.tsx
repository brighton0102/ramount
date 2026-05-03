import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MessageCircle } from "lucide-react";
import { ProductCard } from "@/components/product-card";
import { formatPrice, products, whatsappLink } from "@/lib/site-data";

type ProductPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  return {
    title: product ? `${product.name} | Ramount` : "Product | Ramount",
    description: product?.summary
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  const related = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <section className="bg-porcelain py-12">
        <div className="container-pad">
          <Link
            href="/products"
            className="focus-ring mb-6 inline-flex items-center gap-2 rounded text-sm font-black text-charcoal hover:text-brass"
          >
            <ArrowLeft size={18} /> Back to catalogue
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="relative aspect-[4/3] overflow-hidden bg-mist shadow-luxe">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className={product.category === "Doors" ? "object-contain p-6" : "object-cover"}
              />
            </div>
            <div className="bg-white p-6 shadow-sm ring-1 ring-ink/10 sm:p-8">
              <p className="eyebrow">{product.category}</p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-3xl font-black text-walnut">
                {formatPrice(product.price)}
              </p>
              <p className="mt-5 text-base leading-8 text-charcoal/75">{product.summary}</p>
              <div className="mt-7 grid gap-3">
                {product.details.map((detail) => (
                  <p key={detail} className="flex gap-3 text-sm font-semibold text-charcoal">
                    <Check size={18} className="mt-0.5 shrink-0 text-brass" /> {detail}
                  </p>
                ))}
              </div>
              <div className="mt-7">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-ink">
                  Available finishes
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.finishes.map((finish) => (
                    <span key={finish} className="border border-ink/10 bg-porcelain px-3 py-2 text-sm font-bold text-charcoal">
                      {finish}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-7 bg-porcelain p-4 ring-1 ring-ink/10">
                <p className="text-sm font-black text-ink">Best for</p>
                <p className="mt-1 text-sm leading-6 text-charcoal/75">{product.bestFor}</p>
              </div>
              <a
                href={whatsappLink(`Hello Ramount, I would like a quote for the ${product.name}.`)}
                className="focus-ring mt-7 inline-flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-sm font-black uppercase tracking-[0.14em] text-white transition hover:brightness-95"
              >
                <MessageCircle size={20} /> Ask about this product
              </a>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-white py-14">
          <div className="container-pad">
            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Related</p>
                <h2 className="mt-2 text-3xl font-black text-ink">More in {product.category}</h2>
              </div>
              <Link href="/products" className="text-sm font-black text-brass hover:text-ink">
                View all products
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
