import Container from "../ui/Container";
import contact from "../../data/contact";

const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <a
            href="/"
            className="text-xl font-bold tracking-tight text-white"
          >
            Abril Digital Co.
          </a>

          <nav aria-label="Enlaces del pie de página">
            <ul className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-neutral-300">
              <li>
                <a href="#servicios" className="transition-colors hover:text-white">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="transition-colors hover:text-white">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#proceso" className="transition-colors hover:text-white">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#precios" className="transition-colors hover:text-white">
                  Precios
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition-colors hover:text-white">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <a
            href={`mailto:${contact.email}`}
            className="text-sm font-medium text-neutral-300 transition-colors hover:text-white"
            aria-label={`Escríbenos a ${contact.email} por correo electrónico`}
          >
            {contact.email}
          </a>
        </div>

        <div className="border-t border-neutral-900 py-6 text-center text-xs text-neutral-500">
          © {year} Abril Digital Co. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
