export default function AccentStroke({
    className = "",
    opacity = 0.65,
  }) {
    return (
      <div
        className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1600 900"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <path
            d="M-150 190 C 20 140 120 260 300 230 C 460 205 480 340 340 420 C 230 480 200 560 380 600 C 560 645 680 700 820 780 C 950 830 1100 860 1250 850 C 1400 840 1480 830 1560 780 C 1620 745 1660 660 1760 560"
            stroke="currentColor"
            strokeOpacity={opacity}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }