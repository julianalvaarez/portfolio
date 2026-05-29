"use client";
import React, { useState } from "react";
import { User, Code2, Briefcase, Rocket, Mail, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiNextdotjs, SiReact,
  SiTailwindcss, SiNodedotjs, SiPostgresql, SiSupabase, SiAstro, SiGit,
  SiGithub, SiInstagram
} from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const TECH_LOGOS: { [key: string]: any } = {
  "HTML": SiHtml5,
  "CSS": SiCss,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript,
  "Next.js": SiNextdotjs,
  "React": SiReact,
  "TailwindCSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "SQL": SiPostgresql,
  "Supabase": SiSupabase,
  "Astro": SiAstro,
  "Git": SiGit,
};

function TechCard({ name }: { name: string }) {
  const Icon = TECH_LOGOS[name];
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group relative overflow-hidden h-24 flex items-center justify-center cursor-default"
    >
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.p
            key="text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="font-medium text-zinc-300 group-hover:text-purple-400 transition-colors"
          >
            {name}
          </motion.p>
        ) : (
          <motion.div
            key="icon"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            className="flex flex-col items-center gap-2"
          >
            {Icon && <Icon className="w-8 h-8 text-purple-400" />}
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-tighter">{name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PortfolioContent() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const SECTIONS = [
    { id: "about", label: t.nav.about, icon: User },
    { id: "tech", label: t.nav.tech, icon: Code2 },
    { id: "experience", label: t.nav.projects, icon: Briefcase },
    { id: "contact", label: t.nav.contact, icon: Mail },
  ];

  const technologies = ["HTML", "CSS", "JavaScript", "TypeScript", "Next.js", "React", "TailwindCSS", "Node.js", "SQL", "Supabase", "Astro", "Git"];

  React.useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [t]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const freelanceProjects = [
    {
      id: "nutri",
      title: t.sections.experience.projects.nutri.title,
      description: t.sections.experience.projects.nutri.description,
      details: t.sections.experience.projects.nutri.details,
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
      link: "https://lucianacresia.vercel.app",
      github: "https://github.com/julianalvaarez/nutri-platform",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      id: "barber",
      title: t.sections.experience.projects.barber.title,
      description: t.sections.experience.projects.barber.description,
      details: t.sections.experience.projects.barber.details,
      img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1000&auto=format&fit=crop",
      link: "https://maribarbershop.vercel.app",
      github: "https://github.com/julianalvaarez/barber-system",
      color: "from-blue-500/20 to-indigo-500/20"
    }
  ];

  return (
    <div className="flex h-full w-full bg-zinc-950 text-white relative">
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[100] bg-zinc-950/95 backdrop-blur-xl p-6 md:p-12 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-3xl w-full bg-zinc-900 border border-white/10 rounded-[40px] overflow-hidden shadow-2xl relative"
            >
              <div className="h-48 md:h-72 relative">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-black transition-all z-50 text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  {selectedProject.title}
                </h3>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  {selectedProject.details}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                    <Rocket className="w-5 h-5" /> {t.sections.experience.website}
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
                    <SiGithub className="w-5 h-5" /> {t.sections.experience.github}
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Aside Navigation */}
      <aside className="w-20 md:w-64 border-r border-white/10 flex flex-col p-4 md:p-6 bg-zinc-900/50 backdrop-blur-sm">
        <div className="mb-10 hidden md:block">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Julian Alvarez
          </h2>
          <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Fullstack Engineer</p>
        </div>

        <nav className="flex-1 space-y-2">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group cursor-pointer",
                activeSection === section.id
                  ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5"
              )}
            >
              <section.icon className={cn("w-5 h-5", activeSection === section.id ? "text-purple-400" : "text-zinc-500")} />
              <span className="hidden md:block font-medium">{section.label}</span>
              {activeSection === section.id && (
                <ChevronRight className="ml-auto w-4 h-4 hidden md:block text-purple-400" />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 hidden md:block">
          <p className="text-xs text-zinc-400">{t.nav.hiring}</p>
          <p className="text-sm font-semibold text-white">{t.nav.letstalk}</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main ref={scrollContainerRef} className="flex-1 overflow-y-auto scroll-smooth custom-scrollbar">
        <section id="about" className="min-h-full p-8 md:p-16 flex flex-col justify-center">
          <span className="text-purple-500 font-mono mb-4 block">{t.sections.about.tag}</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            {t.sections.about.title.split("Julian")[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Julian</span>.
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            {t.sections.about.content}
          </p>
        </section>

        <section id="tech" className="min-h-full p-8 md:p-16 bg-zinc-900/20">
          <span className="text-pink-500 font-mono mb-4 block">{t.sections.tech.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">{t.sections.tech.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech) => (
              <TechCard key={tech} name={tech} />
            ))}
          </div>
        </section>

        <section id="experience" className="min-h-full p-8 md:p-16 bg-zinc-900/20">
          <span className="text-purple-500 font-mono mb-4 block">{t.sections.experience.tag}</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-white">{t.sections.experience.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {freelanceProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => setSelectedProject(p)}
                className="group rounded-[32px] overflow-hidden bg-zinc-900 border border-white/5 hover:border-purple-500/30 transition-all cursor-pointer relative"
              >
                <div className="h-64 overflow-hidden relative">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-50 group-hover:opacity-70 transition-opacity", p.color)} />
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-overlay" />
                  <div className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{p.title}</h4>
                  <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {p.description}
                  </p>
                  <div className="flex items-center gap-2 text-purple-400 text-sm font-bold uppercase tracking-widest">
                    {t.sections.experience.viewProject}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="min-h-full p-8 md:p-16 flex flex-col justify-center items-center text-center">
          <span className="text-purple-500 font-mono mb-4 block">{t.sections.contact.tag}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">{t.sections.contact.title}</h2>
          <p className="text-zinc-400 max-w-xl mb-12">
            {t.sections.contact.content}
          </p>

          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <a href="mailto:julialva2008@gmail.com" className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-zinc-200 transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              {t.sections.contact.button}
            </a>

            <div className="flex items-center gap-4">
              <a href="https://github.com/julianalvaarez" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all">
                <SiGithub className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/julialvareeez/" target="_blank" rel="noopener noreferrer" className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:text-purple-400 transition-all">
                <SiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
