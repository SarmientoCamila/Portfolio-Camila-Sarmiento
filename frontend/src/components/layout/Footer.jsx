import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="
      border-t border-slate-200 dark:border-slate-800
      bg-white dark:bg-slate-950
    ">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-8 md:grid-cols-3">

        {/* Marca */}
        <div>
          <h3 className="font-semibold text-lg mb-2">
            Camila Sarmiento
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Frontend Developer · React · Problem Solver
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="font-medium mb-3">Navegación</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#projects" className="hover:text-slate-500 transition">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-slate-500 transition">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Redes */}
        <div>
          <h4 className="font-medium mb-3">Contacto</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/SarmientoCamila"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/camila-sarmiento-62310523b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition"
            >
              <Linkedin />
            </a>

            <a
              href="mailto:sarmiento_camila@hotmail.com"
              className="hover:scale-110 transition"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="
        border-t border-slate-200 dark:border-slate-800
        py-4 text-center text-xs
        text-slate-500 dark:text-slate-400
      ">
        © {new Date().getFullYear()} Camila Sarmiento. Todos los derechos reservados.
      </div>
    </footer>
  );
}
