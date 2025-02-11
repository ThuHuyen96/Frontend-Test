import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "WIZZOR",
    short_name: "wizzor",
    description: "wizzor",
    start_url: "/index.html",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/wizzor.png",
        sizes: "56x56",
        type: "image/png",
      },
    ],
  }
}
