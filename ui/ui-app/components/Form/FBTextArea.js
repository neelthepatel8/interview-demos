import React, { useState, useEffect, useRef } from "react";

const FBTextArea = ({ defaultValue = "", onChange, ...props }) => {
  const [content, setContent] = useState(defaultValue);
  const contentRef = useRef(null);

  // Directly apply styles without altering innerHTML
  useEffect(() => {
    if (contentRef.current) {
      const nodes = Array.from(contentRef.current.childNodes);
      nodes.forEach((node) => {
        if (node.nodeType === 3) {
          // Node.TEXT_NODE
          const text = node.nodeValue;
          const parts = text.split(/(\n)/g); // Split by newline to preserve them in output

          const newNodes = parts.map((part, index) => {
            if (part.length > 40) {
              const span = document.createElement("span");
              span.textContent = part;
              span.style.color = "red";
              return span;
            } else {
              return document.createTextNode(part);
            }
          });

          if (newNodes.length > 1) {
            // If split occurred
            newNodes.forEach((newNode) =>
              node.parentNode.insertBefore(newNode, node)
            );
            node.parentNode.removeChild(node);
          }
        }
      });
    }
  }, [content]);

  const handleInput = (e) => {
    const newContent = e.currentTarget.innerText;
    setContent(newContent);
    if (onChange) {
      onChange(newContent);
    }
  };

  return (
    <div
      {...props}
      ref={contentRef}
      contentEditable
      onInput={handleInput}
      className="w-full h-36 whitespace-pre-wrap break-words overflow-y-scroll no-scrollbar border border-solid border-highlight-border bg-primary-bg dark:bg-dark-accent-bg-light dark:border-0 dark:drop-shadow-xl rounded px-4 py-2 text-base focus:outline-none"
    ></div>
  );
};

export default FBTextArea;
