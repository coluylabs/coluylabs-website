export default function Home() {
  return (
    <>
      <nav className="nav">
        <div className="wrap nav-in">
          <a className="brand" href="#top" aria-label="Coluy Labs, home">
            <svg width="26" height="26" viewBox="0 0 100 100" aria-hidden="true">
              <use href="#mark" />
            </svg>
            <span>Coluy Labs</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#notes">Notes</a>
            <a href="#about">About</a>
            <a className="nav-mail" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <header id="top">
        <div className="wrap hero">
          <div className="hero-col">
            <div className="label">Applied cryptography · Ho Chi Minh City</div>
            <h1>
              Notes and code from building <em>MPC systems</em>.
            </h1>
            <p className="lead">
              I work on multi-party computation, threshold signatures, post-quantum
              cryptography — and, lately, tooling for cryptographic security review.
              This page collects what I&apos;ve built and what I&apos;ve written along the
              way, mostly so other people building the same things don&apos;t have to
              start from zero.
            </p>
            <div className="actions">
              <a className="btn" href="#notes">
                Read the notes
              </a>
              <a className="link" href="#work">
                See what I build
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap strip-in">
          <span>
            <b>MPC</b> DKG · secret sharing
          </span>
          <span>
            <b>Threshold</b> DKLS23 · ECDSA
          </span>
          <span>
            <b>ZK</b> Plonky2 · Halo2
          </span>
          <span>
            <b>PQC</b> ML-KEM · ML-DSA
          </span>
          <span>
            <b>Review</b> audit tooling
          </span>
        </div>
      </div>

      <section id="work">
        <div className="wrap sec">
          <div className="label" style={{ marginBottom: 32 }}>
            Work
          </div>
          <div className="cards">
            <div className="card">
              <div className="card-head">
                <div className="status status-live">Live</div>
                <h2>DefiShard</h2>
              </div>
              <p>
                A self-custodial MPC wallet, built end-to-end: cryptographic SDK, relay
                server, browser extension and mobile app.
              </p>
              <div className="card-meta">
                2-of-2 DKG · browser-initiated, mobile-approved
                <br />
                Threshold ECDSA, no key ever assembled
              </div>
              <a
                className="link"
                href="https://defishard.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                defishard.com
              </a>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="status">Building</div>
                <h2>Agent Wallet</h2>
              </div>
              <p>
                A signing layer for AI agents: an agent can transact, but never move
                funds on its own.
              </p>
              <div className="card-meta">
                2-of-3 · agent, policy engine, human approver
                <br />A circuit-breaker for autonomous systems
              </div>
              <span className="link-soft">Write-up coming</span>
            </div>
            <div className="card">
              <div className="card-head">
                <div className="status">Stealth</div>
                <h2>SecAudit</h2>
              </div>
              <p>
                A platform for cryptographic security review — carrying a design, its
                code and its findings through one reconciled assessment instead of a PDF
                per engagement.
              </p>
              <div className="card-meta">
                Closed pilot · not public yet
                <br />
                Ask me if this is your problem too
              </div>
              <a
                className="link-soft"
                href="mailto:hi@coluylabs.org?subject=Audit%20platform"
              >
                Request a look
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="notes" className="sec-alt">
        <div className="wrap sec">
          <div className="sec-head">
            <div className="label">Notes</div>
            <p>
              Write-ups from the DefiShard build — the cryptography, the engineering,
              and the parts that went wrong first.
            </p>
          </div>
          <div className="notes">
            <a
              className="note"
              href="https://defishard.com/blog/introduction-to-mpc-wallets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="note-cat">MPC 101</span>
              <span className="note-title">
                Introduction to MPC wallets: why your key should never exist
              </span>
              <span className="note-date">Jan 2026</span>
              <span className="note-arrow">→</span>
            </a>
            <a
              className="note"
              href="https://defishard.com/blog/building-threshold-ecdsa-from-scratch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="note-cat">Cryptography</span>
              <span className="note-title">Building threshold ECDSA from scratch</span>
              <span className="note-date">Mar 2026</span>
              <span className="note-arrow">→</span>
            </a>
            <a
              className="note"
              href="https://defishard.com/blog/defishard-architecture-deep-dive"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="note-cat">Architecture</span>
              <span className="note-title">MPC 2-of-2 architecture deep dive</span>
              <span className="note-date">Mar 2026</span>
              <span className="note-arrow">→</span>
            </a>
            <a
              className="note"
              href="https://defishard.com/blog/building-mpc-relay-server"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="note-cat">Engineering</span>
              <span className="note-title">Building the MPC relay server</span>
              <span className="note-date">Mar 2026</span>
              <span className="note-arrow">→</span>
            </a>
            <a
              className="note"
              href="https://defishard.com/blog/wallet-security-compared"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="note-cat">Analysis</span>
              <span className="note-title">
                Wallet security compared: DefiShard vs MetaMask, Ledger, Safe, ZenGo
              </span>
              <span className="note-date">Mar 2026</span>
              <span className="note-arrow">→</span>
            </a>
            <a
              className="note"
              href="https://defishard.com/blog/backup-restore-guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="note-cat">Guide</span>
              <span className="note-title">Backup, restore &amp; staying safe</span>
              <span className="note-date">Mar 2026</span>
              <span className="note-arrow">→</span>
            </a>
            <a
              className="notes-all"
              href="https://defishard.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              All posts on defishard.com/blog →
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="sec-line">
        <div className="wrap about">
          <div className="bio">
            <div className="label">About</div>
            <h2>Hieu Tran</h2>
            <p>
              Ten years turning cryptographic research into systems that ship — MPC,
              threshold signatures, and increasingly post-quantum. Previously Crossbar,
              Kyber Network and Incognito; PhD-track at Singapore Management University,
              with work published at ACM ASIACCS.
            </p>
            <p>
              Coluy Labs is just the name I put on the things I build outside of work.
              If something here is useful, wrong, or worth arguing about — I&apos;d like
              to hear it.
            </p>
          </div>
          <div className="about-mark">
            <div className="label">The mark</div>
            <svg width="120" height="120" viewBox="0 0 100 100" aria-hidden="true">
              <use href="#mark" />
            </svg>
            <p>
              A bamboo waterwheel from the banks of the Trà Khúc river in Quảng Ngãi —
              rows of them once lifted water into the fields by turning, holding nothing
              back.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="wrap contact-in">
          <div className="contact-col">
            <div className="label">Contact</div>
            <h2>
              If something here is useful, wrong, or worth arguing about — tell me.
            </h2>
            <a className="contact-mail" href="mailto:hi@coluylabs.org">
              hi@coluylabs.org
            </a>
          </div>
          <div className="contact-links">
            <a
              className="row"
              href="https://www.linkedin.com/in/ngoc-hieu-tran-6b17633b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <span>/in/ngoc-hieu-tran-6b17633b</span>
            </a>
            <a
              className="row"
              href="https://defishard.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Project</span>
              <span>defishard.com</span>
            </a>
            <a
              className="row"
              href="https://defishard.com/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Blog</span>
              <span>defishard.com/blog</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="foot">
        <div className="wrap foot-in">
          <span className="foot-brand">
            <svg width="18" height="18" viewBox="0 0 100 100" aria-hidden="true">
              <use href="#mark" />
            </svg>
            © 2026 Coluy Labs · Applied cryptography
          </span>
          <a href="mailto:hi@coluylabs.org">Say hi →</a>
        </div>
      </footer>
    </>
  );
}
