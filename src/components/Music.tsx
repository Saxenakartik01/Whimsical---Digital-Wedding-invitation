import { useEffect, useRef, useState } from "react";

const MUSIC_URL = "/images/music.mp3";

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
    }

    // Attempt auto-play on first user interaction anywhere on page
    const handleFirstInteraction = () => {
      if (!hasInteracted && audio && audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch((err) => {
          console.log("Autoplay policy prevented audio play:", err);
        });
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  // Hide tooltip hint automatically after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (error) {
        console.warn("Audio playback error:", error);
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Background Wedding Music */}
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Floating Bottom Right Music Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Tooltip indicator */}
        {showTooltip && (
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-[#d4af6a]/50 bg-[#0c2b3f]/90 px-3.5 py-1.5 text-xs text-[#e6cf9a] shadow-lg backdrop-blur-md transition-all duration-300">
            <span>{isPlaying ? "Music Playing 🎵" : "Click for Music 🎵"}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="ml-1 text-[#d4af6a]/70 hover:text-[#e6cf9a]"
              aria-label="Close tooltip"
            >
              ✕
            </button>
          </div>
        )}

        {/* Floating Button */}
        <button
          type="button"
          onClick={togglePlay}
          onMouseEnter={() => setShowTooltip(true)}
          aria-label={isPlaying ? "Pause music" : "Play music"}
          title={isPlaying ? "Pause music" : "Play music"}
          className={`group relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d4af6a] bg-[#0c2b3f]/95 text-[#e6cf9a] shadow-[0_4px_25px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 ${isPlaying
              ? "border-[#f2a900] shadow-[0_0_25px_rgba(212,175,106,0.65)]"
              : "hover:border-[#e6cf9a]"
            }`}
        >
          {/* Glowing pulse ring when playing */}
          {isPlaying && (
            <span className="pointer-events-none absolute -inset-1 animate-ping rounded-full border border-[#d4af6a]/50 opacity-60" />
          )}

          {/* Rotating Dashed Gold Ring */}
          {isPlaying && (
            <div className="pointer-events-none absolute inset-0 animate-[spin_10s_linear_infinite] rounded-full border border-dashed border-[#e6cf9a]/70" />
          )}

          {/* Equalizer Animation or Play Icon */}
          <div className="relative z-10 flex items-center justify-center">
            {isPlaying ? (
              /* Pause icon */
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-[#e6cf9a] transition-transform duration-300 group-hover:scale-110"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              </div>
            ) : (
              /* Play Icon */
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-0.5 h-5 w-5 text-[#e6cf9a] transition-transform duration-300 group-hover:scale-110"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </div>

          {/* Floating Musical Note */}
          {isPlaying && (
            <span className="pointer-events-none absolute -top-2 right-0 animate-bounce text-[11px] font-bold text-[#d4af6a]">
              ♪
            </span>
          )}
        </button>
      </div>
    </>
  );
}