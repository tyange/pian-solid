import { style } from "@vanilla-extract/css";

export const nav = style({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
});

export const link = style({
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  fontSize: "1.2rem",
  selectors: {
    "&.add-burger": {
      fontSize: "0.9rem",
    },
  },
});

export const addBurgerLink = style({});

export const logoImgContainer = style({
  width: "5rem",
});
