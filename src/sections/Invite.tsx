import Reveal from "../components/Reveal";

type EventItem = {
  name: string;
  date: string;
  venue: string;
  time: string;
  img: string;
};

const events: EventItem[] = [
  {
    name: "Mehendi",
    date: "Friday, March 7th 2026",
    venue: "The Savoy, Mussoorie",
    time: "6pm Onwards",
    img: "/images/event-mehendi.jpg",
  },
  {
    name: "Haldi",
    date: "Friday, March 8th 2026",
    venue: "The Savoy, Mussoorie",
    time: "6pm Onwards",
    img: "/images/event-haldi.jpg",
  },
  {
    name: "Shaadi",
    date: "Friday, March 10th 2026",
    venue: "The Savoy, Mussoorie",
    time: "6pm Onwards",
    img: "/images/event-shaadi.jpg",
  },
];

/* Matching Royal Gold Lotus & Arabesque Filigree Divider */
function RoyalLotusDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 420 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-7 w-auto max-w-[280px] drop-shadow-[0_2px_8px_rgba(224,180,79,0.35)] sm:h-9 sm:max-w-[360px] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="invGoldL" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF6A" stopOpacity="0" />
          <stop offset="60%" stopColor="#D4AF6A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E5C77E" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="invGoldR" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4AF6A" stopOpacity="0" />
          <stop offset="60%" stopColor="#D4AF6A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#E5C77E" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="invGoldV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF4D0" />
          <stop offset="45%" stopColor="#E5C77E" />
          <stop offset="100%" stopColor="#B38938" />
        </linearGradient>
      </defs>

      {/* Left Tapered Line */}
      <line
        x1="15"
        y1="18"
        x2="140"
        y2="18"
        stroke="url(#invGoldL)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="15" cy="18" r="1.5" fill="#D4AF6A" opacity="0.6" />
      <circle cx="85" cy="18" r="1.8" fill="#E5C77E" opacity="0.8" />
      <polygon points="135,18 140,15.5 145,18 140,20.5" fill="#E5C77E" />

      {/* Right Tapered Line */}
      <line
        x1="280"
        y1="18"
        x2="405"
        y2="18"
        stroke="url(#invGoldR)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <polygon points="275,18 280,15.5 285,18 280,20.5" fill="#E5C77E" />
      <circle cx="335" cy="18" r="1.8" fill="#E5C77E" opacity="0.8" />
      <circle cx="405" cy="18" r="1.5" fill="#D4AF6A" opacity="0.6" />

      {/* Left Filigree Scroll / Arabesque */}
      <path
        d="M148 18 C156 14 162 9 171 12 C178 14 178 22 170 23 C164 23 162 19 166 16 C169 14 173 16 172 19"
        stroke="url(#invGoldV)"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M158 18 C167 20 176 27 186 24 C191 22 194 19 196 18"
        stroke="url(#invGoldV)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="171" cy="7.5" r="1.3" fill="#FFF4D0" />
      <circle cx="182" cy="26" r="1.1" fill="#E5C77E" />

      {/* Right Filigree Scroll / Arabesque */}
      <path
        d="M272 18 C264 14 258 9 249 12 C242 14 242 22 250 23 C256 23 258 19 254 16 C251 14 247 16 248 19"
        stroke="url(#invGoldV)"
        strokeWidth="1.3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M262 18 C253 20 244 27 234 24 C229 22 226 19 224 18"
        stroke="url(#invGoldV)"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="249" cy="7.5" r="1.3" fill="#FFF4D0" />
      <circle cx="238" cy="26" r="1.1" fill="#E5C77E" />

      {/* Center Auspicious Lotus / Royal Medallion */}
      {/* Top Sparkle Diamond */}
      <polygon points="210,3 213,8 210,13 207,8" fill="#FFF4D0" />

      {/* Lotus Center Main Petal */}
      <path
        d="M210 7 C207 12 205 18 210 24 C215 18 213 12 210 7 Z"
        fill="url(#invGoldV)"
      />

      {/* Left Inner Petal */}
      <path
        d="M208 12 C203 14 200 18 204 23 C208 22 209 18 208 12 Z"
        fill="url(#invGoldV)"
      />

      {/* Right Inner Petal */}
      <path
        d="M212 12 C217 14 220 18 216 23 C212 22 211 18 212 12 Z"
        fill="url(#invGoldV)"
      />

      {/* Left Outer Leaf */}
      <path
        d="M202 18 C196 20 195 24 200 26 C203 24 203 21 202 18 Z"
        fill="url(#invGoldV)"
        opacity="0.85"
      />

      {/* Right Outer Leaf */}
      <path
        d="M218 18 C224 20 225 24 220 26 C217 24 217 21 218 18 Z"
        fill="url(#invGoldV)"
        opacity="0.85"
      />

      {/* Center Jewel Diamond Base */}
      <polygon points="210,23 214,27 210,31 206,27" fill="#FFF4D0" />
      <circle cx="210" cy="33.5" r="1.4" fill="#E5C77E" />
    </svg>
  );
}

