import type { Metadata } from "next";
import "./globals.css";
import 'react-day-picker/dist/style.css';
// import { AppWrapper } from "./context";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="theme-brand">{children}</div>
      </body>
    </html>
  );
}
