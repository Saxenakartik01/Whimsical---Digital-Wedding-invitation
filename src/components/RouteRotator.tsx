
export type RotatorVariant = "green" | "purple" | "yellow" | "default";

interface RouteRotatorProps {
  className?: string;
  mapUrl?: string;
  rotatorOffset?: { x: number; y: number };
  coverOffset?: { x: number; y: number };
  variant?: RotatorVariant;
  rotatorSrc?: string;
  coverSrc?: string;
}

const VARIANT_ASSETS: Record<
  RotatorVariant,
  { rotator: string; cover: string }
> = {
  green: {
    rotator: "/images/route-rotator-green.png",
    cover: "/images/route-rotator-cover-green.png",
  },
  purple: {
    rotator: "/images/route-rotator-purple.png",
    cover: "/images/route-rotator-cover-purple.png",
  },
  yellow: {
    rotator: "/images/route-rotator-yellow.png",
    cover: "/images/route-rotator-cover-yellow.png",
  },
  default: {
    rotator: "/images/route-rotator.png",
    cover: "/images/route-rotator-cover.png",
  },
};

/* =========================================================
   EASY ROTATOR COVER SIZE CONTROLS
   Change these numbers to resize the cover.

   Mobile: 300 means 300 x 300 pixels
   Desktop: 430 means 430 x 430 pixels

   These values apply to ALL variants.
========================================================= */

const COVER_SIZE = {
  mobile: 340,
  desktop: 480,
};

/* Original sizes for non-yellow covers */
const OTHER_COVER_SIZE = {
  mobile: 244,
  desktop: 350,
};

export default function RouteRotator({
  className = "",
  rotatorOffset = { x: 0, y: 0 },
  coverOffset = { x: 0, y: 0 },
  variant = "default",
  rotatorSrc,
  coverSrc,
}: RouteRotatorProps) {
  const activeRotator =
    rotatorSrc ||
    VARIANT_ASSETS[variant]?.rotator ||
    VARIANT_ASSETS.default.rotator;

  const activeCover =
    coverSrc ||
    VARIANT_ASSETS[variant]?.cover ||
    VARIANT_ASSETS.default.cover;

  // All variants now use the full countdown-style medallion cover size
  const coverSize = COVER_SIZE;

  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* Outer sizing box - original size */}
      <div className="relative h-[300px] w-[300px] sm:h-[430px] sm:w-[430px]">
        {/* =====================================================
            1. SCALLOPED ROTATOR
        ====================================================== */}
        <div
          className="absolute z-0 pointer-events-none select-none"
          style={{
            left: `calc(50% + ${rotatorOffset.x}px)`,
            top: `calc(50% + ${rotatorOffset.y}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src={activeRotator}
            alt=""
            draggable={false}
            className="
              h-[300px] w-[300px]
              max-w-none
              object-contain
              animate-[spin_20s_linear_infinite]
              drop-shadow-[0_14px_28px_rgba(0,0,0,0.5)]
              sm:h-[430px] sm:w-[430px]
            "
          />
        </div>

        {/* =====================================================
            2. ROTATOR COVER
            Size is controlled by COVER_SIZE above.
        ====================================================== */}
        <div
          className="absolute z-10 select-none pointer-events-none"
          style={{
            left: `calc(50% + ${coverOffset.x}px)`,
            top: `calc(50% + ${coverOffset.y}px)`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className="relative max-w-none sm:!h-[480px] sm:!w-[480px]"
            style={{
              width: `min(${coverSize.mobile}px, calc(100vw - 24px))`,
              height: `min(${coverSize.mobile}px, calc(100vw - 24px))`,
            }}
          >
            {/* Cover image */}
            <img
              src={activeCover}
              alt="Wedding celebration medallion cover"
              draggable={false}
              className="
                pointer-events-none
                relative
                z-10
                h-full
                w-full
                max-w-none
                object-contain
                drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]
                sm:!h-full sm:!w-full
              "
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
