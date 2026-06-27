import { useState } from "react";
import flower1 from "../assets/s1.png";
import flower2 from "../assets/s2.png";
import flower3 from "../assets/s3.png";
import flower4 from "../assets/s4.png";
import flower5 from "../assets/s5.png";
import flower6 from "../assets/s6.png";
import flower7 from "../assets/s7.png";
import flower8 from "../assets/s8.png";
import flower9 from "../assets/s9.png";
import flower10 from "../assets/s10.png";
import flower11 from "../assets/s11.png";
import flower12 from "../assets/s12.png";

const flowers = [
  {
    id: 1,
    name: "Crimson Peony",
    category: "Peonies",
    season: "Spring",
    color: "#C8524A",
    bg: "#F9E8E8",
    image: flower1,
    size: "tall",
  },
  {
    id: 2,
    name: "Midnight Rose",
    category: "Roses",
    season: "Summer",
    color: "#7A2040",
    bg: "#F5E0E8",
    image: flower2,
    size: "short",
  },
  {
    id: 3,
    name: "Golden Sunflower",
    category: "Wildflowers",
    season: "Summer",
    color: "#D4A017",
    bg: "#FDF5DC",
    image: flower3,
    size: "tall",
  },
  {
    id: 4,
    name: "Lavender Dream",
    category: "Wildflowers",
    season: "Spring",
    color: "#7B68C8",
    bg: "#EDE8F8",
    image: flower4,
    size: "short",
  },
  {
    id: 5,
    name: "White Orchid",
    category: "Orchids",
    season: "All Year",
    color: "#A09080",
    bg: "#F5F2EE",
    image: flower5,
    size: "tall",
  },
  {
    id: 6,
    name: "Blush Tulip",
    category: "Tulips",
    season: "Spring",
    color: "#E8A0A0",
    bg: "#FDF0F0",
    image: flower6,
    size: "short",
  },
  {
    id: 7,
    name: "Ocean Hydrangea",
    category: "Wildflowers",
    season: "Summer",
    color: "#5080B8",
    bg: "#E4EEF8",
    image: flower7,
    size: "short",
  },
  {
    id: 8,
    name: "Sunset Dahlia",
    category: "Dahlias",
    season: "Autumn",
    color: "#D0603A",
    bg: "#FBE8E0",
    image: flower8,
    size: "tall",
  },
  {
    id: 9,
    name: "Pearl Gardenia",
    category: "Gardenias",
    season: "Summer",
    color: "#B8A898",
    bg: "#F7F4F0",
    image: flower9,
    size: "short",
  },
  {
    id: 10,
    name: "Purple Iris",
    category: "Wildflowers",
    season: "Spring",
    color: "#6048A8",
    bg: "#EDE8F8",
    image: flower10,
    size: "tall",
  },
  {
    id: 11,
    name: "Coral Poppy",
    category: "Peonies",
    season: "Spring",
    color: "#E07858",
    bg: "#FBE8E0",
    image: flower11,
    size: "short",
  },
  {
    id: 12,
    name: "Blush Ranunculus",
    category: "Roses",
    season: "Spring",
    color: "#D88898",
    bg: "#F9E8EE",
    image: flower12,
    size: "tall",
  },
];

