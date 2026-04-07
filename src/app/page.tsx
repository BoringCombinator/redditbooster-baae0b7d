import WaitlistForm from "@/components/waitlist-form";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "120px 24px 100px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontFamily: "var(--font-mono)",
            color: "var(--color-muted)",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Reddit growth on autopilot
        </p>
        <h1
          style={{
            fontSize: "clamp(36px, 5.5vw, 64px)",
            maxWidth: "720px",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}
        >
          Your Reddit growth team that never sleeps
        </h1>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "var(--color-muted)",
            maxWidth: "560px",
            marginBottom: "48px",
          }}
        >
          An AI agent that finds the right Reddit threads, writes comments that
          sound like you, and sends real traffic to your product. No bans. No
          awkward self-promo. Just growth.
        </p>
        <WaitlistForm />
      </section>

      {/* Social proof line */}
      <section
        style={{
          textAlign: "center",
          padding: "0 24px 100px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            color: "var(--color-muted)",
            fontFamily: "var(--font-mono)",
          }}
        >
          Used by teams at gaming studios, AI startups, and SaaS companies
        </p>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* How it works */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "100px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          How it actually works
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "520px",
            margin: "0 auto 64px",
          }}
        >
          Three things happen every day, automatically.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              step: "01",
              title: "Finds your threads",
              body: "Redditbooster monitors dozens of subreddits for posts where your product is genuinely relevant. Not keyword spam. Actual conversations where you belong.",
            },
            {
              step: "02",
              title: "Writes on-brand replies",
              body: "Every comment matches your voice and tone. It reads like you wrote it after your morning coffee, not like a bot scraped your landing page.",
            },
            {
              step: "03",
              title: "Checks the rules first",
              body: "Before posting, every comment is audited against that subreddit's specific rules. Self-promo rules, link restrictions, flair requirements. All handled.",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                border: "0.5px solid var(--color-border)",
                borderRadius: "12px",
                padding: "32px",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--color-muted)",
                }}
              >
                {item.step}
              </span>
              <h3
                style={{
                  fontSize: "20px",
                  marginTop: "12px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--color-muted)",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* Why it doesn't get banned */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "100px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Why it doesn't get banned
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "540px",
            margin: "0 auto 64px",
          }}
        >
          Most Reddit bots last about a week. Here's why Redditbooster is different.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            {
              title: "Real browser, real behavior",
              body: "Runs inside a full VM with actual Chrome. Mouse movements, scroll patterns, typing cadence. Reddit's anti-spam systems see a human, because the interaction layer acts like one.",
            },
            {
              title: "Not an API hack",
              body: "Most tools hit Reddit's API directly. Reddit flags those fast. Redditbooster uses browser-level automation with OCR-based interaction. No API fingerprints to detect.",
            },
            {
              title: "Rules-aware posting",
              body: "Every subreddit has different rules about links, self-promotion, and formatting. Our auditing pipeline reads and enforces each community's rules before a single comment goes live.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "0.5px solid var(--color-border)",
                borderRadius: "12px",
                padding: "32px",
                backgroundColor: "var(--color-surface)",
              }}
            >
              <h3
                style={{
                  fontSize: "20px",
                  marginBottom: "12px",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--color-muted)",
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* Pricing */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "100px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Simple pricing
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--color-muted)",
            fontSize: "16px",
            maxWidth: "480px",
            margin: "0 auto 64px",
          }}
        >
          One flat price. Everything included.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(260px, 400px)",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {[
            {
              name: "All-in-one",
              price: "$500",
              period: "/mo",
              features: [
                "Unlimited Reddit accounts",
                "Unlimited subreddits",
                "Priority thread targeting",
                "Inbox monitoring",
                "Weekly performance reports",
                "Dedicated support",
                "Custom voice profiles",
              ],
              highlight: true,
            },
          ].map((plan) => (
            <div
              key={plan.name}
              style={{
                border: plan.highlight
                  ? "1px solid var(--color-fg)"
                  : "0.5px solid var(--color-border)",
                borderRadius: "12px",
                padding: "36px 32px",
                backgroundColor: plan.highlight
                  ? "var(--color-fg)"
                  : "var(--color-surface)",
                color: plan.highlight ? "var(--color-bg)" : "var(--color-fg)",
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontFamily: "var(--font-mono)",
                  marginBottom: "16px",
                  opacity: 0.7,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                {plan.name}
              </p>
              <div style={{ marginBottom: "24px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "36px",
                    fontWeight: 400,
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    opacity: 0.6,
                  }}
                >
                  {plan.period}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: "32px",
                  flex: 1,
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      fontSize: "14px",
                      lineHeight: "1.6",
                      padding: "6px 0",
                      borderBottom: `0.5px solid ${
                        plan.highlight
                          ? "rgba(255,255,255,0.12)"
                          : "var(--color-border)"
                      }`,
                      opacity: 0.85,
                    }}
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#waitlist"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "12px 24px",
                  fontSize: "14px",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 500,
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "opacity 150ms ease",
                  backgroundColor: plan.highlight
                    ? "var(--color-bg)"
                    : "var(--color-fg)",
                  color: plan.highlight
                    ? "var(--color-fg)"
                    : "var(--color-bg)",
                }}
              >
                Join Waitlist
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* FAQ */}
      <section
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "100px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            textAlign: "center",
            marginBottom: "64px",
          }}
        >
          Questions
        </h2>
        <div
          style={{
            maxWidth: "640px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          {[
            {
              q: "Will my Reddit account get banned?",
              a: "That's the whole point. Redditbooster runs in a real browser with human-like interaction patterns. It checks every subreddit's rules before posting. We built it specifically to survive Reddit's anti-spam systems.",
            },
            {
              q: "How is this different from other Reddit bots?",
              a: "Most tools use Reddit's API directly or run basic scripts. Reddit catches those fast. We run a full VM with browser-level automation and OCR-based interaction. It looks like a person because it behaves like one.",
            },
            {
              q: "Can I control what gets posted?",
              a: "Yes. You set your product description, voice guidelines, and topic boundaries. Every comment is generated within those constraints. You can review and approve comments before they go live, or let the system run autonomously.",
            },
            {
              q: "What kind of results should I expect?",
              a: "It depends on your product and target subreddits. Most customers see measurable referral traffic within the first two weeks. The comments are designed to be genuinely helpful, which means they get upvotes and drive clicks.",
            },
            {
              q: "Is there a contract?",
              a: "No. Month-to-month billing. Cancel anytime.",
            },
          ].map((item) => (
            <div key={item.q}>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "8px",
                }}
              >
                {item.q}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.65",
                  color: "var(--color-muted)",
                }}
              >
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div style={{ borderTop: "0.5px solid var(--color-border)" }} />
      </div>

      {/* Final CTA */}
      <section
        id="waitlist"
        style={{
          textAlign: "center",
          padding: "100px 24px 120px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            marginBottom: "16px",
          }}
        >
          Ready to grow on Reddit?
        </h2>
        <p
          style={{
            fontSize: "16px",
            color: "var(--color-muted)",
            maxWidth: "440px",
            margin: "0 auto 40px",
          }}
        >
          Join the waitlist. We'll reach out when your spot opens up.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
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
        <p
          style={{
            fontSize: "13px",
            color: "var(--color-muted)",
          }}
        >
          Built with Boring Combinator
        </p>
      </footer>
    </main>
  );
}
