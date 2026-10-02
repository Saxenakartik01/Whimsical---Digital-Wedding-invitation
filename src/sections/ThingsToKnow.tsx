import Reveal from "../components/Reveal";

/* =========================================================
   EASY POSITION CONTROLS
   =========================================================

   X POSITION
   + number = RIGHT
   - number = LEFT

   Y POSITION
   + number = DOWN
   - number = UP
========================================================= */

/* Gold Rotating Wheel */
const ROTATOR_POSITION = {
  x: 0,
  y: 0,
};

/* Blue Floral Cover */
const COVER_POSITION = {
  x: 0,
  y: -3.8,
};

const items = [
  {
    title: "Hashtag",
    text: "While posting photos on social media please use the hashtag - #BadriKiDulhania",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-8 w-8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Weather",
    text: "It will be mostly cloudy with temperature reaching up to 22 degrees at the venue",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-8 w-8"
      >
        <circle cx="8" cy="8" r="3.2" />
        <path d="M8 2v1.5M2 8h1.5M4 4l1 1M12 4l-1 1" />
        <path d="M17 13a4 4 0 0 1 0 8H8a4 4 0 0 1-.6-7.96A5 5 0 0 1 17 13Z" />
      </svg>
    ),
  },
  {
    title: "Staff",
    text: "We recommend the nearby lodge called Amba Valley near the venue for the staff members",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-8 w-8"
      >
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5 21c0-4 3.5-6.5 7-6.5s7 2.5 7 6.5" />
      </svg>
    ),
  },
  {
    title: "Parking",
    text: "Valet parking for all our guests will be available at the venue",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        className="h-8 w-8"
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
      className="relative overflow-hidden bg-[#352845] bg-cover bg-center py-16 sm:py-24"
      style={{
        backgroundImage: "url('/images/bg-purple.jpg')",
      }}
    >
      {/* Golden Top Divider */}
      <div className="golden-fade-divider-top" />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#2a1f38]/55" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        {/* =====================================================
            GOLD ROTATOR + COVER
        ====================================================== */}

        <Reveal variant="zoom">
          <a
            href="#"
            className="relative flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-[360px] w-[360px] sm:h-[520px] sm:w-[520px]">
              {/* Gold Rotating Wheel */}
              <div
                className="absolute z-0"
                style={{
                  left: `calc(50% + ${ROTATOR_POSITION.x}px)`,
                  top: `calc(50% + ${ROTATOR_POSITION.y}px)`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <img
                  src="/images/gold-rotator.png"
                  alt="Looking forward to see you"
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

              {/* Blue Floral Cover */}
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

        {/* =====================================================
            THINGS TO KNOW
            Location icon removed
        ====================================================== */}

        <Reveal className="mt-10 sm:mt-12">
          <h2
            className="
              whitespace-nowrap
              font-serif
              text-[42px]
              leading-none
              text-[#f2ead6]

              sm:text-7xl
            "
          >
            Things to know
          </h2>

          <p className="mx-auto mt-8 max-w-2xl font-serif text-base leading-relaxed text-[#e4ddc9]/85 sm:text-lg">
            To help you feel at ease and enjoy every moment of the celebrations,
            we've gathered a few thoughtful details we'd love for you to know
            before the big day.
          </p>
        </Reveal>

        {/* =====================================================
            INFO ITEMS
        ====================================================== */}

        <div className="mt-14 grid w-full grid-cols-2 gap-10 md:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 100}
              className="flex flex-col items-center text-center text-[#e4ddc9]"
            >
              <div className="text-[#d8cdb2]">{item.icon}</div>

              <h3 className="mt-3 font-serif text-2xl text-[#e6dcc2]">
                {item.title}
              </h3>

              <p className="mt-2 max-w-[180px] font-serif text-xs leading-relaxed text-[#d4cbb4]/85">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Golden Fade Bottom Border */}
      <div className="golden-fade-divider" />
    </section>
  );
}