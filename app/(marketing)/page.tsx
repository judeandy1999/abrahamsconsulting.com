import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ margin: "0 auto", maxWidth: "64rem", padding: "3rem 1.5rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Abrahams Consulting</h1>
      <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>
        We help enterprise and government teams deliver compliant, outcomes-focused consulting and staffing programs.
      </p>
      <nav aria-label="Primary">
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
