import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Invisible by design",
    description:
      "Redditbooster runs inside a real browser on a real VM. Human-like mouse movements, realistic typing speed, natural scroll patterns. Reddit sees a person, not a script. Because it is one, minus the person.",
  },
  {
    title: "Rules-aware, not rules-ignorant",
    description:
      "Every comment passes through an audit pipeline that checks the specific rules of each subreddit before posting. Your brand stays clean. Your accounts stay alive.",
  },
  {
    title: "More than a comment bot",
    description:
      "It monitors trending topics, identifies threads where your product is actually relevant, crafts on-brand replies, and tracks inbox responses. A full growth workflow, not just a post scheduler.",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$300",
    period: "/mo",
    details: "1 account, 3 subreddits",
    description: "For founders testing the waters on Reddit.",
  },
  {
    name: "Growth",
    price: "$800",
    period: "/mo",
    details: "3 accounts, unlimited subreddits",
    description: "For growth teams ready to scale organic traffic.",
    highlighted: true,
  },
  {
    name: "Agency",
    price: "$2,000",
    period: "/mo",
    details: "10+ accounts, white-label",
    description: "For agencies managing Reddit for multiple clients.",
  },
];

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav
        style={{
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            fontWeight: 400,
          }}
        >
          Redditbooster
        </span>
        <a href="#waitlist" className="btn-primary" style={{ fontSize: "13px", padding: "8px 20px" }}>
          Join Waitlist
        </a>
      </nav>

      {/* Hero */}
      <section
        className="section-padding"
        style={{ textAlign: "center", paddingTop: "60px" }}
      >
        <div className="content-width">
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              maxWidth: "720px",
              margin: "0 auto",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Your Reddit growth team that never sleeps
          </h1>
          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.6,
              color: "var(--color-muted)",
              maxWidth: "560px",
              margin: "24px auto 0",
            }}
          >
            An AI agent that finds relevant threads, writes on-brand comments,
            and drives organic traffic to your product. Without getting your
            accounts banned.
          </p>
          <div style={{ marginTop: "40px" }}>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Social proof line */}
      <section style={{ textAlign: "center", paddingBottom: "40px" }}>
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-muted)",
            letterSpacing: "0.02em",
          }}
        >
          Built for growth marketers and founders at gaming, AI, and SaaS companies
        </p>
      </section>

      {/* Value Props */}
      <section className="section-padding" style={{ background: "var(--color-surface)" }}>
        <div className="content-width">
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            What it actually does
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                style={{
                  border: "0.5px solid var(--color-border)",
                  borderRadius: "12px",
                  background: "var(--color-bg)",
                  padding: "32px",
                }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    marginBottom: "12px",
                  }}
                >
                  {prop.title}
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.7,
                    color: "var(--color-muted)",
                  }}
                >
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it's different */}
      <section className="section-padding">
        <div className="content-width">
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 40px)",
                marginBottom: "24px",
              }}
            >
              Why other Reddit bots get caught
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "var(--color-muted)",
                marginBottom: "24px",
              }}
            >
              Most Reddit automation tools use the API or basic browser scripts.
              Reddit&apos;s anti-spam systems flag these within days. Your accounts
              get suspended. Your brand takes a hit. And you start over.
            </p>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: "var(--color-fg)",
              }}
            >
              Redditbooster takes a different approach. It runs a full virtual
              machine with browser-level automation and OCR-based interaction. It
              doesn&apos;t call Reddit&apos;s API. It reads the screen and moves
              the mouse, like you would. Paired with a rules-auditing pipeline
              that checks every comment against subreddit-specific guidelines, it&apos;s
              built to survive crackdowns while keeping content quality high.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="section-padding"
        id="pricing"
        style={{ background: "var(--color-surface)" }}
      >
        <div className="content-width">
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            Simple pricing
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--color-muted)",
              textAlign: "center",
              marginBottom: "64px",
            }}
          >
            Pay for the traffic, not the compute.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                style={{
                  border: plan.highlighted
                    ? "1px solid var(--color-fg)"
                    : "0.5px solid var(--color-border)",
                  borderRadius: "12px",
                  background: "var(--color-bg)",
                  padding: "40px 32px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    marginBottom: "16px",
                    color: "var(--color-muted)",
                  }}
                >
                  {plan.name}
                </p>
                <p style={{ marginBottom: "4px" }}>
                  <span
                    className="mono"
                    style={{
                      fontSize: "36px",
                      fontWeight: 400,
                      color: "var(--color-fg)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: "15px",
                      color: "var(--color-muted)",
                    }}
                  >
                    {plan.period}
                  </span>
                </p>
                <p
                  className="mono"
                  style={{
                    fontSize: "13px",
                    color: "var(--color-muted)",
                    marginBottom: "16px",
                  }}
                >
                  {plan.details}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    color: "var(--color-muted)",
                    marginBottom: "32px",
                    flex: 1,
                  }}
                >
                  {plan.description}
                </p>
                <a
                  href="#waitlist"
                  className="btn-primary"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    padding: "14px",
                  }}
                >
                  Join Waitlist
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding" id="waitlist">
        <div className="content-width" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              marginBottom: "16px",
            }}
          >
            Get in early
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "var(--color-muted)",
              maxWidth: "480px",
              margin: "0 auto 40px",
            }}
          >
            We&apos;re onboarding a small batch of teams each month. Drop your
            email and we&apos;ll reach out when there&apos;s a spot.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "0.5px solid var(--color-border)",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", color: "var(--color-muted)" }}>
          Built with Boring Combinator
        </p>
      </footer>
    </main>
  );
}
