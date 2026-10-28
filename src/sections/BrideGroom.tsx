import Reveal from "../components/Reveal";
import RouteRotator from "../components/RouteRotator";

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

/* Scalloped Rotating Wheel Offset */
const ROTATOR_POSITION = {
  x: 0,
  y: 0,
};

/* Cover Medallion Offset */
const COVER_POSITION = {
  x: 0,
  y: 2.4,
};

export default function BrideGroom() {
  return (
    <section
      id="route"
      className="relative overflow-hidden bg-[#1c3319] py-16 text-[#f2ead6] sm:py-24"
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
            ROUTE ROTATOR + COVER (With Diamond Ring & Image Slider)
        ====================================================== */}

        <Reveal variant="zoom">
          <RouteRotator
            variant="green"
            rotatorOffset={ROTATOR_POSITION}
            coverOffset={COVER_POSITION}
          />
        </Reveal>
        <br></br> <br></br>

        {/* =====================================================
            HEADING
        ====================================================== */}

        <Reveal delay={80} className="-mt-5 sm:-mt-8">
          <p className="text-sm tracking-[0.4em] text-[#d4af6a]">
            MEET THE
          </p>

          <h2 className="mt-2 whitespace-nowrap font-serif text-[44px] leading-none text-[#f5ecdc] sm:text-7xl">
            Karan &amp; Kanika
          </h2>
        </Reveal>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <Reveal delay={160}>
          <p className="mx-auto mt-7 max-w-xl font-serif text-sm leading-relaxed text-[#e4ddc9]/90 sm:text-base">
            We’re delighted to celebrate with you. <br></br>Thank you for your love and
            blessings—we can’t <br></br>wait to see you at the wedding!
          </p>
        </Reveal>

        {/* =====================================================
            COUPLE PHOTO AREA
        ====================================================== */}

        <Reveal variant="zoom" className="mt-14 w-full">
          {/* =================================================
              COUPLE PHOTO
          ================================================== */}

          <div className="relative mx-auto w-56">
            <div className="relative mx-auto aspect-square w-44 overflow-hidden rounded-full border-[5px] border-[#c9a24a] p-1 shadow-[0_12px_32px_rgba(0,0,0,0.55)] ring-2 ring-[#183416]/80">
              <div className="h-full w-full overflow-hidden rounded-full">
                <img
                  src="/images/bride-groom.jpg"
                  alt="Bride and groom"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Beaded Ring */}
              <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-dotted border-[#f2ead6]/80" />
            </div>
          </div>
        </Reveal>
      </div>

      {/* Golden Bottom Divider */}
      <div className="golden-fade-divider" />
    </section>
  );
}