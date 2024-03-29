import { Link } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";
import { ModeToggle } from "./ui/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/Components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  CalendarIcon,
  CogIcon,
  FolderIcon,
  HomeIcon,
  Menu,
  UsersIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import AvatarButton from "./AvatarButton";

const menuItems = [
  {
    name: "Dashboard",
    href: route("dashboard"),
    icon: HomeIcon,
    current: false,
  },
  {
    name: "Team",
    href: route("profile.edit"),
    icon: UsersIcon,
    current: false,
  },
  {
    name: "Projects",
    href: route("profile.edit"),
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Calendar",
    href: route("profile.edit"),
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Settings",
    href: route("profile.edit"),
    icon: CogIcon,
    current: false,
  },
];

export default function NavbarResposive({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "sticky top-0 backdrop-blur-md border-b border-b-neutral-100 dark:border-b-neutral-900",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              <MobileDrawer className="sm:hidden" />
              <ApplicationLogo className="hidden sm:block h-9 w-auto fill-current text-foreground" />
            </div>
            <NavigationMenu className="hidden sm:block">
              <NavigationMenuList className="gap-0">
                {menuItems.map((item, index) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      active={index == 1}
                      asChild
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent data-[active]:bg-transparent data-[active]:text-neutral-800 hover:bg-transparent hover:text-neutral-800 text-neutral-500 dark:text-neutral-300 dark:hover:text-neutral-100 dark:data-[active]:text-neutral-100"
                      )}
                    >
                      <Link href={item.href}>
                        <span>{item.name}</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex gap-1 items-center">
            <ModeToggle />
            <AvatarButton />
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileDrawer({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className={className}
      >
        <Button
          size="icon"
          variant="ghost"
        >
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ApplicationLogo className="h-6 w-auto fill-current text-foreground" />
            <span className="text-xl">crispy.net</span>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
