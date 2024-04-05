import { Link, usePage } from "@inertiajs/react";
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
import type { MenuItems } from "@/types/menu_items";
import type { PageProps, User } from "@/types";

export default function NavbarResposive({
	className,
	menuItems = [],
}: {
	className?: string;
	menuItems: MenuItems[];
}) {
	const page = usePage<PageProps<{ appName: string }>>();
	const user = page.props.auth.user as User;

	return (
		<div
			className={cn(
				"sticky top-0 backdrop-blur-md border-b border-b-neutral-400 border-opacity-30 z-10",
				className,
			)}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-14 flex items-center justify-between">
					<div className="flex items-center gap-8">
						<div className="flex gap-2">
							<MobileDrawer
								appName={page.props.appName}
								className="md:hidden"
							/>
							<ApplicationLogo className="hidden md:block h-9 w-auto fill-current text-foreground" />
						</div>
						{/* <NavigationMenu className="hidden md:block">
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
            </NavigationMenu> */}
					</div>
					<div className="flex gap-1 items-center">
						<ModeToggle />
						<AvatarButton user={user} />
					</div>
				</div>
			</div>
		</div>
	);
}

function MobileDrawer({
	className,
	appName,
}: {
	className?: string;
	appName: string;
}) {
	return (
		<Sheet>
			<SheetTrigger asChild className={className}>
				<Button size="icon" variant="ghost">
					<Menu className="h-5 w-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="overflow-y-auto">
				<SheetHeader>
					<SheetTitle className="flex items-center gap-2">
						<ApplicationLogo className="h-6 w-auto fill-current text-foreground" />
						<span className="text-xl">{appName}</span>
					</SheetTitle>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
}
