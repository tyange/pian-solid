import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/styles.css";

export const paginatorWrapper = style({
  display: "flex",
  justifyContent: "center",
  margin: "2rem 0",
  gap: "0.7rem",
});

export const paginatorButton = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "1.5rem",
  height: "1.5rem",
  padding: 0,
  margin: 0,
  fontSize: vars.fonts.sm,
  textDecoration: "none",
});
