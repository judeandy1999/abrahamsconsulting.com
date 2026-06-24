type IconProps = {
  className?: string;
};

const strokeIconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true
};

export function IconArrowRight({ className }: IconProps) {
  return (
    <svg className={className} width={18} height={18} viewBox="0 0 24 24" {...strokeIconProps}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg className={className} width={14} height={14} viewBox="0 0 24 24" {...strokeIconProps}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
