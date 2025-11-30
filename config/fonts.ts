import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const moranga = localFont({
  src: "../public/fonts/Moranga Complete Family/Latinotype - Moranga Bold.otf",
  variable: "--font-moranga",
});

export const sfPro = localFont({
  src: [
    {
      path: "../public/fonts/sf-pro/sfprodisplayregular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplaymedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplaybold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplaylightitalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplaythinitalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplayultralightitalic.otf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplaysemibolditalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplayheavyitalic.otf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/fonts/sf-pro/sfprodisplayblackitalic.otf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-sf-pro",
});
