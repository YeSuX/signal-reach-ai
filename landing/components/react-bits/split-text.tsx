"use client";

import { cn } from "@/lib/utils";

type SplitTextProps = {
  text: string;
  className?: string;
};

export function SplitText({ text, className }: SplitTextProps) {
  const hasWhitespace = /\s/.test(text.trim());

  return (
    <span className={cn("inline", className)} aria-label={text}>
      {(hasWhitespace ? text.split(" ") : Array.from(text)).map((word, wordIndex) => (
        <span
          className={hasWhitespace ? "inline-block whitespace-nowrap" : "inline"}
          aria-hidden="true"
          key={`${word}-${wordIndex}`}
        >
          {Array.from(word).map((letter, index) => (
            <span
              className="split-letter"
              key={`${letter}-${index}`}
              style={{ animationDelay: `${(wordIndex * (hasWhitespace ? 4 : 1) + index) * 22}ms` }}
            >
              {letter}
            </span>
          ))}
          {hasWhitespace ? <span className="inline-block w-[0.26em]">&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}
