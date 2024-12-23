import { sidebarLinks, type SidebarLinkProps } from "@/constants/sidebar-links";
import { useState } from "react";
import { Logo } from "../logo";
import { ProfileDropdown } from "./profile-dropdown";
import { SidebarLink } from "./sidebar-link";

interface SidebarProps {
  username: string;
  isOpen: boolean;
  onClose: () => void;
}

const FIXED_LINKS: SidebarLinkProps[] = [
  { name: "Support", icon: "phone", href: "/" },
  { name: "Logout", icon: "sign-out", href: "/sign-in" },
];

export const Sidebar = ({ username, isOpen, onClose }: SidebarProps) => {
  const [activeLink, setActiveLink] = useState<string>("Repositories");

  const renderSidebarLinks = (links: SidebarLinkProps[]) => (
    <div className="flex flex-col gap-[2px]">
      {links.map((link) => (
        <SidebarLink
          key={link.name}
          {...link}
          isActive={link.name === activeLink}
          setIsActive={setActiveLink}
          onLinkClick={onClose}
        />
      ))}
    </div>
  );

  return (
    <>
      <aside className="border-border hidden h-full border-r bg-background-elevated px-5 py-6 md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col md:justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5">
            <Logo />
            <ProfileDropdown username={username} />
          </div>
          {renderSidebarLinks(sidebarLinks)}
        </div>
        {renderSidebarLinks(FIXED_LINKS)}
      </aside>

      <div
        className={`
          md:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-y-[60px]" : "-translate-y-full"}
        `}
      >
        <div className="absolute inset-0 h-fit bg-white">
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-gray-200 p-4 pb-0">
              <ProfileDropdown username={username} />
            </div>
            <nav className="flex-1 space-y-1 overflow-y-auto px-4 py-3">
              {renderSidebarLinks([...sidebarLinks, ...FIXED_LINKS])}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
