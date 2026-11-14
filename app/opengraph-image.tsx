import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

// The link preview shown on LinkedIn, Slack, X, etc. Generated at build time.
export const alt = `${profile.name}: ${profile.roles.join(" & ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photo = await readFile(join(process.cwd(), "public", profile.photo));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "#0d0d0c",
          backgroundImage: "radial-gradient(#272623 1.5px, transparent 1.5px)",
          backgroundSize: "28px 28px",
          color: "#ecebe6",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
          <div style={{ display: "flex", fontSize: 26, color: "#9a978f" }}>
            <span style={{ color: "#7cc69a" }}>guest@sunnyprakash.com</span>
            <span>:~$ whoami</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20, fontSize: 84, fontWeight: 700, letterSpacing: -2 }}>
            {profile.name}
            <div style={{ width: 22, height: 76, marginLeft: 12, background: "#e86b4d" }} />
          </div>
          <div style={{ marginTop: 16, fontSize: 36, color: "#e86b4d" }}>{profile.roles.join(" · ")}</div>
          <div style={{ marginTop: 28, fontSize: 26, lineHeight: 1.4, color: "#9a978f" }}>
            {`${profile.yearsOfExperience} years in web and mobile · AI-native teams · multi-agent systems · ${profile.location}`}
          </div>
        </div>
        <img src={photoSrc} width={300} height={300} alt="" style={{ borderRadius: 16, border: "2px solid #272623", objectFit: "cover" }} />
      </div>
    ),
    size,
  );
}
