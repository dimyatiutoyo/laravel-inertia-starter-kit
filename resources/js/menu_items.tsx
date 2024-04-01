import {
  CalendarIcon,
  CogIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "lucide-react";
import { MenuItems } from "./types/menu_items";

export const menuItems: MenuItems[] = [
  {
    name: "Dashboard",
    href: route("dashboard"),
    icon: HomeIcon,
    active_when_start_with: "/dashboard",
    group: "Getting Started",
  },
  {
    name: "User",
    href: route("users.index"),
    icon: UsersIcon,
    active_when_start_with: "/users",
    group: "Master",
  },
  {
    name: "Projects",
    href: route("profile.edit"),
    icon: FolderIcon,
    active_when_start_with: "/profile",
    group: "Master",
  },
  {
    name: "Calendar",
    href: route("profile.edit"),
    icon: CalendarIcon,
    active_when_start_with: "/profile",
    group: "Getting Started",
  },
  {
    name: "Settings",
    href: route("profile.edit"),
    icon: CogIcon,
    active_when_start_with: "/profile",
    group: "Getting Started",
  },
];
