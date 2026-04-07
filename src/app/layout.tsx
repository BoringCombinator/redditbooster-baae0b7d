import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Redditbooster - Your Reddit growth team that never sleeps",
  description:
    "An AI agent that finds relevant Reddit threads, writes on-brand comments, and drives organic traffic to your product.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
