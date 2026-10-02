import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";

/* Purple Rotating Wheel */
const ROTATOR_POSITION = {
  x: 0,
  y: 0,
};

/* Blue Floral Cover */
const COVER_POSITION = {
  x: 0,
  y: -3.8,
};

const TARGET = new Date("2026-03-10T18:00:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET - now);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  return { days, hours, minutes, seconds };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center shrink-0">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-[#c9a24a]/50 bg-[#0c2b3f]/90 font-serif text-2xl text-[#e6cf9a] shadow-lg min-[380px]:h-16 min-[380px]:w-16 min-[380px]:text-3xl sm:h-24 sm:w-24 sm:rounded-2xl sm:text-5xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1.5 text-[9px] uppercase tracking-[0.15em] text-[#8a6a2e] min-[380px]:text-[10px] min-[380px]:tracking-[0.2em] sm:mt-2 sm:text-[11px] sm:tracking-[0.25em]">
        {label}
      </span>
    </div>
  );
}

export default function FollowAction() {
  const { days, hours, minutes, seconds } = useCountdown();
  return (
    <section
      className="relative overflow-hidden bg-[#f5eab6] bg-cover bg-center py-16 sm:py-24"
      style={{ backgroundImage: "url('/images/bg-yellow.jpg')" }}
    >
      {/* Golden Top Divider */}
      <div className="golden-fade-divider-top" />

      <div className="absolute inset-0 bg-[#f8efc6]/30" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* =====================================================
            ROTATOR + COVER AREA
        ====================================================== */}

        <Reveal variant="zoom">
          <a
            href="#"
            className="relative flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Main Rotator Container */}
            <div
              className="
                relative
                h-[360px] w-[360px]
                sm:h-[520px] sm:w-[520px]
              "
            >
              {/* =================================================
                  PURPLE ROTATING WHEEL
              ================================================== */}

              <div
                className="absolute z-0"
                style={{
                  left: `calc(50% + ${ROTATOR_POSITION.x}px)`,
                  top: `calc(50% + ${ROTATOR_POSITION.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="/images/rotatar.png"
                  alt=""
                  draggable={false}
                  className="
                    h-[360px]
                    w-[360px]
                    max-w-none
                    select-none
                    object-contain
                    animate-[spin_25s_linear_infinite]
                    drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)]

                    sm:h-[520px]
                    sm:w-[520px]
                  "
                />
              </div>

              {/* =================================================
                  BLUE FLORAL COVER
              ================================================== */}

              <div
                className="pointer-events-none absolute z-10"
                style={{
                  left: `calc(50% + ${COVER_POSITION.x}px)`,
                  top: `calc(50% + ${COVER_POSITION.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="/images/rotator-cover.png"
                  alt=""
                  draggable={false}
                  className="
                    h-[197px]
                    w-[285px]
                    max-w-none
                    select-none
                    object-contain

                    sm:h-[415px]
                    sm:w-[415px]
                  "
                />
              </div>
            </div>
          </a>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="font-serif text-5xl italic text-[#3a3590] sm:text-6xl">
            The countdown begins
          </h2>
        </Reveal>

        <Reveal variant="zoom" className="mt-10 w-full">
          <div className="flex flex-nowrap items-center justify-center gap-2 min-[380px]:gap-3 sm:gap-6">
            <Unit value={days} label="Days" />
            <Unit value={hours} label="Hours" />
            <Unit value={minutes} label="Minutes" />
            <Unit value={seconds} label="Seconds" />
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col items-center">
          <p className="font-serif font-light text-4xl text-[#3a3590]">
            Abhishek &amp; Kanika
          </p>
          <p className="mt-3 font-serif text-sm italic text-[#8a6a2e]">
            10th March 2026 · The Savoy, Mussoorie
          </p>
        </Reveal>
      </div>

      {/* Golden fade bottom border line */}
      <div className="golden-fade-divider" />
    </section>
  );
}
