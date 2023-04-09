import { style } from "@vanilla-extract/css";

export const layoutWrapper = style({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
});

export const main = style({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const mainContainer = style({
  width: "100%",
  height: "100%",
});
