import Script from "next/script";

const TIDIO_SCRIPT_SRC = "https://code.tidio.co/u6l1fqamal7ezj96cpmv4mabr6rdoinn.js";

export function TidioChat() {
  return <Script src={TIDIO_SCRIPT_SRC} strategy="afterInteractive" />;
}
