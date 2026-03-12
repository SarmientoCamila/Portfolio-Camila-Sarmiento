import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 max-w-6xl mx-auto"
    >
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16
                   text-slate-900 dark:text-slate-100"
      >
        Proyectos Destacados
      </motion.h2>

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => (
          <Link to={`/projects/${project.slug}`}>
            <motion.article
              key={project.slug}
              whileHover={{ y: -6 }}
              className="rounded-2xl border bg-white dark:bg-slate-900 p-8 cursor-pointer"
            >

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-3 py-1 rounded-full
                               bg-slate-100 dark:bg-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <span
                className="inline-block mt-6 text-sm font-medium
                           text-blue-600 dark:text-blue-400
                           group-hover:underline"
              >
                Ver →
              </span>
            </motion.article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
