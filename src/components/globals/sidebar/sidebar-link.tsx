import { SidebarLinkProps } from "@/constants/sidebar-links";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export const SidebarLink = ({
  href,
  icon,
  name,
  isActive,
  setIsActive,
  onLinkClick,
}: SidebarLinkProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setIsActive?.(name);
    if (href !== "/") {
      navigate(href);
    }
    if (onLinkClick) onLinkClick();
  };

  return (
    <button
      onClick={handleClick}
      aria-label={`Navigate to ${name}`}
      className="w-full"
    >
      <div
        className={classNames(
          "flex items-center gap-2 md:gap-[11px] py-[10px] group hover:bg-action-primary rounded-md cursor-pointer px-[14px] transition-all duration-100 ease-in-out",
          { "bg-action-primary": isActive }
        )}
      >
        <img
          src={`/icons/${icon}.svg`}
          alt={icon}
          className={classNames(
            "w-5 h-[18px] group-hover:[filter:brightness(0)_invert(1)]",
            { "[filter:brightness(0)_invert(1)]": isActive }
          )}
        />
        <p
          className={classNames(
            "group-hover:text-white font-semibold text-base",
            {
              "text-text-secondary": !isActive,
              "text-white": isActive,
            }
          )}
        >
          {name}
        </p>
      </div>
    </button>
  );
};
