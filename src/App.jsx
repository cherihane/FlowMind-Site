import "./App.css";

const WHATSAPP_LINK = "https://wa.me/243000000000"; // <-- change ton numéro

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Card({ title, price, subtitle, items, cta }) {
  return (
    <div className="card">
      <div className="cardTop">
        <div>
          <h3 className="cardTitle">{title}</h3>
          <p className="cardSub">{subtitle}</p>
        </div>
        <div className="price">
          <div className="priceMain">{price}</div>
          <div className="priceHint">par mois</div>
        </div>
      </div>

      <ul className="list">
        {items.map((it, idx) => (
          <li key={idx} className="listItem">
            <span className="dot" />
            {it}
          </li>
        ))}
      </ul>

      <a
        className="btn btnPrimary"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
      >
        {cta}
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="grid" />
      </div>

      <header className="header">
        <div className="brand">
          <div className="logo" />
          <span>FlowMind</span>
          <Badge>Afrique</Badge>
        </div>

        <nav className="nav">
          <a href="#packs">Packs</a>
          <a href="#demo">Démo</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a
          className="btn btnGhost"
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
      </header>

      <main className="main">
        <section className="hero">
          <div className="heroLeft">
            <div className="heroBadges">
              <Pill>Automatisation</Pill>
              <Pill>IA + WhatsApp</Pill>
              <Pill>Mobile-first</Pill>
            </div>

            <h1 className="h1">
              L’agence IA qui <span className="grad">automatise</span> ton
              business en Afrique.
            </h1>

            <p className="lead">
              On remplace les tâches répétitives par des systèmes simples :
              WhatsApp, prise de RDV, relances, factures, reporting… Tu gagnes
              du temps, tu vends plus.
            </p>

            <div className="heroCtas">
              <a
                className="btn btnPrimary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Parler sur WhatsApp
              </a>
              <a className="btn btnSoft" href="#packs">
                Voir les packs
              </a>
            </div>

            <div className="trust">
              <div className="trustItem">
                <div className="trustN">48h</div>
                <div className="trustT">mise en place</div>
              </div>
              <div className="trustItem">
                <div className="trustN">+30%</div>
                <div className="trustT">relances & ventes</div>
              </div>
              <div className="trustItem">
                <div className="trustN">0</div>
                <div className="trustT">complexité</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="phone">
              <div className="phoneTop">
                <div className="cam" />
                <div className="speaker" />
              </div>
              <div className="chat">
                <div className="msg bot">
                  Bonjour 👋 Je suis FlowMind. Tu veux automatiser quoi ?
                </div>
                <div className="msg user">
                  Les relances WhatsApp + la prise de RDV.
                </div>
                <div className="msg bot">
                  Parfait. Je peux :
                  <br />✅ Relancer automatiquement
                  <br />✅ Prendre RDV
                  <br />✅ Envoyer devis / facture
                </div>
                <div className="msg user">Combien ça coûte ?</div>
                <div className="msg bot">
                  On a 3 packs clairs. Tu veux qu’on fasse une démo en 5 minutes
                  ?
                </div>
              </div>
              <div className="phoneBottom">
                <div className="inputFake">Écrire un message…</div>
                <div className="send" />
              </div>
            </div>
          </div>
        </section>

        <section id="packs" className="section">
          <div className="sectionHead">
            <h2 className="h2">3 packs clairs</h2>
            <p className="sub">
              Pas de blabla. Tu choisis, on installe, tu vends.
            </p>
          </div>

          <div className="cards">
            <Card
              title="Starter"
              subtitle="Pour démarrer vite"
              price="49€"
              items={[
                "1 automatisation (WhatsApp ou email)",
                "Relances + message d’accueil",
                "1 page simple (contact + offre)",
                "Support 7 jours",
              ]}
              cta="Je veux Starter"
            />
            <div className="card cardFeatured">
              <div className="featuredTag">Le plus choisi</div>
              <Card
                title="Business"
                subtitle="Pour vendre tous les jours"
                price="129€"
                items={[
                  "3 automatisations (WhatsApp + RDV + relances)",
                  "Mini CRM (Google Sheets / Notion)",
                  "Dashboard simple + reporting",
                  "Support 30 jours",
                ]}
                cta="Je veux Business"
              />
            </div>
            <Card
              title="Scale"
              subtitle="Pour équipes & volume"
              price="299€"
              items={[
                "Automatisations illimitées",
                "Intégrations (paiement, stock, ERP)",
                "Workflows sur mesure",
                "Support prioritaire",
              ]}
              cta="Je veux Scale"
            />
          </div>
        </section>

        <section id="demo" className="section">
          <div className="demo">
            <div>
              <h2 className="h2">Une démo vidéo</h2>
              <p className="sub">
                Remplace cette zone par ta vidéo (Loom / YouTube). Le but :
                montrer en 30 secondes ce que ça fait.
              </p>
              <a
                className="btn btnPrimary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                Je veux une démo sur WhatsApp
              </a>
            </div>

            <div className="video">
              <div className="videoInner">
                <div className="play" />
                <div className="videoText">Démo FlowMind (placeholder)</div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <div className="sectionHead">
            <h2 className="h2">FAQ</h2>
            <p className="sub">Questions fréquentes</p>
          </div>

          <div className="faq">
            <details className="qa">
              <summary>Ça marche sur téléphone ?</summary>
              <p>
                Oui. On pense mobile-first. Ton client clique WhatsApp et ça
                vend.
              </p>
            </details>
            <details className="qa">
              <summary>En combien de temps c’est prêt ?</summary>
              <p>Souvent 48h pour Starter / Business (selon tes infos).</p>
            </details>
            <details className="qa">
              <summary>Vous faites des démos ?</summary>
              <p>Oui. Sur WhatsApp, rapide et concret.</p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footLeft">
          <div className="brand">
            <div className="logo" />
            <span>FlowMind</span>
          </div>
          <p className="footText">
            Automatisation IA pour l’Afrique — WhatsApp d’abord.
          </p>
        </div>

        <div className="footRight">
          <a href="#packs">Packs</a>
          <a href="#demo">Démo</a>
          <a href="#faq">FAQ</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </footer>

      <a
        className="waFab"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <span className="waDot" />
        WhatsApp
      </a>
    </div>
  );
}