const categories = ["All", "Roses", "Peonies", "Orchids", "Tulips", "Dahlias", "Gardenias", "Wildflowers"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeCategory === "All"
    ? flowers
    : flowers.filter(f => f.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0D1F0F", minHeight: "100vh", color: "#F7F0E8" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Hero */}
      <header style={{ padding: "80px 40px 60px", textAlign: "center", borderBottom: "1px solid rgba(200,168,130,0.2)" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", color: "#C8A882", textTransform: "uppercase", marginBottom: "20px" }}>
          The Bloom Archive
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.8rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1.05, margin: "0 0 24px", color: "#F7F0E8" }}>
          Every petal,<br /><em style={{ color: "#C8A882" }}>a story.</em>
        </h1>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 300, color: "rgba(247,240,232,0.55)", maxWidth: "400px", margin: "0 auto", lineHeight: 1.7 }}>
          Curated florals from field to frame — explore our seasonal collection.
        </p>
      </header>

      {/* Filters */}
      <nav style={{ padding: "32px 40px", display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "8px 20px",
              borderRadius: "100px",
              border: activeCategory === cat ? "1px solid #C8A882" : "1px solid rgba(200,168,130,0.25)",
              background: activeCategory === cat ? "#C8A882" : "transparent",
              color: activeCategory === cat ? "#0D1F0F" : "#C8A882",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* Masonry Grid */}
      <main style={{
        padding: "8px 40px 80px",
        columns: "3",
        columnGap: "16px",
        maxWidth: "1200px",
        margin: "0 auto",
      }}>
        <style>{`
          @media (max-width: 900px) { main { columns: 2 !important; } }
          @media (max-width: 560px) { main { columns: 1 !important; padding: 8px 20px 60px !important; } }
          .flower-card { break-inside: avoid; margin-bottom: 16px; }
          .card-inner { position: relative; border-radius: 12px; overflow: hidden; cursor: pointer; transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .card-inner:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.5); }
          .card-overlay { position: absolute; inset: 0; background: rgba(13,31,15,0.82); display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; opacity: 0; transition: opacity 0.3s ease; }
          .card-inner:hover .card-overlay { opacity: 1; }
          .card-emoji { font-size: clamp(3rem, 8vw, 6rem); display: flex; align-items: center; justify-content: center; }
        `}</style>

        {filtered.map(flower => (
          <div key={flower.id} className="flower-card">
            <div
              className="card-inner"
              style={{ background: flower.bg, height: flower.size === "tall" ? "320px" : "220px" }}
              onClick={() => setLightbox(flower)}
              onMouseEnter={() => setHoveredId(flower.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Flower visual */}
             <div
  className="card-emoji"
  style={{
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  }}
>
  <img
  src={flower.image}
  alt={flower.name}
  style={{
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  }}
/>
</div>

              {/* Hover overlay */}
              <div className="card-overlay">
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C8A882", marginBottom: "6px" }}>
                  {flower.category} · {flower.season}
                </span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", margin: 0, color: "#F7F0E8" }}>
                  {flower.name}
                </h3>
              </div>

              {/* Season badge */}
              <div style={{
                position: "absolute", top: "12px", right: "12px",
                background: "rgba(13,31,15,0.7)", borderRadius: "100px",
                padding: "4px 12px",
                fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.1em",
                textTransform: "uppercase", color: "#C8A882",
                backdropFilter: "blur(4px)",
              }}>
                {flower.season}
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: "fixed", inset: 0, background: "rgba(13,31,15,0.95)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 100, padding: "20px",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            style={{
              background: lightbox.bg, borderRadius: "20px",
              maxWidth: "420px", width: "100%", padding: "60px 40px",
              textAlign: "center", position: "relative",
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "rgba(13,31,15,0.12)", border: "none", borderRadius: "100px",
                width: "36px", height: "36px", cursor: "pointer",
                color: "#0D1F0F", fontSize: "18px", display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >✕</button>

            <div ><img
  src={lightbox.image}
  alt={lightbox.name}
  style={{
    width: "100%",
    maxWidth: "280px",
    height: "280px",
    objectFit: "cover",
    borderRadius: "12px",
    display: "block",
    margin: "0 auto 24px",
  }}
/></div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: lightbox.color }}>
              {lightbox.category}
            </span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", margin: "8px 0 12px", color: "#0D1F0F" }}>
              {lightbox.name}
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(13,31,15,0.55)", lineHeight: 1.7 }}>
              A stunning bloom from our {lightbox.season.toLowerCase()} collection. Known for its{" "}
              {lightbox.category === "Roses" ? "timeless elegance and rich fragrance" :
               lightbox.category === "Peonies" ? "lush, ruffled petals and sweet scent" :
               lightbox.category === "Orchids" ? "exotic form and graceful longevity" :
               "wild beauty and naturalistic charm"}.
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "8px", justifyContent: "center" }}>
              <span style={{ padding: "6px 16px", borderRadius: "100px", border: `1px solid ${lightbox.color}`, color: lightbox.color, fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
                {lightbox.season}
              </span>
              <span style={{ padding: "6px 16px", borderRadius: "100px", background: lightbox.color, color: "#F7F0E8", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", cursor: "pointer" }}>
                Shop Now
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={{ borderTop: "1px solid rgba(200,168,130,0.15)", padding: "40px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "rgba(247,240,232,0.3)", fontStyle: "italic" }}>
          Grown with intention. Arranged with love.
        </p>
      </footer>
    </div>
  );
}