function EventCard({
  item,
  index,
}: {
  item: EventItem;
  index: number;
}) {
  return (
    <Reveal
      variant="zoom"
      delay={(index % 3) * 120}
      className="flex flex-col items-center text-center"
    >
      <div className="group relative w-full max-w-[220px]">
        {/* Complete Frame Area */}
        <div className="relative mx-auto aspect-[2/3] w-full">

          {/* 
            OVAL IMAGE AREA
            Everything outside this oval is completely hidden.
          */}
          <div
            className="
              absolute
              left-[15%]
              right-[15%]
              top-[12%]
              bottom-[12%]
              z-0
              overflow-hidden
              rounded-[50%]
            "
          >
            <img
              src={item.img}
              alt={`${item.name} illustration`}
              className="
                h-full
                w-full
                object-cover
                object-center
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />
          </div>

          {/* Gold Frame */}
          <img
            src="/images/frame.png"
            alt=""
            className="
              pointer-events-none
              absolute
              inset-0
              z-10
              h-full
              w-full
              select-none
              object-fill
            "
          />
        </div>
      </div>

      {/* Event Name */}
      <h3 className="-mt-[12px] font-serif text-2xl tracking-wide text-[#c9a24a] sm:-mt-[16px] sm:text-3xl">
        {item.name}
      </h3>

      {/* Event Details */}
      <p className="mt-1 text-[13px] leading-relaxed text-[#c3d3db] min-[380px]:text-sm sm:text-[15px]">
        {item.date}
        <br />
        {item.venue}
        <br />
        {item.time}
      </p>

      {/* Route */}
      <a
        href="#route"
        className="mt-2.5 inline-block border-b border-[#c9a24a]/60 text-xs italic text-[#d9c79a] transition-colors hover:text-[#f0dca8] sm:text-sm"
      >
        See the route
      </a>
    </Reveal>
  );
}

export default function Invite() {
  return (
    <section className="relative overflow-hidden bg-[#0f3346] py-16 sm:py-24">
      {/* Golden Top Divider */}
      <div className="golden-fade-divider-top" />

      {/* Background Image */}
      <img
        src="/images/background-invite.png"
        alt=""
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          select-none
          object-cover
          object-center
        "
      />

      {/* Corner Peeking Elements: Balloon (right edge peeking) */}
      <img
        src="/images/ballon.png"
        alt=""
        className="pointer-events-none absolute top-[35%] -right-20 sm:-right-32 z-10 w-38 sm:w-72 h-auto opacity-85 select-none object-contain animate-float-subtle-alt drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
      />

      {/* Corner Peeking Elements: Moon 2 (bottom-left edge peeking) */}
      <img
        src="/images/moon.png"
        alt=""
        className="pointer-events-none absolute bottom-[10%] -left-20 sm:-left-28 z-10 w-44 h-44 sm:w-64 sm:h-64 opacity-80 select-none object-contain animate-float-subtle drop-shadow-[0_10px_20px_rgba(0,0,0,0.45)]"
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Invitation Intro */}
        <Reveal className="flex flex-col items-center text-center">


          {/* Ganesh Ji */}
          <img
            src="/images/transparent-ganeshji.png"
            alt="Lord Ganesha"
            className="my-3 h-20 w-auto object-contain sm:h-24"
          />
          <p className="text-[15px] tracking-[0.10em] text-[#b98a4b]">
            ॐ श्री गणेशाय नमः
          </p>
          <br></br>

          <p className="mt-2 font-serif text-lg italic text-[#c9d3d8]">
            With the heavenly blessings of <br></br> Smt. Lata Devi & Shri. Kamal Kapoor
          </p>

          {/* Matching Royal Gold Lotus & Arabesque Filigree Divider */}
          <div className="my-5 flex w-full items-center justify-center sm:my-6">
            <RoyalLotusDivider />
          </div>

          <h2 className="font-serif text-5xl font-light tracking-[0.15em] text-[#e0b44f] sm:text-6xl">
            INVITE
          </h2>

          {/* <p className="mt-3 font-serif text-base italic text-[#9fb3bd]">
            You to join us in the wedding celebrations of
          </p> */}

        </Reveal>

        {/* Wedding Events */}
        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-3">
          {events.map((event, index) => (
            <EventCard
              key={event.name}
              item={event}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Golden fade bottom border line */}
      <div className="golden-fade-divider" />
    </section>
  );
}