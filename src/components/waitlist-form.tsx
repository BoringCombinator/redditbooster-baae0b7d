"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug: "redditbooster-baae0b7d",
          email,
        }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px 0",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            color: "var(--color-fg)",
          }}
        >
          You're on the list. We'll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        maxWidth: "440px",
        width: "100%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          flex: "1 1 260px",
          padding: "12px 16px",
          fontSize: "15px",
          fontFamily: "var(--font-sans)",
          border: "0.5px solid rgba(0,0,0,0.15)",
          borderRadius: "8px",
          outline: "none",
          backgroundColor: "var(--color-bg)",
          color: "var(--color-fg)",
          transition: "border-color 150ms ease",
          minWidth: "0",
        }}
        onFocus={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.4)")
        }
        onBlur={(e) =>
          (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")
        }
      />
      <button
        type="submit"
        disabled={status === "loading"}
        style={{
          padding: "12px 28px",
          fontSize: "14px",
          fontFamily: "var(--font-sans)",
          fontWeight: 500,
          backgroundColor: "var(--color-fg)",
          color: "var(--color-bg)",
          border: "none",
          borderRadius: "8px",
          cursor: status === "loading" ? "wait" : "pointer",
          transition: "opacity 150ms ease",
          opacity: status === "loading" ? 0.6 : 1,
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) => {
          if (status !== "loading") e.currentTarget.style.opacity = "0.8";
        }}
        onMouseLeave={(e) => {
          if (status !== "loading") e.currentTarget.style.opacity = "1";
        }}
      >
        {status === "loading" ? "Joining..." : "Join Waitlist"}
      </button>
      {status === "error" && (
        <p
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            color: "#b91c1c",
            marginTop: "4px",
          }}
        >
          {errorMessage}
        </p>
      )}
    </form>
  );
}
