import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;   // ms por caractere ao digitar
  deleteSpeed?: number; // ms por caractere ao apagar
  holdTime?: number;    // ms parado com a palavra completa
  className?: string;
  cursorChar?: string;
}

export function Typewriter({
  words,
  typeSpeed = 90,
  deleteSpeed = 50,
  holdTime = 1800,
  className,
  cursorChar = "_",
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // palavra completa: espera e começa a apagar
        timeout = setTimeout(() => setIsDeleting(true), holdTime);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, holdTime]);

  return (
    <span className={className}>
      {displayText}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.1 }}
        style={{ marginLeft: "2px" }}
      >
        {cursorChar}
      </motion.span>
    </span>
  );
}