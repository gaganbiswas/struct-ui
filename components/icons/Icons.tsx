"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import copy from "copy-to-clipboard";

type Props = {
  title: string;
  icons: IconProps[];
};

type IconProps = {
  name: string;
  tags: string[];
  svg: any;
};

const Icon = ({
  icon,
  setHasCopied,
  setCopiedSvg,
}: {
  icon: IconProps;
  setHasCopied: Dispatch<SetStateAction<boolean>>;
  setCopiedSvg: Dispatch<SetStateAction<any>>;
}) => {
  return (
    <button
      title={icon.name}
      className="text-emerald-800 hover:bg-emerald-300/10 w-10 h-10 rounded-md flex items-center justify-center"
      onClick={() => {
        copy(icon.svg);
        setCopiedSvg(icon.svg);
        setHasCopied(true);
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: icon.svg }} className="flex" />
    </button>
  );
};

const Icons = ({ title, icons }: Props) => {
  const [hasCopied, setHasCopied] = React.useState(false);
  const [copiedSvg, setCopiedSvg] = useState("");

  React.useEffect(() => {
    if (hasCopied)
      setTimeout(() => {
        setHasCopied(false);
        setCopiedSvg("");
      }, 2000);
  }, [hasCopied]);

  return (
    <>
      <div className="flex flex-col max-w-max">
        <span className="font-semibold text-xs text-gray-800 tracking-wide">
          {title}
        </span>
        <div className="mt-5 grid grid-cols-6 gap-5">
          {icons.map((icon) => (
            <Icon
              icon={icon}
              key={icon.name}
              setHasCopied={setHasCopied}
              setCopiedSvg={setCopiedSvg}
            />
          ))}
        </div>
      </div>
      {hasCopied ? (
        <div className="absolute bottom-10 bg-gray-100 py-2 px-4 rounded-md text-gray-900 flex items-center gap-2 left-1/2 w-max -translate-x-1/2">
          <span className="text-sm">SVG copied to clipboard</span>
          <span dangerouslySetInnerHTML={{ __html: copiedSvg }} />
        </div>
      ) : null}
    </>
  );
};

export default Icons;
