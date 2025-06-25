import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className=" text-white">{children}</body>
    </html>
  );
}
