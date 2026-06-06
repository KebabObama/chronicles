import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export type FantasyVariant = "ice" | "blood" | "emerald" | "steel";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center bg-transparent cursor-pointer select-none outline-none transition-transform duration-200 active:scale-97 disabled:cursor-not-allowed disabled:pointer-events-none disabled:active:scale-100",
  {
    variants: {
      size: {
        sm: "h-16 w-56",
        md: "h-20 w-72",
        lg: "h-28 w-96",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

const textVariants = cva(
  "relative z-20 font-serif text-[#f0f7ff] transition-all duration-300 drop-shadow-[0_3px_6px_rgba(0,0,0,0.9)] group-hover:text-[#ffffff] group-hover:scale-102",
  {
    variants: {
      size: {
        sm: "text-lg tracking-[0.2em] pl-[0.2em]",
        md: "text-xl tracking-[0.25em] pl-[0.25em]",
        lg: "text-2xl tracking-[0.3em] pl-[0.3em]",
      },
      variant: {
        ice: "group-hover:drop-shadow-[0_0_8px_rgba(154,208,255,0.6)]",
        blood: "group-hover:drop-shadow-[0_0_8px_rgba(255,154,154,0.6)]",
        emerald: "group-hover:drop-shadow-[0_0_8px_rgba(167,243,208,0.6)]",
        steel: "group-hover:drop-shadow-[0_0_8px_rgba(163,163,163,0.4)]",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "ice",
    },
  },
);

const runeVariants = cva("fill-current transition-all duration-500", {
  variants: {
    variant: {
      ice: "text-[#477399] group-hover:text-[#9cd0ff]",
      blood: "text-[#994747] group-hover:text-[#ff9c9c]",
      emerald: "text-[#3b8250] group-hover:text-[#86efac]",
      steel: "text-neutral-500 group-hover:text-neutral-300",
    },
  },
  defaultVariants: { variant: "ice" },
});

const centerHoverVariants = cva("transition-transform duration-300 ease-out group-hover:scale-y-130", {
  variants: {
    variant: {
      ice: "group-hover:fill-[#5c8ab0]",
      blood: "group-hover:fill-[#b05c5c]",
      emerald: "group-hover:fill-[#388553]",
      steel: "group-hover:fill-[#737373]",
    },
  },
  defaultVariants: { variant: "ice" },
});

export type FantasyButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    readonly children?: string;
    readonly variant?: FantasyVariant;
  };

export const FantasyButton = ({
  children = "DISMISS",
  variant = "ice",
  disabled,
  size,
  className,
  ...props
}: FantasyButtonProps) => {
  const svgColors = {
    ice: {
      bgStop1: "#0d161f",
      bgStop2: "#142230",
      bgStop3: "#1a2d3e",
      bgStop4: "#080e14",
      railStop1: "#3b566e",
      railStop2: "#6fa3cc",
      railStop3: "#bce3ff",
      chassisStroke: "#1b2a38",
      innerStroke: "#2b445c",
      energyStroke: "#63b3f4",
      runeGlow: "#4da3ff",
      runeGlowHover: "#99ccff",
      centerFill: "#3e5d78",
      centerStroke: "#87b2d6",
      shardFill: "#2d465c",
      shardStroke: "#4a6f91",
      wingFill: "#6ba0cc",
      wingStroke: "#a6d2f7",
      accentFill: "#a6d2f7",
      disabled: {
        bgStop1: "#101820",
        bgStop2: "#18252f",
        bgStop3: "#213140",
        bgStop4: "#0a1117",
        railStop1: "#506575",
        railStop2: "#7d96a8",
        railStop3: "#b6c5d3",
        chassisStroke: "#243240",
        innerStroke: "#324556",
        energyStroke: "#7a98ae",
        runeGlow: "#8fb2c9",
        runeGlowHover: "#c7d7e3",
        centerFill: "#5b7488",
        centerStroke: "#9ab1c2",
        shardFill: "#374c5c",
        shardStroke: "#5c7488",
        wingFill: "#7a93a8",
        wingStroke: "#b2c2cf",
        accentFill: "#c7d7e3",
      },
    },
    blood: {
      bgStop1: "#1a0808",
      bgStop2: "#2a1010",
      bgStop3: "#3a1414",
      bgStop4: "#100303",
      railStop1: "#6e3b3b",
      railStop2: "#cc6f6f",
      railStop3: "#ffbcbc",
      chassisStroke: "#381b1b",
      innerStroke: "#5c2b2b",
      energyStroke: "#f46363",
      runeGlow: "#ff4d4d",
      runeGlowHover: "#ff9999",
      centerFill: "#783e3e",
      centerStroke: "#d68787",
      shardFill: "#5c2d2d",
      shardStroke: "#914a4a",
      wingFill: "#cc6b6b",
      wingStroke: "#f7a6a6",
      accentFill: "#f7a6a6",
      disabled: {
        bgStop1: "#201111",
        bgStop2: "#2b1616",
        bgStop3: "#382020",
        bgStop4: "#140909",
        railStop1: "#745353",
        railStop2: "#9a7575",
        railStop3: "#c5afaf",
        chassisStroke: "#412525",
        innerStroke: "#553434",
        energyStroke: "#9b6d6d",
        runeGlow: "#c28b8b",
        runeGlowHover: "#dfb5b5",
        centerFill: "#7a5555",
        centerStroke: "#ab8787",
        shardFill: "#503737",
        shardStroke: "#745353",
        wingFill: "#9b7676",
        wingStroke: "#c9a8a8",
        accentFill: "#dfb5b5",
      },
    },
    emerald: {
      bgStop1: "#05140b",
      bgStop2: "#0d2617",
      bgStop3: "#12331e",
      bgStop4: "#030d07",
      railStop1: "#2d5c3c",
      railStop2: "#5cb374",
      railStop3: "#a6f2bc",
      chassisStroke: "#0f2616",
      innerStroke: "#1b4025",
      energyStroke: "#4ade80",
      runeGlow: "#22c55e",
      runeGlowHover: "#86efac",
      centerFill: "#224d31",
      centerStroke: "#6ee7b7",
      shardFill: "#143822",
      shardStroke: "#2e7d47",
      wingFill: "#34d399",
      wingStroke: "#a7f3d0",
      accentFill: "#a7f3d0",
      disabled: {
        bgStop1: "#0f1913",
        bgStop2: "#17241b",
        bgStop3: "#203228",
        bgStop4: "#09120c",
        railStop1: "#486553",
        railStop2: "#70957d",
        railStop3: "#aed0b9",
        chassisStroke: "#203126",
        innerStroke: "#304538",
        energyStroke: "#789c86",
        runeGlow: "#8bb59a",
        runeGlowHover: "#c1dbc9",
        centerFill: "#557160",
        centerStroke: "#94b09f",
        shardFill: "#334b3d",
        shardStroke: "#547160",
        wingFill: "#7ea890",
        wingStroke: "#b8d4c0",
        accentFill: "#c1dbc9",
      },
    },
    steel: {
      bgStop1: "#171717",
      bgStop2: "#262626",
      bgStop3: "#404040",
      bgStop4: "#0a0a0a",
      railStop1: "#525252",
      railStop2: "#737373",
      railStop3: "#a3a3a3",
      chassisStroke: "#262626",
      innerStroke: "#404040",
      energyStroke: "#737373",
      runeGlow: "#737373",
      runeGlowHover: "#d4d4d4",
      centerFill: "#404040",
      centerStroke: "#737373",
      shardFill: "#262626",
      shardStroke: "#525252",
      wingFill: "#525252",
      wingStroke: "#a3a3a3",
      accentFill: "#d4d4d4",
      disabled: {
        bgStop1: "#191919",
        bgStop2: "#252525",
        bgStop3: "#313131",
        bgStop4: "#101010",
        railStop1: "#575757",
        railStop2: "#7d7d7d",
        railStop3: "#ababab",
        chassisStroke: "#2d2d2d",
        innerStroke: "#424242",
        energyStroke: "#848484",
        runeGlow: "#9d9d9d",
        runeGlowHover: "#d0d0d0",
        centerFill: "#4f4f4f",
        centerStroke: "#808080",
        shardFill: "#313131",
        shardStroke: "#575757",
        wingFill: "#666666",
        wingStroke: "#ababab",
        accentFill: "#d0d0d0",
      },
    },
  }[variant];

  const themeColors = disabled ? svgColors.disabled : svgColors;
  const disabledTextColors = {
    ice: "text-[#c8d7e3]",
    blood: "text-[#d9b0b0]",
    emerald: "text-[#b2d8bf]",
    steel: "text-[#d0d0d0]",
  } as const;
  const disabledRuneColors = {
    ice: "text-[#8fb2c9]",
    blood: "text-[#c28b8b]",
    emerald: "text-[#8bb59a]",
    steel: "text-[#9d9d9d]",
  } as const;

  const bgId = `livingBg-${variant}`;
  const railId = `frostRail-${variant}`;

  return (
    <button disabled={disabled} className={cn(buttonVariants({ size, className }))} {...props}>
      {/* BACKGROUND & INNER FRAME LAYER */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
          viewBox="0 0 384 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <title>button</title>
          <defs>
            <linearGradient id={bgId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={themeColors.bgStop1} />
              <stop offset="40%" stopColor={themeColors.bgStop2} />
              <stop offset="70%" stopColor={themeColors.bgStop3} />
              <stop offset="100%" stopColor={themeColors.bgStop4} />
            </linearGradient>

            <linearGradient id={railId} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={themeColors.railStop1} />
              <stop offset="20%" stopColor={themeColors.railStop2} />
              <stop offset="50%" stopColor={themeColors.railStop3} />
              <stop offset="80%" stopColor={themeColors.railStop2} />
              <stop offset="100%" stopColor={themeColors.railStop1} />
            </linearGradient>

            <style>{`
              @keyframes runeFlicker-${variant} {
                0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 0.25; filter: drop-shadow(0 0 2px ${themeColors.runeGlow}); }
                20%, 24%, 55% { opacity: 0.05; filter: none; }
                22%, 57%, 85% { opacity: 0.6; filter: drop-shadow(0 0 4px ${themeColors.runeGlowHover}); }
              }
              @keyframes runeFlickerFast-${variant} {
                0%, 9%, 11%, 19%, 21%, 69%, 71%, 100% { opacity: 0.35; filter: drop-shadow(0 0 1px ${themeColors.runeGlow}); }
                10%, 20%, 70% { opacity: 0.02; filter: none; }
                12%, 72% { opacity: 0.7; filter: drop-shadow(0 0 5px ${themeColors.runeGlowHover}); }
              }
              @keyframes energyFlow-${variant} {
                0% { stroke-dashoffset: 100; }
                100% { stroke-dashoffset: 0; }
              }

              /* Animations trigger ONLY when the .group container is hovered */
              .group:hover .rune-flicker-A { animation: runeFlickerFast-${variant} 1.2s infinite linear; }
              .group:hover .rune-flicker-B { animation: runeFlicker-${variant} 0.8s infinite linear; }
              .group:hover .rune-flicker-C { animation: runeFlickerFast-${variant} 0.9s infinite linear; }

              .energy-line-${variant} { stroke-dasharray: 40 60; animation: energyFlow-${variant} 2s linear infinite; }
            `}</style>
          </defs>

          <rect
            x="24"
            y="16"
            width="336"
            height="80"
            rx="20"
            fill={`url(#${bgId})`}
            stroke={themeColors.chassisStroke}
            strokeWidth="2.5"
          />
          <rect
            x="29"
            y="21"
            width="326"
            height="70"
            rx="16"
            stroke={themeColors.innerStroke}
            strokeWidth="1"
            className="transition-opacity duration-500 opacity-40 group-hover:opacity-70"
          />
          <rect
            x="26"
            y="18"
            width="332"
            height="76"
            rx="18"
            stroke={themeColors.energyStroke}
            strokeWidth="1.5"
            className={cn(
              `opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none energy-line-${variant}`,
            )}
          />

          {size !== "sm" && (
            <g className={cn(runeVariants({ variant }), disabled && disabledRuneColors[variant])}>
              {/* Core Runes */}
              <g className="transition-opacity opacity-10 group-hover:opacity-100 rune-flicker-A">
                <path d="M48 42 L56 42 M52 36 L52 48 M48 48 L56 36" stroke="currentColor" strokeWidth="1.5" />
                <path d="M68 38 L74 44 L68 50 M74 38 L74 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </g>

              <g className="transition-opacity opacity-10 group-hover:opacity-100 rune-flicker-C">
                <path d="M312 38 L318 44 L312 50 M312 44 H322" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M332 36 V48 L338 42 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </g>

              {/* Extra Runes */}
              {size === "lg" && (
                <>
                  <g className="transition-opacity opacity-10 group-hover:opacity-100 rune-flicker-B">
                    <path d="M90 38 H102 L90 50 H102 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
                    <path d="M58 64 L64 72 L70 64 M64 72 V58" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </g>
                  <g className="transition-opacity opacity-10 group-hover:opacity-100 rune-flicker-B">
                    <path
                      d="M284 38 V50 M284 44 L292 38 M284 47 L292 41"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <path
                      d="M314 60 C322 60 322 70 314 70 C306 70 306 60 314 60 Z M322 60 C314 60 314 70 322 70 C330 70 330 60 322 60 Z"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      fill="none"
                    />
                  </g>

                  <g className="transition-opacity opacity-10 group-hover:opacity-100 rune-flicker-A">
                    <path d="M86 68 L94 68 L90 76 Z M90 64 V68" stroke="currentColor" strokeWidth="1.3" fill="none" />
                  </g>
                  <g className="transition-opacity opacity-10 group-hover:opacity-100 rune-flicker-C">
                    <path
                      d="M290 58 L298 66 M298 58 L290 66 M294 54 V68"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      fill="none"
                    />
                  </g>
                </>
              )}
            </g>
          )}

          {/* FRAMING RAILS */}
          <path d="M54 16 H330" stroke={`url(#${railId})`} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M54 96 H330" stroke={`url(#${railId})`} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M24 42 V70" stroke={`url(#${railId})`} strokeWidth="3.5" strokeLinecap="round" />
          <path d="M360 42 V70" stroke={`url(#${railId})`} strokeWidth="3.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* FOREGROUND LAYER: SHARDS */}
      <div className="absolute inset-0 z-10 overflow-visible pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 384 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none">
          <title>button foreground</title>
          <path
            d="M174 16 L192 2 L210 16 L192 10 Z"
            fill={themeColors.centerFill}
            stroke={themeColors.centerStroke}
            strokeWidth="1"
            className={cn("origin-top", centerHoverVariants({ variant }))}
          />
          <path
            d="M174 96 L192 110 L210 96 L192 102 Z"
            fill={themeColors.centerFill}
            stroke={themeColors.centerStroke}
            strokeWidth="1"
            className={cn("origin-bottom", centerHoverVariants({ variant }))}
          />

          <g className="origin-[32px_28px] transition-transform duration-300 ease-out group-hover:scale-115 group-hover:-rotate-3">
            <path
              d="M14 30 L32 12 L44 20 L26 26 L36 46 L22 38 Z"
              fill={themeColors.shardFill}
              stroke={themeColors.shardStroke}
              strokeWidth="1.5"
            />
            <path
              d="M32 12 L56 16 L34 26 Z"
              fill={themeColors.wingFill}
              stroke={themeColors.wingStroke}
              strokeWidth="1"
              opacity="0.8"
              className="origin-[32px_12px] transition-transform duration-500 group-hover:-rotate-6"
            />
            <path d="M14 30 L6 20 L20 24 Z" fill={themeColors.accentFill} opacity="0.9" />
          </g>

          <g className="origin-[352px_28px] transition-transform duration-300 ease-out group-hover:scale-115 group-hover:rotate-3">
            <path
              d="M370 30 L352 12 L340 20 L358 26 L348 46 L362 38 Z"
              fill={themeColors.shardFill}
              stroke={themeColors.shardStroke}
              strokeWidth="1.5"
            />
            <path
              d="M352 12 L328 16 L350 26 Z"
              fill={themeColors.wingFill}
              stroke={themeColors.wingStroke}
              strokeWidth="1"
              opacity="0.8"
              className="origin-[352px_12px] transition-transform duration-500 group-hover:rotate-6"
            />
            <path d="M370 30 L378 20 L364 24 Z" fill={themeColors.accentFill} opacity="0.9" />
          </g>

          <g className="origin-[32px_84px] transition-transform duration-300 ease-out group-hover:scale-115 group-hover:rotate-3">
            <path
              d="M14 82 L32 100 L44 92 L26 86 L36 66 L22 74 Z"
              fill={themeColors.shardFill}
              stroke={themeColors.shardStroke}
              strokeWidth="1.5"
            />
            <path
              d="M32 100 L56 96 L34 86 Z"
              fill={themeColors.wingFill}
              stroke={themeColors.wingStroke}
              strokeWidth="1"
              opacity="0.8"
              className="origin-[32px_100px] transition-transform duration-500 group-hover:rotate-6"
            />
            <path d="M14 82 L6 92 L20 88 Z" fill={themeColors.accentFill} opacity="0.9" />
          </g>

          <g className="origin-[352px_84px] transition-transform duration-300 ease-out group-hover:scale-115 group-hover:-rotate-3">
            <path
              d="M370 82 L352 100 L340 92 L358 86 L348 66 L362 74 Z"
              fill={themeColors.shardFill}
              stroke={themeColors.shardStroke}
              strokeWidth="1.5"
            />
            <path
              d="M352 100 L328 96 L350 86 Z"
              fill={themeColors.wingFill}
              stroke={themeColors.wingStroke}
              strokeWidth="1"
              opacity="0.8"
              className="origin-[352px_100px] transition-transform duration-500 group-hover:-rotate-6"
            />
            <path d="M370 82 L378 92 L364 88 Z" fill={themeColors.accentFill} opacity="0.9" />
          </g>
        </svg>
      </div>

      {/* TYPOGRAPHY */}
      <span
        className={cn(textVariants({ size, variant }), disabled && disabledTextColors[variant])}
        style={{ fontFamily: "'Cinzel', 'Times New Roman', serif" }}>
        {children}
      </span>
    </button>
  );
};
