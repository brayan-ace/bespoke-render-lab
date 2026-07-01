import { WHATSAPP_URL } from "./data";

export function WhatsAppBubble() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Hollyken Hotel on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--gold)]"
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.2c-.28-.14-1.66-.82-1.92-.91-.26-.09-.45-.14-.63.14-.19.28-.72.91-.88 1.1-.16.19-.32.21-.6.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.4-1.68-1.56-1.96-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.49.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.49-.07-.14-.63-1.52-.86-2.08-.23-.55-.46-.47-.63-.48h-.54c-.19 0-.49.07-.75.35-.26.28-.99.97-.99 2.37 0 1.4 1.01 2.75 1.15 2.94.14.19 1.99 3.04 4.83 4.15.68.29 1.2.46 1.61.59.68.22 1.29.19 1.78.11.54-.08 1.66-.68 1.9-1.34.23-.65.23-1.21.16-1.33-.07-.13-.26-.2-.54-.34zM16.04 4C9.42 4 4.04 9.36 4.04 15.96c0 2.09.55 4.13 1.6 5.94L4 28l6.28-1.63a12 12 0 0 0 5.76 1.46h.01c6.62 0 12-5.36 12-11.97 0-3.2-1.25-6.2-3.51-8.46A11.9 11.9 0 0 0 16.04 4zm0 21.86h-.01c-1.83 0-3.62-.49-5.18-1.42l-.37-.22-3.72.97 1-3.62-.24-.37a9.87 9.87 0 0 1-1.53-5.29c0-5.47 4.46-9.92 9.95-9.92 2.66 0 5.15 1.03 7.03 2.9a9.83 9.83 0 0 1 2.9 7.02c0 5.47-4.46 9.95-9.83 9.95z" />
      </svg>
    </a>
  );
}