"use client";

import { type ReactNode, useState } from "react";

import { cn } from "@/lib/utils";

type SpotlightCardProps = {
  children: ReactNode;
  className?: string;
};

export function SpotlightCard({ children, className }: SpotlightCardProps) {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-surface/90 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lift",
        className
      )}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100
        });
      }}
    >
      {/* 中文注释：spotlight 只用于强调卡片层级，移动端无鼠标时保持静态。 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(31, 138, 91, 0.16), transparent 34%)`
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

