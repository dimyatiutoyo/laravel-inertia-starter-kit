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

function NavbarResposive() {
  return (
    <div className="sticky top-0 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <ApplicationLogo className="block h-9 w-auto fill-current text-foreground" />
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    active={true}
                    asChild
                    className={cn(
                      "text-foreground",
                      navigationMenuTriggerStyle()
                    )}
                  >
                    <Link href={route("profile.edit")}>Profile</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={route("profile.edit")}>Link</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default NavbarResposive;
