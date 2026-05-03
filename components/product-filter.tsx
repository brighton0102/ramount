"use client";

import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Product, ProductCategory, categories, products } from "@/lib/site-data";
import { ProductCard } from "@/components/product-card";

const allCategory = "All";
type CategoryFilter = ProductCategory | typeof allCategory;

type ProductFilterProps = {
  initialProducts?: Product[];
  lockedCategory?: ProductCategory;
};

export function ProductFilter({ initialProducts = products, lockedCategory }: ProductFilterProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>(lockedCategory ?? allCategory);

  const visibleProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      const matchesCategory = category === allCategory || product.category === category;
      const searchable = `${product.name} ${product.category} ${product.summary} ${product.bestFor}`.toLowerCase();
      return matchesCategory && searchable.includes(query.toLowerCase());
    });
  }, [category, initialProducts, query]);

  return (
    <div>
      <div className="mb-8 grid gap-4 bg-white p-4 shadow-sm ring-1 ring-ink/10 lg:grid-cols-[1fr_auto]">
        <label className="relative block">
          <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/45" size={20} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search doors, cornices, handles..."
            className="focus-ring h-12 w-full border border-ink/10 bg-porcelain pl-12 pr-4 text-sm font-semibold text-ink placeholder:text-charcoal/45"
          />
        </label>

        {!lockedCategory && (
          <div className="flex flex-wrap gap-2">
            {[allCategory, ...categories.map((item) => item.name)].map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item as CategoryFilter)}
                className={`focus-ring h-12 px-4 text-sm font-black transition ${
                  category === item
                    ? "bg-ink text-white"
                    : "border border-ink/10 bg-porcelain text-charcoal hover:border-brass"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {visibleProducts.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="bg-white p-10 text-center shadow-sm ring-1 ring-ink/10">
          <p className="text-lg font-black text-ink">No matching products yet.</p>
          <p className="mt-2 text-sm text-charcoal/70">
            Try a different search or ask Ramount on WhatsApp for a custom quotation.
          </p>
        </div>
      )}
    </div>
  );
}
