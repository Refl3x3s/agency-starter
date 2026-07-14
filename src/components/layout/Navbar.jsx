import { Link } from "react-router-dom";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { whatsappLink } from "../../data/contact";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between gap-4 py-5">

          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 text-lg font-bold tracking-tight text-white sm:text-2xl"
          >
            Abril Digital Co.
          </Link>

          {/* Navegación */}
          <nav aria-label="Navegación principal">
            <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-300 lg:flex">
              <li>
                <a
                  href="/#servicios"
                  className="transition-colors hover:text-white"
                >
                  Servicios
                </a>
              </li>

              <li>
                <Link
                  to="/proyectos"
                  className="transition-colors hover:text-white"
                >
                  Proyectos
                </Link>
              </li>

              <li>
                <a
                  href="/#proceso"
                  className="transition-colors hover:text-white"
                >
                  Proceso
                </a>
              </li>

              <li>
                <a
                  href="/#precios"
                  className="transition-colors hover:text-white"
                >
                  Precios
                </a>
              </li>

              <li>
                <a
                  href="/#contacto"
                  className="transition-colors hover:text-white"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          {/* CTA */}
          <Button
            variant="secondary"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0"
            aria-label="Agenda una asesoría gratuita por WhatsApp (se abre en una pestaña nueva)"
          >
            <span className="hidden sm:inline" aria-hidden="true">Agenda una asesoría gratuita</span>
            <span className="sm:hidden" aria-hidden="true">Agenda ahora</span>
          </Button>

        </div>
      </Container>
    </header>
  );
}

export default Navbar;