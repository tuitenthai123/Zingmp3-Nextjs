import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "./_components/Sidebar"
import { Navbar } from "./_components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tuitenthaimp3",
  description: "Chill time with me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <aside className="w-64 flex-shrink-0 hidden md:block">
            <Sidebar />
          </aside>
          <main className="flex-1 flex flex-col h-full">
            <div className="h-[64px] flex-shrink-0">
              <Navbar />
            </div>
            <div className="flex-1 overflow-y-auto w-full">
              <div className="w-full p-4">
                {children}
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}

