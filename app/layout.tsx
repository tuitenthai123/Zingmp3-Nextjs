import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider"
import Sidebar from "./_components/Sidebar"
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
        <div className="grid grid-cols-12 min-h-screen">
          <aside className="col-span-2 bg-stone-200/65">
            <Sidebar />
          </aside>
          <main className="col-span-10 p-4">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
