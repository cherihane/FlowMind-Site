import React, { useEffect, useMemo, useRef, useState } from "react";
import "./styles.css";

const WHATSAPP =
  "https://wa.me/243000000000?text=Bonjour%20FlowMind%20%E2%9C%A8%20Je%20veux%20automatiser%20mon%20business.";

const NAV = [
  { id: "process", label: "Procédé" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projet" },
  { id: "contact", label: "Contact" },
];

const PACKS = [
  {
    name: "Abonnement",
    badge: "On",
    price: "Mensuel",
    desc: "Pilotage + amélioration continue",
    bullets: [
      "Audit initial",
      "Améliorations chaque mois",
      "Support prioritaire",
      "Suivi KPI",
    ],
    accent: "violet",
  },
  {
    name: "Basique",
    badge: "Start",
    price: "25 000 FCFA",
    desc: "Pour démarrer vite",
    bullets: [
      "1 automatisation",
      "Google Sheets / WhatsApp",
      "Livraison rapide",
      "Support 7 jours",
    ],
    accent: "cyan",
  },
  {
    name: "Pro",
    badge: "Devis",
    price: "Sur devis",
    desc: "Système complet",
    bullets: [
      "3–10 automatisations",
      "Intégrations avancées",
      "Docs + formation",
      "Maintenance possible",
    ],
    accent: "pink",
    featured: true,
  },
];

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // petite animation “parallax” des halos, légère (safe perf)
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 2 - 1;
      const y = ((e.clientY - r.top) / r.height) * 2 - 1;
      el.style.setProperty("--mx", x.toFixed(3));
      el.style.setProperty("--my", y.toFixed(3));
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <div className="app">
      {/* Background nebula */}
      <div className="bg" aria-hidden="true">
        <div className="grain" />
        <div className="glow g1" />
        <div className="glow g2" />
        <div className="glow g3" />
        <div className="grid" />
      </div>

      {/* Top nav (glass) */}
      <header className={`topbar ${scrolled ? "isScrolled" : ""}`}>
        <div className="container topbarInner">
          <a className="brand" href="#top" aria-label="FlowMind">
            <span className="brandMark" />
            <span className="brandText">
              <span className="brandName">FlowMind</span>
              <span className="brandSub">Agence IA • Afrique</span>
            </span>
          </a>

          <nav className="nav">
            {NAV.map((n) => (
              <a key={n.id} className="navLink" href={`#${n.id}`}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="navCtas">
            <a className="btn btnGhost" href="#services">
              Nos services
            </a>
            <a
              className="btn btnPrimary"
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main id="top">
        <section className="hero" ref={heroRef}>
          <div className="container heroGrid">
            <div className="heroLeft">
              <div className="pill">
                <span className="dot" />
                L’IA à votre service.
              </div>

              <h1 className="h1">
                Nous sommes votre{" "}
                <span className="grad">Partenaire IA 360°</span>
              </h1>

              <p className="lead">
                Nous transformons les entreprises en leaders IA :
                automatisations, assistants, intégrations, formation.
              </p>

              <div className="heroActions">
                <a className="btn btnPrimary btnBig" href="#process">
                  Découvrir le procédé
                </a>
                <a
                  className="btn btnGhost btnBig"
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                >
                  Nous contacter
                </a>
              </div>

              <div className="heroStats">
                <div className="stat">
                  <div className="statK">Rapidité</div>
                  <div className="statV">Déploiements agiles</div>
                </div>
                <div className="stat">
                  <div className="statK">Sécurité</div>
                  <div className="statV">Bonnes pratiques</div>
                </div>
                <div className="stat">
                  <div className="statK">Précision</div>
                  <div className="statV">Qualité & QA</div>
                </div>
              </div>
            </div>

            <div className="heroRight">
              {/* “Orb / device” abstract (CSS) */}
              <div className="orbCard">
                <div className="orb" />
                <div className="orbRing r1" />
                <div className="orbRing r2" />
                <div className="orbRing r3" />
                <div className="orbMeta">
                  <div className="metaTitle">FlowMind Stack</div>
                  <div className="metaRow">
                    <span className="chip">WhatsApp</span>
                    <span className="chip">Sheets</span>
                    <span className="chip">CRM</span>
                    <span className="chip">IA</span>
                  </div>
                </div>
              </div>

              <div className="miniCards">
                <MiniCard
                  title="Audit"
                  text="On analyse vos tâches & blocages."
                />
                <MiniCard title="Build" text="On construit l’automatisation." />
                <MiniCard title="Scale" text="On optimise + maintient." />
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section" id="process">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Notre procédé</h2>
              <p className="muted">
                Une méthode simple, claire, pour livrer vite — comme sur
                ChatflowAI : Contact → Consulting → Formation → Intégration &
                Dev. :contentReference[oaicite:1]{(index = 1)}
              </p>
            </div>

            <div className="steps">
              <Step
                n="01"
                title="Contact"
                text="On comprend vos besoins, objectifs et contraintes."
              />
              <Step
                n="02"
                title="Consulting"
                text="On identifie les cas d’usage et le plan d’action."
              />
              <Step
                n="03"
                title="Formation"
                text="On forme votre équipe (outils, process, IA)."
              />
              <Step
                n="04"
                title="Intégration & Dev"
                text="On déploie, teste, documente, optimise."
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section" id="services">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Nos services</h2>
              <p className="muted">
                Automatisation + IA appliquée aux opérations (vente, support,
                admin, reporting).
              </p>
            </div>

            <div className="cards">
              <ServiceCard
                title="Automatisation WhatsApp"
                text="Suivi clients, réponses rapides, qualification, relances, tickets."
                tags={["Mobile-first", "Concret", "Ventes"]}
              />
              <ServiceCard
                title="Back-office & Reporting"
                text="Google Sheets/CRM, dashboards, alertes, pipeline commercial."
                tags={["KPI", "Clarté", "Contrôle"]}
              />
              <ServiceCard
                title="Assistants IA"
                text="Agent support, agent interne, base de connaissances, scripts."
                tags={["IA", "Gain de temps", "Qualité"]}
              />
              <ServiceCard
                title="Formation & Adoption"
                text="Former une équipe + process, pour que ça reste après nous."
                tags={["Méthode", "Simplicité", "Impact"]}
              />
            </div>
          </div>
        </section>

        {/* Pricing / Projet */}
        <section className="section" id="projects">
          <div className="container">
            <div className="sectionHead">
              <h2 className="h2">Packs</h2>
              <p className="muted">
                Trois offres claires — comme sur la page (On / Abonnement /
                Basique / Pro / Devis). :contentReference[oaicite:2]
                {(index = 2)}
              </p>
            </div>

            <div className="pricing">
              {PACKS.map((p) => (
                <PriceCard key={p.name} {...p} />
              ))}
            </div>

            <div className="centerCta">
              <a
                className="btn btnPrimary btnBig"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Demander un devis sur WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contactGrid">
              <div>
                <h2 className="h2">Nous contacter</h2>
                <p className="muted">
                  Tu veux un rendu “premium” + un système qui vend : on démarre
                  par une démo + une proposition claire.
                </p>

                <div className="contactActions">
                  <a
                    className="btn btnPrimary btnBig"
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp (réponse rapide)
                  </a>
                  <a className="btn btnGhost btnBig" href="#services">
                    Revoir les services
                  </a>
                </div>

                <div className="fine">
                  <span className="chip">Mobile</span>
                  <span className="chip">Rapide</span>
                  <span className="chip">Sérieux</span>
                </div>
              </div>

              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                  window.open(WHATSAPP, "_blank", "noreferrer");
                }}
              >
                <div className="formRow">
                  <label>
                    Nom
                    <input placeholder="Ton nom" required />
                  </label>
                  <label>
                    WhatsApp
                    <input placeholder="+243..." required />
                  </label>
                </div>

                <label>
                  Besoin
                  <textarea
                    placeholder="Explique ce que tu veux automatiser (vente, support, admin...)"
                    required
                  />
                </label>

                <button className="btn btnPrimary btnBig" type="submit">
                  Envoyer (WhatsApp)
                </button>

                <p className="muted tiny">
                  En cliquant, tu seras redirigée vers WhatsApp avec ton message
                  (simple & efficace).
                </p>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footerInner">
            <div className="brandFoot">
              <span className="brandMark" />
              <div>
                <div className="brandName">FlowMind</div>
                <div className="muted tiny">
                  © {year} — Automatisation IA • Afrique
                </div>
              </div>
            </div>

            <div className="footerLinks">
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`} className="footerLink">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        </footer>

        {/* sticky CTA mobile */}
        <a
          className="stickyWA"
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp — Démarrer
        </a>
      </main>
    </div>
  );
}

function MiniCard({ title, text }) {
  return (
    <div className="miniCard">
      <div className="miniTitle">{title}</div>
      <div className="muted miniText">{text}</div>
    </div>
  );
}

function Step({ n, title, text }) {
  return (
    <div className="step">
      <div className="stepN">{n}</div>
      <div className="stepBody">
        <div className="stepTitle">{title}</div>
        <div className="muted">{text}</div>
      </div>
    </div>
  );
}

function ServiceCard({ title, text, tags }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="muted">{text}</div>
      <div className="tagRow">
        {tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function PriceCard({ name, badge, price, desc, bullets, accent, featured }) {
  return (
    <div className={`priceCard ${featured ? "featured" : ""} accent-${accent}`}>
      <div className="priceTop">
        <div className="priceName">
          <span className="badge">{badge}</span>
          {name}
        </div>
        <div className="priceValue">{price}</div>
      </div>
      <div className="muted">{desc}</div>

      <ul className="ul">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <a
        className={`btn ${featured ? "btnPrimary" : "btnGhost"} full`}
        href="#contact"
      >
        Choisir {name}
      </a>
    </div>
  );
}
