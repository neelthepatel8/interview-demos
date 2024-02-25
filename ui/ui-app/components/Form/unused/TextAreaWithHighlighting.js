import React, { useState, useEffect, useRef } from "react";

const FBTextArea = ({ defaultValue = "", onChange, ...props }) => {
  const [content, setContent] = useState(defaultValue);
  const contentRef = useRef(null);

  useEffect(() => {
    // Call highlightText function only once to initialize
    if (defaultValue) {
      highlightText(defaultValue);
    }
  }, [defaultValue]);

  useEffect(() => {
    // This useEffect is used for restoring the cursor position after content update
    restoreCursor();
  });

  const handleInput = (e) => {
    // Prevent directly setting content to maintain cursor position
    const newContent = e.currentTarget.innerText;
    setContent(newContent);
    if (onChange) {
      onChange(newContent);
    }
  };

  const restoreCursor = () => {
    const selection = window.getSelection();
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  const highlightText = (text) => {
    const regex = /^(.{10})(.*)$/;
    const highlighted = text
      .split("\n")
      .map((line) =>
        line.replace(
          regex,
          (match, first10, rest) =>
            `${first10}<span class="text-red-500">${rest}</span>`
        )
      )
      .join("<br>");

    // Directly manipulating innerHTML to apply highlighting
    contentRef.current.innerHTML = highlighted;
  };

  return (
    <div
      {...props}
      ref={contentRef}
      contentEditable
      onInput={handleInput}
      onKeyUp={(e) => {
        // Update content and highlight text on key up to reduce cursor jump
        if (e.key === "Enter" || e.key === "Backspace" || e.key === "Delete") {
          const text = e.currentTarget.innerText;
          setContent(text); // Update state
          highlightText(text); // Re-apply highlighting
        }
      }}
      className="w-full h-36 overflow-y-scroll no-scrollbar border border-solid border-highlight-border bg-primary-bg dark:bg-dark-accent-bg-light dark:border-0 dark:drop-shadow-xl rounded px-4 py-2 text-base focus:outline-none"
      style={{ whiteSpace: "pre-wrap" }}
    ></div>
  );
};

export default FBTextArea;
