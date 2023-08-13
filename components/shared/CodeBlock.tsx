"use client";

import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import copy from "copy-to-clipboard";

const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 1500);
  }, [hasCopied]);

  return (
    <Highlight theme={themes.dracula} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          style={style}
          className="border border-gray-50/30 rounded-md !bg-[rgba(249,_250,_251,_0.025)] relative"
        >
          <button
            className="border absolute right-4 top-4 py-1 px-2 text-xs text-gray-50/90 border-gray-50/90 rounded-md"
            onClick={() => {
              copy(code);
              setHasCopied(true);
            }}
          >
            {hasCopied ? "Copied!" : "Copy"}
          </button>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
