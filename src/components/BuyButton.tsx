export default function BuyButton() {
  return (
    <div className="fixed right-3 top-3 z-50 flex items-center gap-2 sm:right-5 sm:top-5">
      <div className="flex items-center gap-1 rounded-full bg-[#f3ead6]/95 p-1 pr-1 shadow-lg shadow-black/30 ring-1 ring-black/10 backdrop-blur">
        <button className="rounded-full bg-gradient-to-b from-white to-[#efe4cd] px-3 py-1 text-[11px] font-semibold tracking-wide text-[#2a2a2a] transition-transform hover:scale-105 sm:text-xs">
          Buy Now
        </button>
        <span className="rounded-full bg-[#1a1a1a] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#e6cf9a] sm:text-[11px]">
          INR 3999
        </span>
      </div>
      <a
        href="#"
        aria-label="Watch video"
        className="hidden h-7 w-7 items-center justify-center rounded-md bg-[#c0392b] text-white shadow-md transition-transform hover:scale-110 sm:flex"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      </a>
    </div>
  );
}
