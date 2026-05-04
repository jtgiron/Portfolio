import { ImageResponse } from "next/og";
import { personalInfo } from "@/data/personal";

export const runtime = "edge";
export const alt = `${personalInfo.name} — ${personalInfo.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#fafafa",
              letterSpacing: "-0.025em",
            }}
          >
            {personalInfo.name}
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#34d399",
            }}
          >
            {personalInfo.title}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
