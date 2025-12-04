import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Alejandro De La Mora | Resume",
  description:
    "Blue, playful resume site for Alejandro De La Mora built with Next.js.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={fredoka.className}>
      <body>{children}</body>
    </html>
  );
}
