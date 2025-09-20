import { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme
    extend
      borderRadius
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        card
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes
        "accordion-down"
          from
            height: "0",
          },
          to
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up"
          from
            height: "var(--radix-accordion-content-height)",
          },
          to
            height: "0",
          },
        },
        slideInFromRight
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        completePulse
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)", backgroundColor: "hsl(142.1, 76.2%, 36.3%)" },
          "100%": { transform: "scale(1)" },
        },
        successPulse
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7", transform: "scale(1.02)" },
        },
        spin
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-right": "slideInFromRight 0.3s ease-out",
        "complete-pulse": "completePulse 0.6s ease-out",
        "success-pulse": "successPulse 1s ease-out",
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;