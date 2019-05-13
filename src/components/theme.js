export default {
  borders: { default: "1px", "0": "0", "2": "2px", "4": "4px", "8": "8px" },

  breakpoints: {
    xs: 0,
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px"
  },

  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",

    primary: {
      100: "#FEF4E9",
      200: "#FDE4C7",
      300: "#FCD4A5",
      400: "#F9B462",
      500: "#F7941E",
      600: "#DE851B",
      700: "#945912",
      800: "#6F430E",
      900: "#4A2C09"
    },
    gray: {
      100: "#f7fafc",
      200: "#edf2f7",
      300: "#e2e8f0",
      400: "#cbd5e0",
      500: "#a0aec0",
      600: "#718096",
      700: "#4a5568",
      800: "#2d3748",
      900: "#1a202c"
    },
    red: {
      100: "#fff5f5",
      200: "#fed7d7",
      300: "#feb2b2",
      400: "#fc8181",
      500: "#f56565",
      600: "#e53e3e",
      700: "#c53030",
      800: "#9b2c2c",
      900: "#742a2a"
    },
    yellow: {
      100: "#fffff0",
      200: "#fefcbf",
      300: "#faf089",
      400: "#f6e05e",
      500: "#ecc94b",
      600: "#d69e2e",
      700: "#b7791f",
      800: "#975a16",
      900: "#744210"
    },
    green: {
      100: "#f0fff4",
      200: "#c6f6d5",
      300: "#9ae6b4",
      400: "#68d391",
      500: "#48bb78",
      600: "#38a169",
      700: "#2f855a",
      800: "#276749",
      900: "#22543d"
    },
    blue: {
      100: "#ebf8ff",
      200: "#bee3f8",
      300: "#90cdf4",
      400: "#63b3ed",
      500: "#4299e1",
      600: "#3182ce",
      700: "#2b6cb0",
      800: "#2c5282",
      900: "#2a4365"
    }
  },

  fonts: {
    sans: "system-ui, Roboto, Arial, sans-serif",
    mono: "Menlo, Monaco, Consolas, monospace",
    serif: "Georgia, Cambria, Times, serif"
  },

  fontSizes: [12, 14, 16, 18, 20, 24, 30, 36, 48, 64],

  fontWeights: {
    hairline: "100",
    thin: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900"
  },

  lineHeights: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2"
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },

  opacity: { "0": "0", "25": "0.25", "50": "0.5", "75": "0.75", "100": "1" },

  radii: {
    none: "0",
    sm: "0.125rem",
    default: "0.25rem",
    lg: "0.5rem",
    full: "9999px"
  },

  shadows: {
    small: "0 2px 4px 0 rgba(0,0,0,0.10)",
    medium: "0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)",
    large: "0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)"
  },

  space: [0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 128, 256],

  // Variants
  buttons: {
    primary: {
      backgroundColor: "#F7941E",
      borderColor: "#F7941E",
      color: "white",
      "&:hover": {
        backgroundColor: "#DE851B",
        borderColor: "#DE851B",
        color: "white"
      }
    },
    secondary: {
      backgroundColor: "#4a5568",
      borderColor: "#4a5568",
      color: "white",
      "&:hover": {
        backgroundColor: "#1a202c",
        borderColor: "#1a202c",
        color: "white"
      }
    },
    outline: {
      backgroundColor: "transparent",
      borderColor: "#F7941E",
      color: "#F7941E",
      "&:hover": {
        backgroundColor: "#F7941E",
        color: "white"
      }
    }
  }
};
