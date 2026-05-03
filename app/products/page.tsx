import { ProductFilter } from "@/components/product-filter";

export const metadata = {
  title: "Products | Ramount",
  description: "Browse Ramount doors, cornice ceilings and hardware with guide prices."
};

export default function ProductsPage() {
  return (
    <section className="bg-porcelain py-14">
      <div className="container-pad">
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Catalogue</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Browse doors, cornices and finishing hardware
          </h1>
          <p className="mt-4 text-base leading-8 text-charcoal/75">
            Search products, compare guide prices and open a WhatsApp enquiry
            with the product name already included.
          </p>
        </div>
        <ProductFilter />
      </div>
    </section>
  );
}
