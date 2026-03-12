import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "../components/ui/Lightbox";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState(null);





  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Proyecto no encontrado</p>
      </div>
    );
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-6 py-20 space-y-16"
    >
      {/* Volver */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white"
      >
        <ArrowLeft size={16} /> Volver
      </Link>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-slate-500">{project.role}</p>
        <p className="text-lg leading-relaxed">
          {project.description}
        </p>
      </header>

      {/* Problema / Objetivo */}
      <section className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-semibold text-xl mb-2">Problema</h3>
          <p className="text-slate-600 dark:text-slate-300">
            {project.problem}
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-2">Objetivo</h3>
          <p className="text-slate-600 dark:text-slate-300">
            {project.objective}
          </p>
        </div>
      </section>

      {/* Solución */}
      <section>
        <h3 className="font-semibold text-xl mb-2">Solución</h3>
        <p className="text-slate-600 dark:text-slate-300">
          {project.solution}
        </p>
      </section>

      {/* Funcionalidades */}
      <section>
        <h3 className="font-semibold text-xl mb-4">Funcionalidades clave</h3>
        <ul className="space-y-2 list-disc pl-5">
          {project.fun.map((item, index) => (
            <li key={index} className="text-slate-600 dark:text-slate-300">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Impacto */}
      <section>
        <h3 className="font-semibold text-xl mb-4">Impacto técnico</h3>
        <ul className="grid md:grid-cols-2 gap-2">
          {project.impact.map((item, index) => (
            <li
              key={index}
              className="rounded-lg bg-slate-100 dark:bg-slate-800 px-4 py-2 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Stack */}
      <section>
        <h3 className="font-semibold text-xl mb-4">Stack tecnológico</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full text-sm
                         bg-slate-200 dark:bg-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {project.gallery && (
            <section className="space-y-6">
              <h3 className="text-xl font-semibold">Galería</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-xl shadow-lg cursor-zoom-in"
                    whileHover={{ scale: 1.03 }}
                    onClick={() => {
                      setCurrentIndex(index);
                      setLightboxOpen(true);
                    }}
                  />
                ))}
              </div>

              {lightboxOpen && (
                <Lightbox
                  images={project.gallery}
                  index={currentIndex}
                  onClose={() => setLightboxOpen(false)}
                  onPrev={() =>
                    setCurrentIndex(
                      (currentIndex - 1 + project.gallery.length) %
                      project.gallery.length
                    )
                  }
                  onNext={() =>
                    setCurrentIndex(
                      (currentIndex + 1) % project.gallery.length
                    )
                  }
                />
              )}
            </section>
          )}

        </div>
      </section>
      <section className="mt-12">
        <h3 className="text-xl font-semibold mb-6">🎬 Videos del proyecto</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.videos.map((video, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(video)}
              className="group relative rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <video
                src={video.src}
                muted
                className="w-full h-64 object-cover"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white text-lg font-medium">
                  ▶ Ver video
                </span>
              </div>
            </button>
          ))}
        </div>
        {/* Modal de video con flechas para navegar entre videos */}
        <AnimatePresence>
          {activeVideo && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
            > 
              <motion.video
                key={activeVideo.src}
                src={activeVideo.src}
                controls
                autoPlay
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </section>


      {/* CTA */}
      <section className="flex flex-wrap gap-4">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3
                       rounded-xl bg-slate-900 text-white"
          >
            <Github size={18} /> Ver código
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-3
                       rounded-xl border"
          >
            <ExternalLink size={18} /> Ver demo
          </a>
        )}
      </section>
    </motion.main>
  );
};

export default ProjectDetail;
