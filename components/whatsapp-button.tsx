import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-data";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink("Hello Ramount, I am browsing your website and need assistance.")}
      aria-label="Chat with Ramount on WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe transition hover:scale-105 sm:bottom-7 sm:right-7"
    >
      <MessageCircle size={28} />
    </a>
  );
}
