import React, { useEffect, useRef, useState } from "react";

const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "maquinaria", label: "Maquinaria" },
  { id: "nosotros", label: "Nosotros" },
  { id: "proyectos", label: "Cobertura" },
  { id: "contacto", label: "Contacto" },
];

const services = [
  {
    icon: "⚙",
    title: "Mantención preventiva",
    text: "Planes de mantención para reducir detenciones, anticipar fallas y mantener cada equipo operando con seguridad y continuidad.",
  },
  {
    icon: "⌁",
    title: "Reparación de maquinaria pesada",
    text: "Diagnóstico y reparación de sistemas hidráulicos, eléctricos, transmisión y motor, con criterios técnicos y repuestos confiables.",
  },
  {
    icon: "◎",
    title: "Mecánica automotriz",
    text: "Soporte para camiones, camionetas y flotas livianas: frenos, suspensión, motor, mantenciones y revisión general.",
  },
  {
    icon: "⌖",
    title: "Diagnóstico en terreno",
    text: "Atención móvil para evaluar fallas donde está tu operación y acelerar decisiones con menor tiempo fuera de servicio.",
  },
];

const stats = [
  {
    icon: "🛡",
    value: "10+",
    title: "Años de experiencia",
    text: "Respaldando faenas, talleres y operaciones en distintas regiones del país.",
  },
  {
    icon: "📍",
    value: "Chile",
    title: "Cobertura operativa",
    text: "Atención coordinada desde Arica hasta Magallanes según requerimiento.",
  },
  {
    icon: "◴",
    value: "24/7",
    title: "Respuesta rápida",
    text: "Soporte oportuno para disminuir tiempos de parada y recuperar continuidad.",
  },
  {
    icon: "👷",
    value: "Full",
    title: "Soporte técnico",
    text: "Equipo especializado, herramientas adecuadas y foco permanente en seguridad.",
  },
];

const equipment = [
  { image: "/img/cat-cargadores.png", title: "Cargadores frontales" },
  { image: "/img/cat-excavadoras.png", title: "Excavadoras" },
  { image: "/img/cat-camiones.png", title: "Camiones y transporte" },
  { image: "/img/cat-motoniveladoras.png", title: "Motoniveladoras" },
  { image: "/img/cat-generadores.png", title: "Grupos electrógenos" },
];

