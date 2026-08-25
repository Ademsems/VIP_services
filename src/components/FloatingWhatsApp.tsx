"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { DIRECT_WHATSAPP_LINK } from "@/lib/config";

export default function FloatingWhatsApp() {
  const { t } = useLanguage();

  return (
    <motion.a
      href={DIRECT_WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.whatsapp}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="focus-gold fixed bottom-6 right-6 z-40 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gold-gradient text-obsidian shadow-gold-lg"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/40 motion-reduce:animate-none" />
      <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
    </motion.a>
  );
}
