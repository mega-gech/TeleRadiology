
import type { ReactNode } from "react";

type CardProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function Card({
  title,
  description,
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface p-6 shadow-sm ${className}`}
    >
      <h3 className="text-lg font-semibold text-foreground">
        {title}
      </h3>

      {description && (
        <p className="mt-2 text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {children && (
        <div className="mt-5">
          {children}
        </div>
      )}
    </div>
  );
}
