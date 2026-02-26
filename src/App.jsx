import "./App.css";
import { motion } from "framer-motion";

const WHATSAPP = "https://wa.me/243000000000"; // <-- mets ton vrai numéro

function NavLink({ href, children }) {
  return (
    <a className="navLink" href={href}>
      {children}
    </a>
  );
}

function Pack({ name, price, desc, bullets, highlight, index }) {
  return (
    <motion.div
      className={`pack ${highlight ? "pack--highlight" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      {highlight && <div className="packTag">Recommandé</div>}

      <div className="packTop">
        <div>
          <div className="packName">{name}</div>
          <div className="packDesc">{desc}</div>
        </div>
        <div className="packPrice">
          <div className="packPriceMain">{price}</div>
          <div className="packPriceHint">/ mois</div>
        </div>
      </div>

      <ul className="packList">
        {bullets.map((b, i) => (
          <li key={i} className="packItem">
            <span className="check" /> {b}
          </li>
        ))}
      </ul>

      <a
        className={`btn ${highlight ? "btnPrimary" : "btnSoft"}`}
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
      >
        Démarrer sur WhatsApp
      </a>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <div className="noise" />
        <div className="glow glowA" />
        <div className="glow glowB" />
        <div className="grid" />
      </div>

      <header className="header">
        <div className="brand">
          <span className="mark" />
          <span className="brandText">FlowMind</span>
          <span className="chip">Afrique</span>
        </div>

        <nav className="nav">
          <NavLink href="#packs">Packs</NavLink>
          <NavLink href="#demo">Démo</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </nav>

        <a
          className="btn btnSoft btnSmall"
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main className="main">
        <motion.section
          className="hero"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="heroLeft">
            <div className="kicker">
              Automatisation IA • WhatsApp-first • Mobile-first
            </div>

            <h1 className="h1">
              L'intelligence <span className="text-gradient">Artificielle</span>{" "}
              au service de l'Afrique.
            </h1>

            <p className="lead">
              On met en place des systèmes concrets : relances WhatsApp, prise
              de RDV, réponses automatiques, devis/factures, suivi clients.
              Objectif : <b>plus de ventes</b> et <b>moins de fatigue</b>.
            </p>

            <div className="ctaRow">
              <a
                className="btn btnPrimary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Parler sur WhatsApp
              </a>
              <a className="btn btnGhost" href="#packs">
                Voir les packs
              </a>
            </div>

            <div className="miniStats">
              <div className="stat">
                <div className="statN">48h</div>
                <div className="statT">mise en place</div>
              </div>
              <div className="stat">
                <div className="statN">+30%</div>
                <div className="statT">relances</div>
              </div>
              <div className="stat">
                <div className="statN">0</div>
                <div className="statT">complexité</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="mock">
              <div className="mockTop">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="mockBody">
                <div className="bubble bot">
                  Bonjour 👋 tu veux automatiser quoi ?
                </div>
                <div className="bubble user">Les relances WhatsApp + RDV</div>
                <div className="bubble bot">
                  ✅ Relances auto
                  <br />
                  ✅ Prise de RDV
                  <br />✅ Devis / facture
                </div>
                <div className="bubble user">Ok, on démarre.</div>
              </div>
              <div className="mockBottom">
                <div className="inputFake">Écrire un message…</div>
                <div className="send" />
              </div>
            </div>
          </div>
        </motion.section>

        <section id="packs" className="section">
          <div className="sectionHead">
            <h2 className="h2">3 packs clairs</h2>
            <p className="sub">Choisis un pack. On installe. Tu vends.</p>
          </div>

          <div className="packs">
            {[
              {
                name: "Starter",
                price: "49€",
                desc: "Pour démarrer vite",
                bullets: [
                  "1 automatisation (WhatsApp ou email)",
                  "Relance + message d’accueil",
                  "1 mini page (offre + contact)",
                  "Support 7 jours",
                ],
              },
              {
                name: "Business",
                price: "129€",
                desc: "Pour vendre tous les jours",
                bullets: [
                  "3 automatisations (WhatsApp + RDV + relances)",
                  "Mini CRM (Sheets/Notion)",
                  "Reporting simple",
                  "Support 30 jours",
                ],
                highlight: true,
              },
              {
                name: "Scale",
                price: "299€",
                desc: "Pour équipes & volume",
                bullets: [
                  "Automatisations illimitées",
                  "Intégrations (paiement / stock)",
                  "Workflows sur mesure",
                  "Support prioritaire",
                ],
              },
            ].map((p, i) => (
              <Pack key={i} index={i} {...p} />
            ))}
          </div>
        </section>

        <section id="demo" className="section">
          <div className="demo">
            <div className="demoText">
              <h2 className="h2">Démo vidéo</h2>
              <p className="sub">
                Mets ta vidéo Loom/YouTube ici. 30 secondes, concret,
                avant/après.
              </p>
              <a
                className="btn btnPrimary"
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
              >
                Je veux une démo sur WhatsApp
              </a>
            </div>

            <div className="demoBox">
              <div className="play" />
              <div className="demoHint">Démo FlowMind (placeholder)</div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="sectionHead">
            <h2 className="h2">FAQ</h2>
            <p className="sub">Les questions les plus fréquentes.</p>
          </div>

          <div className="faq">
            <details className="qa">
              <summary>Ça marche sur téléphone ?</summary>
              <p>Oui. Tout est mobile-first et WhatsApp-first.</p>
            </details>
            <details className="qa">
              <summary>En combien de temps c’est prêt ?</summary>
              <p>Souvent 48h pour Starter/Business (selon tes infos).</p>
            </details>
            <details className="qa">
              <summary>Je peux payer comment ?</summary>
              <p>Mobile money / virement / etc.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footLeft">
          <div className="brand">
            <span className="mark" />
            <span className="brandText">FlowMind</span>
          </div>
          <div className="footText">
            Automatisation IA pour l’Afrique — WhatsApp d’abord.
          </div>
        </div>
        <div className="footRight">
          <a href="#packs">Packs</a>
          <a href="#demo">Démo</a>
          <a href="#faq">FAQ</a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>

      <a className="waFab" href={WHATSAPP} target="_blank" rel="noreferrer">
        <span className="waIcon" />
        WhatsApp
      </a>
    </div>
  );
}
