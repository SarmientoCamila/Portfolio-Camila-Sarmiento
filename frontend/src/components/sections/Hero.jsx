// src/components/sections/Hero.jsx
import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/Card.jsx";
import { Button } from "../ui/Button.jsx";
import { Code, Lightbulb, Bug, Rocket } from "lucide-react";
import AnimatedSection from "../ui/AnimatedSection";

export default function Hero() {
  return (
    <AnimatedSection>
      <section className="max-w-6xl mx-auto px-6 py-20">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl mb-6 "
        >
          Frontend <span className="text-slate-500 dark:text-slate-400">Problem Solver</span>
        </motion.h1>
        {/*Descripción*/}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          <p className="text-lg text-slate-600 max-w-2xl mb-12">
            Soy Camila Sarmiento, desarrolladora Frontend especializada en React.
            Transformo problemas reales en soluciones claras, eficientes y centradas en el usuario.
          </p>
          <img
            src="/src/assets/cami_perfil.png"
            alt="Camila Sarmiento"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Skill
            icon={<Code />}
            title="Código limpio"
            text="Componentes reutilizables y buenas prácticas."
          />
          <Skill
            icon={<Lightbulb />}
            title="Pensamiento lógico"
            text="Descomposición clara de problemas complejos."
          />
          <Skill
            icon={<Bug />}
            title="Debugging"
            text="Detección rápida de errores y mejoras."
          />
          <Skill
            icon={<Rocket />}
            title="UX & Performance"
            text="Interfaces claras, rápidas y accesibles."
          />
        </div>

        <div className="mt-14">
          <Button>Contactar</Button>
        </div>
      </section>
    </AnimatedSection>
  );
}

function Skill({ icon, title, text }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Card>
        <CardContent>
          <div className="mb-4 text-slate-700 dark:text-slate-300">{icon}</div>
          <h3 className="text-lg mb-1 dark:text-slate-100">{title}</h3>
          <p className="text-slate-600 text-sm dark:text-slate-400">{text}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
