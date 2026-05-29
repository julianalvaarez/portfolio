"use client";
import React, { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  titleComponent,
  children,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  // The animation happens over the entire scroll range of this component
  const rotate = useTransform(scrollYProgress, [0, 1], [45, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [400, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div
      className="h-[100vh] flex flex-col items-center justify-start relative bg-black"
      ref={containerRef}
    >
      <div
        className="w-full relative sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} opacity={opacity} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale} scrollYProgress={scrollYProgress}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, opacity, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
        opacity: opacity,
      }}
      className="max-w-5xl mx-auto text-center z-10"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  scrollYProgress,
  translate,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  scrollYProgress: MotionValue<number>;
}) => {
  // We can use scrollYProgress to fade in/out the internal content or move things
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-[98vw] mx-auto h-screen w-full border-4 border-[#6C6C6C]/50 p-1 md:p-2 bg-[#121212] rounded-[30px] shadow-2xl overflow-hidden relative"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-zinc-950/50 backdrop-blur-xl border border-white/10 md:rounded-2xl">
        {children}
      </div>
    </motion.div>
  );
};
