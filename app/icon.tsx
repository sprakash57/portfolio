import { ImageResponse } from "next/og";

// Browser-tab icon: the "~" prompt glyph from the header, in the site's accent colour.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0d0d0c",
          borderRadius: 12,
          color: "#e86b4d",
          fontSize: 52,
          fontWeight: 700,
          paddingBottom: 10,
        }}
      >
        ~
      </div>
    ),
    size,
  );
}