const benefits = [
  "Atención técnica personalizada",
  "Evaluación rápida y clara",
  "Cotizaciones sin compromiso",
  "Coordinación confiable y directa",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const activeSectionRef = useRef("inicio");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("header[id], main section[id]"));

    const handleScroll = () => {
      const offset = window.scrollY + 180;
      let current = "inicio";

      sections.forEach((section) => {
        if (section.offsetTop <= offset) {
          current = section.id;
        }
      });

      if (activeSectionRef.current !== current) {
        activeSectionRef.current = current;
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nombre = data.get("nombre") || "Cliente";
    window.alert(`Gracias ${nombre}. Tu solicitud quedó lista para conectarse con WhatsApp o un backend.`);
    event.currentTarget.reset();
  };

  return (
    <div className="app-shell">
      <header className="header" id="inicio">
        <a href="#inicio" className="brand" aria-label="Vasley Service Inicio" onClick={closeMenu}>
          <img src="/img/logo.png" alt="Vasley Service" />
        </a>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Menú principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary header-cta" href="#contacto">
          Solicitar cotización <span>→</span>
        </a>
      </header>

      <main>
        <section className="hero section-grid">
          <div className="hero-content reveal">
            <p className="eyebrow">Mantención, reparación y respuesta técnica en terreno</p>
            <h1>
              Maquinaria
              <br />
              <span>y vehículos</span>
            </h1>
            <p className="hero-lead">
              Soporte confiable para operaciones que no pueden detenerse.
            </p>
            <p className="hero-text">
              Atendemos mantenciones, fallas y diagnósticos con criterio técnico, coordinación directa y foco real en mantener tu operación en marcha.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#contacto">
                Solicitar cotización <span>→</span>
              </a>
              <a className="btn btn-outline" href="https://wa.me/56993775217" target="_blank" rel="noreferrer">
                Hablar por WhatsApp <span>→</span>
              </a>
            </div>
          </div>
          <div className="hero-media reveal delay-1" aria-hidden="true">
            <img src="/img/hero-loader.png" alt="Cargador frontal Vasley Service" fetchPriority="high" />
          </div>
        </section>

        <section className="services" id="servicios">
          <div className="section-title reveal">
            <p className="tag">Nuestros servicios</p>
            <h2>Servicios diseñados para reducir paradas y recuperar continuidad</h2>
          </div>

          <div className="cards-grid">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`service-card reveal ${index ? `delay-${Math.min(index, 4)}` : ""}`.trim()}
              >
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contacto">
                  Solicitar evaluación <span>→</span>
                </a>
                <strong>{String(index + 1).padStart(2, "0")}</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="stats reveal" id="proyectos">
          {stats.map((stat) => (
            <div className="stat" key={stat.title}>
              <span>{stat.icon}</span>
              <strong>{stat.value}</strong>
              <p>
                {stat.title}
                <small>{stat.text}</small>
              </p>
            </div>
          ))}
        </section>

        <section className="about section-grid" id="nosotros">
          <div className="about-copy reveal">
            <p className="tag">Nosotros</p>
            <h2>Comprometidos con la continuidad y el rendimiento de tu operación</h2>
            <p>
              En Vasley Service entregamos soluciones integrales de mantención y reparación para maquinaria pesada, camiones y vehículos de apoyo. Combinamos experiencia técnica, atención directa y criterio operacional para responder con rapidez, claridad y ejecución responsable.
            </p>
            <ul>
              <li>Técnicos especializados y experiencia en terreno</li>
              <li>Herramientas y equipos adecuados para cada intervención</li>
              <li>Repuestos y componentes de calidad comprobada</li>
              <li>Foco permanente en seguridad, orden y continuidad operacional</li>
            </ul>
            <a className="btn btn-outline" href="#contacto">
              Conoce más sobre nosotros <span>→</span>
            </a>
          </div>
          <div className="about-media reveal delay-1">
            <img src="/img/about-operation.png" alt="Equipo Vasley Service trabajando en terreno" loading="lazy" />
          </div>
        </section>

        <section className="equipment" id="maquinaria">
          <div className="section-title reveal">
            <p className="tag">Maquinaria y equipos</p>
            <h2>Experiencia aplicable a distintas líneas de maquinaria, flotas y apoyo industrial</h2>
          </div>
          <div className="equipment-grid">
            {equipment.map((item, index) => (
              <article
                key={item.title}
                className={`equipment-card reveal ${index ? `delay-${Math.min(index, 4)}` : ""}`.trim()}
              >
                <img src={item.image} alt={item.title} loading="lazy" />
                <h3>{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-grid" id="contacto">
          <div className="contact-copy reveal">
            <h2>
              ¿Necesitas apoyo
              <br />
              para tu equipo?
            </h2>
            <p>
              Cuéntanos qué equipo, falla o necesidad tienes y coordinamos una respuesta técnica clara, rápida y adecuada para tu operación.
            </p>
            <a className="whatsapp" href="https://wa.me/56993775217" target="_blank" rel="noreferrer">
              <span>☘</span>
              <small>Escríbenos por WhatsApp</small>
              <strong>+56 9 9377 5217</strong>
            </a>
          </div>

          <form className="quote-form reveal delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="nombre" placeholder="Nombre completo" required />
              <input type="text" name="empresa" placeholder="Empresa" />
            </div>
            <div className="form-row">
              <input type="tel" name="telefono" placeholder="Teléfono / WhatsApp" required />
              <input type="email" name="email" placeholder="Correo electrónico" />
            </div>
            <div className="form-row">
              <select name="servicio" required defaultValue="">
                <option value="" disabled>
                  Tipo de servicio
                </option>
                <option>Mantención preventiva</option>
                <option>Reparación de maquinaria pesada</option>
                <option>Mecánica automotriz</option>
                <option>Diagnóstico en terreno</option>
              </select>
              <input type="text" name="ubicacion" placeholder="Ubicación / Región" />
            </div>
            <textarea name="mensaje" rows="4" placeholder="Cuéntanos en qué equipo o faena necesitas apoyo..." />
            <button className="btn btn-primary" type="submit">
              Solicitar cotización <span>→</span>
            </button>
          </form>

          <div className="contact-benefits reveal delay-2">
            {benefits.map((benefit) => (
              <p key={benefit}>{benefit}</p>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <img src="/img/logo.png" alt="Vasley Service" />
          <p>Mantención, reparación y soporte técnico para maquinaria pesada, camiones y vehículos de apoyo.</p>
          <div className="socials">
            <a href="#contacto" aria-label="Facebook">
              f
            </a>
            <a href="#contacto" aria-label="Instagram">
              ◎
            </a>
            <a href="#contacto" aria-label="LinkedIn">
              in
            </a>
            <a href="#contacto" aria-label="YouTube">
              ▶
            </a>
          </div>
        </div>
        <div>
          <h4>Enlaces rápidos</h4>
          {navItems.map((item) => (
            <a href={`#${item.id}`} key={item.id}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Servicios</h4>
          <a href="#servicios">Mantención preventiva</a>
          <a href="#servicios">Reparación de maquinaria pesada</a>
          <a href="#servicios">Mecánica automotriz</a>
          <a href="#servicios">Diagnóstico en terreno</a>
          <a href="#contacto">Asesoría y coordinación técnica</a>
        </div>
        <div>
          <h4>Contacto</h4>
          <p>📞 +56 9 9377 5217</p>
          <p>✉ vasleyservice@gmail.com</p>
          <p>📍 Fundo 2 Hermanas, Parcela 13</p>
          <p>Lunes a Viernes: 08:00 - 18:00</p>
          <p>Sábado: 08:00 - 13:00</p>
        </div>
        <div className="coverage">
          <img src="/img/mapa-chile.png" alt="Cobertura nacional de Vasley Service" />
          <h4>Cobertura nacional</h4>
        </div>
        <div className="copyright">
          <span>© {currentYear} Vasley Service SpA. Todos los derechos reservados.</span>
          <span>Política de Privacidad | Términos y Condiciones</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
