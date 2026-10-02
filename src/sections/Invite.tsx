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
      <h3 className="mt-4 font-serif text-2xl tracking-wide text-[#c9a24a] sm:text-3xl">
        {item.name}
      </h3>

      {/* Event Details */}
      <p className="mt-1 text-[11px] leading-relaxed text-[#9fb3bd] sm:text-xs">
        {item.date}
        <br />
        {item.venue}
        <br />
        {item.time}
      </p>

      {/* Route */}
      <a
        href="#route"
        className="mt-2 border-b border-[#c9a24a]/60 text-[11px] italic text-[#d9c79a] transition-colors hover:text-[#f0dca8] sm:text-xs"
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

          <p className="text-[15px] tracking-[0.15em] text-[#b98a4b]">
            ॐ श्री गणेशाय नमः
          </p>

          {/* Ganesh Ji */}
          <img
            src="/images/transparent-ganeshji.png"
            alt="Lord Ganesha"
            className="my-3 h-30 w-auto object-contain sm:h-24"
          />

          <p className="mt-2 font-serif text-lg italic text-[#c9d3d8]">
            With the heavenly blessings of
          </p>

          <h2 className="mt-4 font-serif text-5xl font-light tracking-[0.15em] text-[#e0b44f] sm:text-6xl">
            INVITE
          </h2>

          <p className="mt-3 font-serif text-base italic text-[#9fb3bd]">
            You to join us in the wedding celebrations of
          </p>

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