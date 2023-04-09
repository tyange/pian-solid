import { style } from "@vanilla-extract/css";

export const burgerList = style({
  display: "grid",
  gap: "1rem",
  gridTemplateRows: "repeat(3, minmax(0, 10rem))",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
});
