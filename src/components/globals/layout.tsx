import { useState } from "react";
import { Sidebar } from "./sidebar";
import MobileHeader from "./mobile-header";
import { ChildrenProps } from "@/types";

export const Layout = ({ children }: ChildrenProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="flex h-screen">
      <Sidebar
        username="UtkarshDhairyaPanwar"
        isOpen={isSidebarOpen}
        onClose={toggleSidebar}
      />
      <MobileHeader onMenuClick={toggleSidebar} isOpen={isSidebarOpen} />
      <main className="flex-1 overflow-auto bg-background-neutral pt-[60px] md:ml-64 md:pt-0">
        {children}
      </main>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};
