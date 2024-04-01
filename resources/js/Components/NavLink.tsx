import { cn } from "@/lib/utils";
import { Link, InertiaLinkProps } from "@inertiajs/react";

export default function NavLink({
  active = false,
  className = "",
  children,
  ...props
}: InertiaLinkProps & { active: boolean }) {
  const activeClassname =
    "text-neutral-900 dark:text-neutral-100 font-semibold";
  const inActiveClassname =
    "border-transparent text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 hover:border-neutral-300 dark:hover:border-neutral-700 focus:text-neutral-700 dark:focus:text-neutral-300 focus:border-neutral-300 dark:focus:border-neutral-700";
  const currentClassName = active ? activeClassname : inActiveClassname;
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center px-1 pt-1 text-sm font-normal leading-5 transition duration-150 ease-in-out focus:outline-none",
        currentClassName,
        className
      )}
    >
      {children}
    </Link>
  );
}
