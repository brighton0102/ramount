import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {children && <p className="mt-4 text-base leading-7 text-charcoal/75">{children}</p>}
    </div>
  );
}
