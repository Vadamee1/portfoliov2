import { Kanit, Libre_Baskerville, Merriweather } from "next/font/google";

export const titleFont = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const nameFont = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const listFont = Kanit({
  subsets: ["latin"],
  weight: ["400"],
});
