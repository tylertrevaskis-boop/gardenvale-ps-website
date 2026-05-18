import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gardenvale Primary School | Challenge. Engage. Inspire.",
  description: "Gardenvale Primary School — Two campuses of excellence in East Brighton, Victoria. Prep to Year 6.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%23003D5C'/><text x='50' y='60' text-anchor='middle' font-size='50' font-weight='bold' fill='white' font-family='serif'>G</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
