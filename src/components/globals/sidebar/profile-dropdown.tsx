import { ChevronDown, PlusCircle, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Props = {
  username: string;
};
interface Account {
  username: string;
  email: string;
  isActive: boolean;
}

export const ProfileDropdown = ({ username }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const accounts: Account[] = [
    {
      username: "UtkarshDhairyaPanwar",
      email: "john@company.com",
      isActive: true,
    },
    { username: "User Two", email: "johndoe@gmail.com", isActive: false },
    { username: "John Three", email: "john.doe@client.com", isActive: false },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative w-full" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="shadow-xs flex w-full items-center justify-between rounded-md border border-border-muted px-3 py-2 shadow-[#0A0D120D]"
      >
        <div className="w min-w-0 flex-1">
          <p className="truncate text-start text-base text-text-secondary">
            {username}
          </p>
        </div>
        <ChevronDown
          size={24}
          className={`flex-shrink-0 text-text-secondary ml-1 transition-all ease-in-out duration-150 ${
            isOpen ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 rounded-md border border-border-neutral bg-background-elevated shadow-lg">
          {accounts.map((account, index) => (
            <div
              key={account.email}
              className={`p-3 ${
                index !== accounts.length - 1 ? "border-b border-gray-100" : ""
              } ${
                account.isActive ? "bg-gray-50" : "hover:bg-gray-50"
              } cursor-pointer`}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                  <User size={16} className="text-gray-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {account.username}
                  </p>
                  <p className="text-xs text-gray-500">{account.email}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="border-t border-gray-100 pb-2">
            <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
              <PlusCircle size={16} className="text-gray-500" />
              <span>Add another account</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
