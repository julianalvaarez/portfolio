"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { PortfolioContent } from "@/components/portfolio-content";
import { MousePointer2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/language-toggle";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col bg-black overflow-x-hidden">
      <LanguageToggle />

      {/* Hero Section - The starting point */}
      <section className="h-[100vh] flex flex-col items-center justify-center relative px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,50,200,0.15),transparent_50%)]" />

        <div className="z-10 text-center space-y-6">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
            {t.hero.title} <br />
            <span className="text-transparent text-3xl md:text-8xl bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient">
              {t.hero.subtitle}
            </span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-lg mx-auto font-medium">
            {t.hero.description}
          </p>
        </div>

        <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-zinc-600 text-xs uppercase tracking-widest font-bold">{t.hero.scrollDown}</span>
          <MousePointer2 className="w-5 h-5 text-purple-500 rotate-180" />
        </div>
      </section>

      {/* The Container Scroll Animation */}
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold text-white/80">
              {t.scroll.welcome}
            </h2>
            <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              {t.scroll.portfolio}
            </span>
          </div>
        }
      >
        <PortfolioContent />
      </ContainerScroll>

      {/* Page Footer */}
      <footer className="bg-black py-8 px-8 border-t border-white/5 relative z-20 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent uppercase tracking-tighter">
              Julian Alvarez
            </h3>
            <p className="text-zinc-500 text-xs tracking-[0.2em] uppercase">Fullstack Developer</p>
          </div>

          <div className="flex items-center gap-8">
            <a href="mailto:julialva2008@gmail.com" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Email</a>
            <a href="https://github.com/julianalvaarez" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">GitHub</a>
            <a href="https://www.instagram.com/julialvareeez/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">Instagram</a>
          </div>

          <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold order-first md:order-last">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
