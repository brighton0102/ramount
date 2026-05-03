import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductFilter } from "@/components/product-filter";
import { categories, products, ProductCategory } from "@/lib/site-data";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);

  return {
    title: category ? `${category.name} | Ramount` : "Category | Ramount",
    description: category?.description
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((item) => item.slug === params.slug);

  if (!category) {
    notFound();
  }

  const categoryProducts = products.filter((product) => product.category === category.name);

  return (
    <section className="bg-porcelain py-14">
      <div className="container-pad">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="eyebrow">Category</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
              {category.name}
            </h1>
            <p className="mt-4 text-base leading-8 text-charcoal/75">{category.description}</p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden bg-mist shadow-luxe">
            <Image
              src={category.image}
              alt={category.name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-12">
          <ProductFilter
            initialProducts={categoryProducts}
            lockedCategory={category.name as ProductCategory}
          />
        </div>
      </div>
    </section>
  );
}
