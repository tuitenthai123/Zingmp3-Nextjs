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
        <div className="flex flex-col md:flex-row min-h-screen">
          <aside className="w-full md:w-64 bg-stone-200/65 md:min-h-screen">
            <div className="hidden md:flex h-full flex-col inset-y-0 z-50">
              <Sidebar />
            </div>
          </aside>
          <div className="w-full">
            <div className="w-full">
              <Navbar />
            </div>
            <main className="flex-grow p-4">
              {children}
            </main>
          </div>

        </div>
      </body>
    </html>
  );
}
