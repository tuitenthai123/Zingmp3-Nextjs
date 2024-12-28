import NavbarRoutes  from "@/components/Navbar-routes"

import { MobileSidebar } from "./Mobile-sidebar"

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center justify-between md:justify-end bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  )
}