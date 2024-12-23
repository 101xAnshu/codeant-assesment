import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

interface MobileHeaderProps {
  onMenuClick: () => void;
  isOpen: boolean;
}

export default function MobileHeader({
  onMenuClick,
  isOpen,
}: MobileHeaderProps) {
  return (
    <header className="fixed left-0 right-0 top-0 z-[32] flex h-[60px] items-center justify-between border-b border-gray-200 bg-white px-4 md:hidden">
      <Logo />
      <button
        onClick={onMenuClick}
        className="rounded-md p-2 hover:bg-gray-100"
        aria-label="Open menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}
