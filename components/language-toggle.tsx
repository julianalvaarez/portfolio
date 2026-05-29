"use client";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Languages } from "lucide-react";
import { motion } from "framer-motion";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={() => setLanguage(language === "es" ? "en" : "es")}
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full hover:bg-white/20 transition-all group shadow-2xl"
    >
      <Languages className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold tracking-widest text-white uppercase">
        {language === "es" ? "EN" : "ES"}
      </span>
    </motion.button>
  );
}
