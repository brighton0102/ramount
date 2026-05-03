import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, products, whatsappLink } from "@/lib/site-data";

export const metadata = {
  title: "Contact | Ramount",
  description: "Contact Ramount for door, cornice ceiling and hardware quotations in Zimbabwe."
};

export default function ContactPage() {
  return (
    <section className="bg-porcelain py-14">
      <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">
            Request a door or cornice quote
          </h1>
          <p className="mt-5 text-base leading-8 text-charcoal/75">
            Send Ramount the product you like, your quantities, measurements and location. The fastest way to confirm availability and final pricing is WhatsApp.
          </p>

          <div className="mt-8 grid gap-4">
            <a href={whatsappLink("Hello Ramount, I would like a quotation.")}
              className="focus-ring flex items-center gap-4 bg-[#25D366] p-5 text-white shadow-sm">
              <MessageCircle size={26} />
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.16em]">WhatsApp</span>
                <span className="text-sm">{company.phone}</span>
              </span>
            </a>
            <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="flex items-center gap-4 bg-white p-5 shadow-sm ring-1 ring-ink/10">
              <Phone className="text-brass" size={24} />
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.16em] text-ink">Call</span>
                <span className="text-sm text-charcoal/75">{company.phone}</span>
              </span>
            </a>
            <a href={`mailto:${company.email}`} className="flex items-center gap-4 bg-white p-5 shadow-sm ring-1 ring-ink/10">
              <Mail className="text-brass" size={24} />
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.16em] text-ink">Email</span>
                <span className="text-sm text-charcoal/75">{company.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 bg-white p-5 shadow-sm ring-1 ring-ink/10">
              <MapPin className="text-brass" size={24} />
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.16em] text-ink">Location</span>
                <span className="text-sm text-charcoal/75">{company.address}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 shadow-luxe ring-1 ring-ink/10 sm:p-8">
          <h2 className="text-2xl font-black text-ink">What to include in your message</h2>
          <div className="mt-6 grid gap-4">
            {[
              "Product name or screenshot from the website",
              "Quantity needed for each door, cornice or hardware item",
              "Opening measurements or room measurements",
              "Preferred finish, colour and delivery area",
              "Whether it is for a home, shop, office or building project"
            ].map((item, index) => (
              <div key={item} className="flex gap-4 border-b border-ink/10 pb-4 last:border-0 last:pb-0">
                <span className="grid h-8 w-8 shrink-0 place-items-center bg-ink text-sm font-black text-white">
                  {index + 1}
                </span>
                <p className="text-sm font-semibold leading-7 text-charcoal">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-porcelain p-5 ring-1 ring-ink/10">
            <h3 className="font-black text-ink">Quick enquiry examples</h3>
            <div className="mt-4 grid gap-3">
              {products.slice(0, 3).map((product) => (
                <a
                  key={product.id}
                  href={whatsappLink(`Hello Ramount, please quote me for ${product.name}.`)}
                  className="block bg-white p-4 text-sm font-bold text-charcoal ring-1 ring-ink/10 hover:text-brass"
                >
                  Quote me for {product.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
