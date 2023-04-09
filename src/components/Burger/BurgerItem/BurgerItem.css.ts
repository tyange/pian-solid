import { style } from "@vanilla-extract/css";
import { vars } from "../../../styles/styles.css";

export const burgerItemWrapper = style({
  width: "100%",
  height: "100%",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
});

export const burgerInfo = style({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

export const burgerName = style({
  fontSize: vars.fonts.sm,
});

export const burgerBrand = style({
  fontSize: vars.fonts.sm,
});

export const burgerImgContainer = style({
  width: "3rem",
});

export const burgerImg = style({
  width: "100%",
});

export const burgerDescription = style({
  flex: 1,
  overflow: "auto",
});
