import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Plexo — Retail Operations, Perfected";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4f46e5 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Logo circles */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <circle cx="20" cy="22" r="10" fill="#818CF8" />
            <circle cx="44" cy="22" r="10" fill="#A78BFA" />
            <circle cx="32" cy="44" r="10" fill="#34D399" />
            <line x1="26" y1="26" x2="38" y2="26" stroke="#818CF8" strokeWidth="4" />
            <line x1="24" y1="30" x2="29" y2="40" stroke="#818CF8" strokeWidth="4" />
            <line x1="40" y1="30" x2="35" y2="40" stroke="#A78BFA" strokeWidth="4" />
          </svg>
          <div style={{ fontSize: "64px", fontWeight: 800, color: "white", letterSpacing: "-2px" }}>
            Plexo
          </div>
        </div>

        <div
          style={{
            fontSize: "36px",
            fontWeight: 700,
            color: "white",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.3,
          }}
        >
          Retail Operations, Perfected.
        </div>

        <div
          style={{
            fontSize: "20px",
            color: "#c7d2fe",
            textAlign: "center",
            maxWidth: "700px",
            marginTop: "16px",
            lineHeight: 1.5,
          }}
        >
          The all-in-one platform to manage tasks, audits, training, and campaigns across every
          store.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "40px",
            padding: "12px 32px",
            background: "white",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: 600,
            color: "#4f46e5",
          }}
        >
          plexoapp.com
        </div>
      </div>
    ),
    { ...size }
  );
}
