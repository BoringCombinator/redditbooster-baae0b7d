"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

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
        throw new Error("Something went wrong. Try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div style={{ textAlign: "center", padding: "24px 0" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            color: "var(--color-fg)",
            marginBottom: "8px",
          }}
        >
          You&apos;re on the list.
        </p>
        <p style={{ fontSize: "15px", color: "var(--color-muted)" }}>
          We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          flexDirection: "column",
        }}
      >
        <input
          type="email"
          required
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            fontSize: "15px",
            fontFamily: "var(--font-sans)",
            border: "0.5px solid var(--color-border)",
            borderRadius: "8px",
            background: "var(--color-bg)",
            color: "var(--color-fg)",
            outline: "none",
            transition: "border-color 150ms ease",
          }}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary"
          style={{
            width: "100%",
            padding: "14px 28px",
            opacity: status === "loading" ? 0.6 : 1,
          }}
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p style={{ fontSize: "14px", color: "#b91c1c", textAlign: "center" }}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
