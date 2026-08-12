type JsonLdScriptProps = Readonly<{
  src: string;
}>;

/** React 19 executes async external scripts; inline JSON-LD triggers dev warnings. */
export function JsonLdScript({ src }: JsonLdScriptProps) {
  return <script type="application/ld+json" src={src} async />;
}
