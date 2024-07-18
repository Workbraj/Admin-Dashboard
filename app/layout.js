"use client";
import "./ui/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col pb-3 text-white font-semibold">
        {children}
        <p>Developed by Bishawa Raj Bhujel</p>
      </body>
    </html>
  );
}
