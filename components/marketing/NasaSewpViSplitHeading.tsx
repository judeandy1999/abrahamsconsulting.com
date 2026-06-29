type NasaSewpViSplitHeadingProps = {
  eyebrow: string;
  title: string;
  id: string;
};

export function NasaSewpViSplitHeading({ eyebrow, title, id }: NasaSewpViSplitHeadingProps) {
  return (
    <header className="sewp-vi-split-heading">
      <p className="sewp-vi-split-heading__eyebrow">{eyebrow}</p>
      <h2 id={id} className="sewp-vi-split-heading__title">
        {title}
      </h2>
    </header>
  );
}
