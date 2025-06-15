import React from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  label: string;
  style?: React.CSSProperties;
  className?: string;
}

export default function Heading({
  level,
  label,
  style,
  className,
}: HeadingProps) {
  const Tag = `h${level}` as any;
  return (
    <Tag style={style} className={className}>
      {label}
    </Tag>
  );
}
