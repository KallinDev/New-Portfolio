import React, { useState, useEffect, useRef } from "react";

const TypewriterText = ({
  text,
  delay = 100,
  className = "",
  onComplete,
  waitForTrigger = false,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [shouldStartTyping, setShouldStartTyping] = useState(!waitForTrigger);
  const elementRef = useRef(null);

  // Start typing when parent triggers
  useEffect(() => {
    if (waitForTrigger) {
      const checkStartTyping = () => {
        const parent = elementRef.current?.parentElement;
        if (parent?.dataset.startTyping === "true") {
          setShouldStartTyping(true);
        }
      };

      checkStartTyping();
      const observer = new MutationObserver(checkStartTyping);
      if (elementRef.current?.parentElement) {
        observer.observe(elementRef.current.parentElement, {
          attributes: true,
          attributeFilter: ["data-start-typing"],
        });
      }

      return () => observer.disconnect();
    }
  }, [waitForTrigger]);

  // Detect if element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (!isInView || !shouldStartTyping) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else if (onComplete && currentIndex === text.length) {
      onComplete();
    }
  }, [currentIndex, text, delay, isInView, onComplete, shouldStartTyping]);

  return (
    <span ref={elementRef} className={className}>
      {displayText}
      <span
        className="cursor"
        style={{
          display: "inline-block",
          width: "1px",
          height: "1em",
          backgroundColor: "currentColor",
          marginLeft: "8px", // <-- bigger gap
          verticalAlign: "bottom",
          animation: "smoothBlink 1s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes smoothBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

export default TypewriterText;
