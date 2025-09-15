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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .cursor {
          animation: blink 1s steps(1) infinite;
          font-weight: 100;
          margin-left: 1px;
        }
      `}</style>
      <span className="cursor">│</span>
    </span>
  );
};

export default TypewriterText;
