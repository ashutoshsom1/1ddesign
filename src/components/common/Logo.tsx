import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center space-x-3.5 outline-none">
      {/* Precision Geometric Architectural Monogram */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-surface border border-white/10 group-hover:border-gold/50 transition-colors duration-300">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-amber-200/90 group-hover:text-amber-100 transition-colors"
        >
          {/* Architectural roofline & 1D geometric structure */}
          <path d="M3 10.5L12 3l9 7.5v9a1.5 1.5 0 01-1.5 1.5h-15A1.5 1.5 0 013 19.5v-9z" />
          <path d="M9 21V11.5h3.5a3 3 0 010 6H9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 9V6" stroke="currentColor" strokeWidth="1.5" />
        </svg>
        <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>

      {/* Brand Identity Typography */}
      <div className="flex flex-col">
        <div className="flex items-center space-x-1.5">
          <span className="text-base font-semibold tracking-[0.16em] text-white uppercase group-hover:text-amber-200/90 transition-colors">
            1 DREAM DESIGN
          </span>
        </div>
        <span className="text-[10px] tracking-[0.24em] uppercase text-zinc-400 font-medium">
          Architecture • Interiors
        </span>
      </div>
    </Link>
  );
}
