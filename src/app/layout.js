import "./globals.css";

export const metadata = {
  title: "CRED Garage",
  description:
    "A pixel-perfect animated replica of CRED Garage dashboard built with Next.js.",
  icons: {
    icon: "/garage.png",
  },
  openGraph: {
    title: "CRED Garage Clone",
    description:
      "Explore rewards, perks, and more — beautifully animated and inspired by CRED Garage.",
    url: "https://cred-garage-dashboard-seven.vercel.app/",
    siteName: "CRED Garage",
    type: "website",
    images: [
      {
        url: "/preview.png",
        width: 1200,
        height: 630,
        alt: "CRED Garage Hero",
      },
    ],
  },
  themeColor: "#0B0E11",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
