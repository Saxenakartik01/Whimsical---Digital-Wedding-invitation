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

/* Ribbon Position */
const RIBBON_POSITION = {
  x: 0,
  y: -5,
};

/* Design.png Position */
const DESIGN_POSITION = {
  x: 0,
  y: 0,
};

export default function BrideGroom() {
  return (
    <section
      id="route"
      className="relative overflow-hidden bg-[#8fc0a9] py-16 text-[#F2A900] sm:py-24"
    >
      {/* Golden Top Divider */}
      <div className="golden-fade-divider-top" />

      {/* Background */}
      <img
        src="/images/background-bridegroom.png"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover object-center"
      />

      {/* Balloon */}
      <img
        src="/images/ballon.png"
        alt=""
        className="pointer-events-none absolute -bottom-20 -left-20 z-10 h-auto w-44 select-none object-contain opacity-80 animate-float-subtle-alt sm:-left-28 sm:w-64"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        {/* =====================================================
            ROTATOR + COVER
        ====================================================== */}

        <Reveal variant="zoom">
          <a
            href="#"
            className="relative flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative h-[360px] w-[360px] sm:h-[520px] sm:w-[520px]">
              {/* Purple Rotator */}
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

                    sm:h-[520px]
                    sm:w-[520px]
                  "
                />
              </div>

              {/* Floral Cover */}
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
            HEADING
        ====================================================== */}

        <Reveal delay={80} className="-mt-5 sm:-mt-8">
          <p className="text-sm tracking-[0.4em] text-[#F2A900]">
            MEET THE
          </p>

          <h2 className="mt-2 whitespace-nowrap font-serif text-[44px] leading-none text-[#F2A900] sm:text-7xl">
            Bride &amp; Groom
          </h2>
        </Reveal>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl font-serif text-sm leading-relaxed text-[#F2A900] sm:text-base">
            We’re delighted to celebrate with you. Thank you for your love and
            blessings—we can’t wait to see you at the wedding!
          </p>
        </Reveal>

        {/* =====================================================
            COUPLE PHOTO AREA
        ====================================================== */}

        <Reveal variant="zoom" className="mt-14 w-full">
          {/* =================================================
              DESIGN.PNG ABOVE COUPLE CIRCLE
          ================================================== */}

          <div
            className="mx-auto flex justify-center"
            style={{
              transform: `translate(${DESIGN_POSITION.x}px, ${DESIGN_POSITION.y}px)`,
            }}
          >
            <img
              src="/images/design.png"
              alt=""
              draggable={false}
              className="
                h-auto
                w-[220px]
                select-none
                object-contain

                sm:w-[300px]
              "
            />
          </div>

          {/* =================================================
              COUPLE PHOTO
          ================================================== */}

          <div className="relative mx-auto mt-2 w-56">
            <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-full border-[6px] border-[#165823] p-1 shadow-xl">
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="/images/bride-groom.jpg"
                  alt="Bride and groom"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Beaded Ring */}
              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-dotted border-[#F2A900]/70" />
            </div>

            {/* Ribbon */}
            <div
              className="relative mx-auto flex justify-center"
              style={{
                transform: `translate(${RIBBON_POSITION.x}px, ${RIBBON_POSITION.y}px)`,
              }}
            >
              <img
                src="/images/ribbon.png"
                alt=""
                draggable={false}
                className="
                  h-auto
                  w-[120px]
                  select-none
                  object-contain
                  drop-shadow-[0_6px_8px_rgba(0,0,0,0.25)]

                  sm:w-[150px]
                "
              />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Golden Bottom Divider */}
      <div className="golden-fade-divider" />
    </section>
  );
}