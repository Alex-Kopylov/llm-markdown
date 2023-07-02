import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import classNames from "classnames";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const monospace = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classNames(
          sans.className,
          sans.variable,
          monospace.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
