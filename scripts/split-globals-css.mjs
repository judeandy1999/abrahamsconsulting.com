import fs from "node:fs";

const css = fs.readFileSync("app/globals.css", "utf8");
const lines = css.split(/\r?\n/);
const idx = {
  solutions: lines.findIndex((line) => line.trim() === "/* Solutions page */"),
  sewpVi: lines.findIndex((line) => line.trim() === "/* NASA SEWP VI */"),
  contactUs: lines.findIndex((line) => line.trim() === "/* Contact Us page */")
};

const youtube = `
.youtube-facade {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: #000;
}

.youtube-facade__poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.youtube-facade__play {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.youtube-facade__play svg {
  width: 4.25rem;
  height: auto;
}

.youtube-facade:focus-visible {
  outline: 3px solid var(--color-blue-primary);
  outline-offset: 2px;
}
`;

const core = `${lines.slice(0, idx.solutions).join("\n")}\n${youtube}\n`;
const secondary = `${lines.slice(idx.solutions, idx.sewpVi).join("\n")}\n`;
const sewpVi = `${lines.slice(idx.sewpVi, idx.contactUs).join("\n")}\n`;
const contactUs = `${lines.slice(idx.contactUs).join("\n")}\n`;

fs.mkdirSync("app/styles/pages", { recursive: true });
fs.writeFileSync("app/globals.css", core);
fs.writeFileSync("app/styles/pages/marketing-secondary.css", secondary);
fs.writeFileSync("app/styles/pages/sewp-vi.css", sewpVi);
fs.writeFileSync("app/styles/pages/contact-us.css", contactUs);

console.log(
  JSON.stringify(
    {
      core: core.length,
      secondary: secondary.length,
      sewpVi: sewpVi.length,
      contactUs: contactUs.length
    },
    null,
    2
  )
);
