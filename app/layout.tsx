import "../styles/globals.css";
import Footer from "./Footer";
import Header from "./Header";
import { ReduxProviders } from "../redux/provider";
import ThemeProviders from "./ThemeProviders";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="bg-gray-100 dark:bg-zinc-800 transition-all duration-700">
        <ThemeProviders>
          <ReduxProviders>
            <Header />
            <div>{children}</div>
            <Footer />
          </ReduxProviders>
        </ThemeProviders>
      </body>
    </html>
  );
}
