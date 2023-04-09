import { createGlobalTheme, style } from "@vanilla-extract/css";

export const myTheme = {
  // colors: {
  //   primary: "blue",
  //   secondary: "gray",
  // },
  fonts: {
    sm: "0.8rem",
    md: "1rem",
    lg: "1.2rem",
  },
};

export const vars = createGlobalTheme(":root", myTheme);

export const listStyleNone = style({
  padding: 0,
  margin: 0,
  listStyle: "none",
});

export const directionColumnCenter = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const roundedBorder = style({
  borderRadius: "1rem",
});

export const boxShadow = style({
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
});
