import { useEffect, useState } from "react";
import RouteRotator from "../components/RouteRotator";

/* ==========================================
   EASY DESIGN SETTINGS — CHANGE HERE
========================================== */

// Background patch appearance
const PATCH_OPACITY = 0.9;
const PATCH_COLOR = "243, 230, 204";
const PATCH_BORDER_WIDTH = 0.1;
const PATCH_ROUNDED = "rounded-lg";

// Heading patch size
const HEADING_PATCH_X = "px-2.5";
const HEADING_PATCH_Y = "py-2";

// Countdown patches: generous padding and larger scale
const COUNTDOWN_PATCH_X = "px-1.5 min-[380px]:px-2.5";
const COUNTDOWN_PATCH_Y = "py-2.5 min-[380px]:py-3";

// Countdown patch width control (fit inside 430px container)
const COUNTDOWN_CONTAINER_WIDTH = "w-full max-w-[390px]";

// Space between countdown patches
const COUNTDOWN_GAP = "gap-1.5 min-[380px]:gap-2";

// Countdown number and label size
const COUNTDOWN_NUMBER_SIZE =
  "text-2xl min-[380px]:text-3xl sm:text-4xl md:text-5xl";

const COUNTDOWN_LABEL_SIZE =
  "text-[8px] min-[380px]:text-[9px] sm:text-[11px] tracking-[0.06em]";

// Move the entire countdown row left/right
const COUNTDOWN_SHIFT_X = 0;

// Names patch position
const NAMES_GAP_ABOVE = "mt-16";

// Move names patch left/right and up/down (in pixels)
const NAMES_SHIFT_X = 0;
const NAMES_SHIFT_Y = 64;

// Names patch size: adjust X-padding as needed
const NAMES_PATCH_X = "px-70";
const NAMES_PATCH_Y = "py-3";

// Rotator position
const ROTATOR_POSITION = { x: 0, y: 0 };
const COVER_POSITION = { x: 0, y: 4 };

/* ==========================================
   SHARED PATCH STYLE
========================================== */

const patchStyle = {
  backgroundColor: `rgba(${PATCH_COLOR}, ${PATCH_OPACITY})`,
  border: `${PATCH_BORDER_WIDTH}px solid rgba(153, 117, 58, 0.35)`,
  boxShadow: "none",
};

/* ==========================================
   COUNTDOWN TIMER
========================================== */

const TARGET = new Date("2026-12-10T18:00:00").getTime();

function useCountdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const diff = Math.max(0, TARGET - now);

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

/* ==========================================
   SINGLE COUNTDOWN PATCH
========================================== */

function Unit({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col items-center justify-center ${PATCH_ROUNDED} ${COUNTDOWN_PATCH_X} ${COUNTDOWN_PATCH_Y}`}
      style={patchStyle}
    >
      <span
        className={`whitespace-nowrap font-serif font-semibold leading-none tabular-nums text-[#402A18] ${COUNTDOWN_NUMBER_SIZE}`}
      >
        {String(value).padStart(2, "0")}
      </span>

      <span
        className={`mt-1.5 whitespace-nowrap font-bold uppercase tracking-[0.04em] text-[#65451F] sm:mt-2 ${COUNTDOWN_LABEL_SIZE}`}
      >
        {label}
      </span>
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function FollowAction() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <section
      className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-24 md:py-28"
      style={{
        backgroundColor: "#D8C29A",
        backgroundImage: 'url("/images/bg-yellow.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* TOP BORDER */}
      <div className="golden-fade-divider-top" />

      {/* ROTATOR */}
      <div className="relative z-10 mb-6 flex justify-center sm:mb-10">
        <RouteRotator
          variant="yellow"
          rotatorOffset={ROTATOR_POSITION}
          coverOffset={COVER_POSITION}
        />
      </div>
      <br></br>
      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center text-center">

        {/* COUNTDOWN PATCHES — HORIZONTAL ROW */}
        <div
          className={`mt-5 grid w-full ${COUNTDOWN_CONTAINER_WIDTH} grid-cols-4 ${COUNTDOWN_GAP}`}
          style={{
            transform: `translateX(${COUNTDOWN_SHIFT_X}px)`,
          }}
        >
          <Unit value={days} label="Days" />
          <Unit value={hours} label="Hours" />
          <Unit value={minutes} label="Minutes" />
          <Unit value={seconds} label="Seconds" />
        </div>

        <br></br>

        {/* COUPLE NAMES AND STUDIO — PAGE CENTER */}
        <div className="w-full max-w-[390px] flex flex-col items-center">
          <div
            className={`${NAMES_GAP_ABOVE} relative left-70 w-fit max-w-full -translate-x-1/2 ${PATCH_ROUNDED} ${NAMES_PATCH_X} ${NAMES_PATCH_Y} flex flex-col items-center`}
            style={{
              ...patchStyle,
              transform: `translate(${NAMES_SHIFT_X}px, ${NAMES_SHIFT_Y}px)`,
            }}
          >
            <p className="whitespace-nowrap text-center font-serif text-xl font-semibold text-[#402A18] min-[380px]:text-2xl">
              Abhishek{" "}
              <span className="font-normal italic text-[#A77B35]">
                &amp;
              </span>{" "}
              Kanika
            </p>
            <a
              href="https://patrikastudio.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block whitespace-nowrap text-center text-[8px] font-bold uppercase tracking-[0.1em] text-[#65451F] min-[380px]:text-[9px]"
            >
              Designed By Patrika Studio
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BORDER */}
      <div className="golden-fade-divider" />
    </section>
  );
}
