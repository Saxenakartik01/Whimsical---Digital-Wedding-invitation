import Reveal from "../components/Reveal";
import RouteRotator from "../components/RouteRotator";

/* =========================================================
   EASY POSITION CONTROLS
========================================================= */

const ROTATOR_POSITION = {
  x: 0,
  y: 0,
};

const COVER_POSITION = {
  x: 0,
  y: 2.6,
};

/* Premium text colours */
const HEADING_COLOR = "#FFF5DE";
const BODY_COLOR = "#FFF0D2";
const ITEM_HEADING_COLOR = "#FFE8B0";
const ICON_COLOR = "#F3D48B";

const items = [
  {
    title: "Hashtag",
    text: "Share your photos using #BadriKiDulhania.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Weather",
    text: "Mostly cloudy, around 22°C.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <circle cx="8" cy="8" r="3.2" />
        <path d="M8 2v1.5M2 8h1.5M4 4l1 1M12 4l-1 1" />
        <path d="M17 13a4 4 0 0 1 0 8H8a4 4 0 0 1-.6-7.96A5 5 0 0 1 17 13Z" />
      </svg>
    ),
  },
  {
    title: "Staff",
    text: "Nearby stay: Amba Valley Lodge.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5 21c0-4 3.5-6.5 7-6.5s7 2.5 7 6.5" />
      </svg>
    ),
  },
  {
    title: "Parking",
    text: "Valet parking available for guests.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-6 w-6 sm:h-8 sm:w-8"
        aria-hidden="true"
      >
        <path d="M4 13l1.5-5A2 2 0 0 1 7.4 6.5h9.2a2 2 0 0 1 1.9 1.5L20 13" />
        <path d="M3 13h18v5H3zM6 18v2M18 18v2" />
        <circle cx="7" cy="15.5" r="1" fill="currentColor" />
        <circle cx="17" cy="15.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ThingsToKnow() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#24172F] bg-cover bg-center
        py-12 sm:py-20
      "
      style={{
        backgroundImage: "url('/images/bg-purple.jpg')",
      }}
    >
      {/* Golden Top Divider */}
      <div className="golden-fade-divider-top" />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#170F22]/70" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-3 text-center sm:px-6">

        {/* ROTATOR + COVER — PRESERVED */}
        <Reveal variant="zoom">
          <RouteRotator
            variant="purple"
            rotatorOffset={ROTATOR_POSITION}
            coverOffset={COVER_POSITION}
          />
        </Reveal>

        {/* SECTION HEADING */}
        <Reveal className="mt-8 w-full sm:mt-12">
          <div className="flex items-center justify-center gap-3">
            {/* <span className="h-px w-7 bg-[#C6A15B] sm:w-12" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#F3D48B] sm:text-xs sm:tracking-[0.35em]">
              A Little Guide for Our Guests
            </span>

            <span className="h-px w-7 bg-[#C6A15B] sm:w-12" /> */}
          </div>

          <h2
            className="
              mt-4 whitespace-nowrap
              font-serif text-4xl font-bold leading-tight
              sm:text-6xl md:text-7xl
            "
            style={{
              color: HEADING_COLOR,
              textShadow: "0 2px 8px rgba(0,0,0,0.65)",
            }}
          >
            Things to Know
          </h2>

          <p
            className="
              mx-auto mt-4 max-w-xl
              font-serif text-sm leading-relaxed
              sm:mt-5 sm:text-base
            "
            style={{
              color: BODY_COLOR,
              textShadow: "0 1px 4px rgba(0,0,0,0.75)",
            }}
          >
            A few thoughtful details to make your celebration
            comfortable and memorable.
          </p>
        </Reveal>
        <br></br>
        {/* FOUR ITEMS — ALWAYS ONE HORIZONTAL ROW */}
        <div
          className="
            mt-9 grid w-full grid-cols-4
            items-start gap-1
            sm:mt-12 sm:gap-5
            md:gap-8
          "
        >
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="flex min-w-0 flex-col items-center text-center"
            >
              {/* ICON */}
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full border border-[#D8BC83]/60
                  bg-[#D8BC83]/10
                  sm:h-14 sm:w-14
                "
                style={{
                  color: ICON_COLOR,
                  filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.4))",
                }}
              >
                {item.icon}
              </div>

              {/* TITLE */}
              <h3
                className="
                  mt-3 font-serif text-xs font-bold
                  leading-tight
                  min-[380px]:text-sm
                  sm:mt-4 sm:text-xl
                  md:text-2xl
                "
                style={{
                  color: ITEM_HEADING_COLOR,
                  textShadow: "0 2px 5px rgba(0,0,0,0.65)",
                }}
              >
                {item.title}
              </h3>

              {/* SHORT DESCRIPTION */}
              <p
                className="
                  mt-2 w-full max-w-[150px]
                  font-serif text-[9px] leading-relaxed
                  min-[380px]:text-[10px]
                  sm:mt-3 sm:text-sm
                  md:text-base
                "
                style={{
                  color: BODY_COLOR,
                  textShadow: "0 1px 3px rgba(0,0,0,0.7)",
                }}
              >
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
      <br></br>
      {/* Golden Bottom Divider */}
      <div className="golden-fade-divider" />
    </section>
  );
}
