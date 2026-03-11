"use client"; // Necesario en Next.js App Router para animaciones
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }} // Empieza invisible y más abajo
      whileInView={{ opacity: 1, y: 0 }} // Se revela a su posición original
      viewport={{ once: true, margin: "-100px" }} // Se dispara un poco antes de aparecer en pantalla
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }} // Curva de animación premium
    >
      {children}
    </motion.div>
  );
}
