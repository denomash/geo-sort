"use client";

import { ThemeProvider } from "next-themes";

import Nav from "@components/Nav";
import ReactQueryProvider from "@context/ReactQueryProvider";

import "@styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

/**
 * Props
 */
type RootLayoutProps = {
  children: React.ReactNode;
};

/**
 * The root layout
 * @param children Children
 * @returns Node to render
 */
const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body>
      <div className="main">
        <div className="gradient"></div>
      </div>

      <main className="app">
        <ThemeProvider attribute="class">
          <ReactQueryProvider>
            <Nav />
            {children}
          </ReactQueryProvider>
        </ThemeProvider>
      </main>
    </body>
  </html>
);

export default RootLayout;
