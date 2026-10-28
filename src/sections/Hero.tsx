import Reveal from "../components/Reveal";

export default function Hero() {
  return (
    <section className="relative w-full h-screen h-[100dvh] min-h-[550px] overflow-hidden bg-[#0a2536]">

      {/* Main Background Image */}
      <img
        src="/images/hero.jpg"
        alt="Abhishek weds Kanika illustrated night sky scene"
        className="absolute inset-0 w-full h-full select-none object-cover object-center"
      />

      {/* Hero Frame Overlay */}
      <img
        src="/images/frame-hero.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          w-[100%]
          h-[100%]
          -translate-x-1/2
          -translate-y-1/2
          select-none
          object-fill
          object-center
          z-10
        "
      />

      {/* Soft Top Gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0a2536]/70 via-[#0a2536]/10 to-transparent z-10" />

      {/* Corner Peeking Elements: Moon 1 (top-left corner peeking) */}
      <img
        src="/images/moon.png"
        alt=""
        className="pointer-events-none absolute -top-12 -left-16 z-15 w-48 h-48 sm:w-72 sm:h-72 opacity-85 select-none object-contain animate-float-subtle drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
      />

      {/* Corner Peeking Elements: Balloon (top-right corner peeking) */}
      <img
        src="/images/ballon.png"
        alt=""
        className="pointer-events-none absolute top-[5%] -right-16 sm:-right-24 z-15 w-44 sm:w-64 h-auto opacity-85 select-none object-contain animate-float-subtle-alt drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
      />

      {/* Corner Peeking Elements: Moon 2 (bottom-right corner peeking) */}
      <img
        src="/images/moon.png"
        alt=""
        className="pointer-events-none absolute -bottom-16 -right-16 z-15 w-44 h-44 sm:w-64 sm:h-64 opacity-80 select-none object-contain animate-float-subtle drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
      />

      {/* Title */}
      <div className="absolute inset-x-0 top-[25%] flex flex-col items-center text-center px-4 z-20">
        <Reveal>
          <h1 className="font-serif font-light text-[14vw] leading-none text-[#e6cf9a] text-shadow-gold sm:text-[52px]">
            Karan
          </h1>

          <p className="-mt-1 font-serif text-[9vw] italic tracking-wide text-[#e6cf9a]/90 sm:text-[20px]">
            weds
          </p>

          <h1 className="font-serif font-light text-[14vw] leading-none text-[#e6cf9a] text-shadow-gold sm:text-[52px]">
            Kanika
          </h1>

          {/* Castle illustration below text */}
          <img
            src="/images/castle.png"
            alt="Castle illustration"
            className="mt-6 mx-auto w-48 h-auto sm:w-72 object-contain opacity-95 select-none pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.5)] drop-shadow-[0_6px_18px_rgba(212,175,106,0.4)] animate-float-subtle"
          />
        </Reveal>
      </div>

      {/* Golden fade bottom border line */}
      <div className="golden-fade-divider" />
    </section>
  );
}