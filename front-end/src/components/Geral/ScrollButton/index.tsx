import { t } from "i18next";
import { useEffect, useRef, useState } from "react";

import "./styles.css";

const SCROLL_HINT_VISIBLE_MS = 2000;

export default function ScrollButton() {
  const scrollHintRef = useRef<HTMLButtonElement | null>(null);
  const [hidden, setHidden] = useState(false);

  const scrollHintLabel = t("pre.scrollHint") ?? "";

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const timer = setTimeout(() => setHidden(true), SCROLL_HINT_VISIBLE_MS);

    if (reduceMotion) {
      return () => clearTimeout(timer);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      ref={scrollHintRef}
      type="button"
      className={`scroll-indicator${hidden ? " scroll-indicator-hidden" : ""}`}
      aria-label={scrollHintLabel}
      onClick={() =>
        window.scrollBy({
          top: window.innerHeight * 0.85,
          behavior: "smooth",
        })
      }
    >
      <span className="scroll-indicator-mouse">
        <span className="scroll-indicator-dot"></span>
      </span>
      <span className="scroll-indicator-label">{scrollHintLabel}</span>
    </button>
  );
}