"use client";

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2rem]" aria-hidden="true">
      {/* 中文注释：用 CSS 网格和扫描线模拟 React Bits 风格的信号网络，避免引入重型 canvas。 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(31,138,91,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(31,138,91,.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-signal/20 to-transparent" />
      <div className="absolute left-0 right-0 top-0 h-20 bg-gradient-to-b from-transparent via-evidence/20 to-transparent" style={{ animation: "scan-line 4.8s ease-in-out infinite" }} />
      <div className="absolute left-[12%] top-[18%] size-2 rounded-full bg-signal shadow-[0_0_24px_rgba(31,138,91,.9)]" />
      <div className="absolute right-[18%] top-[34%] size-2 rounded-full bg-evidence shadow-[0_0_24px_rgba(216,150,20,.8)]" />
      <div className="absolute bottom-[19%] left-[34%] size-2 rounded-full bg-source shadow-[0_0_24px_rgba(53,107,154,.7)]" />
    </div>
  );
}

