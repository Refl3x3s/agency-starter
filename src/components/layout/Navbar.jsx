import Container from "../UI/Container";
import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="border-b border-neutral-800 bg-neutral-950">
      <Container>
        <div className="flex items-center justify-between py-5">

          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold tracking-tight text-white"
          >
            Abril Digital Co.
          </a>

          {/* Navegación */}
          <ul className="hidden items-center gap-8 text-sm font-medium text-neutral-300 lg:flex">
            <li>
              <a
                href="#servicios"
                className="transition-colors hover:text-white"
              >
                Servicios
              </a>
            </li>

            <li>
              <a
                href="#proyectos"
                className="transition-colors hover:text-white"
              >
                Proyectos
              </a>
            </li>

            <li>
              <a
                href="#proceso"
                className="transition-colors hover:text-white"
              >
                Proceso
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                className="transition-colors hover:text-white"
              >
                Contacto
              </a>
            </li>
          </ul>

          {/* CTA */}
          <Button variant="secondary">
            Agenda una asesoría gratuita
          </Button>

        </div>
      </Container>
    </nav>
  );
}

export default Navbar;