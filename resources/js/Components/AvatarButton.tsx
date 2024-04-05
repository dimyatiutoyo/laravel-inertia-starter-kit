import { Link } from "@inertiajs/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import type { User } from "@/types";

function AvatarButton({ user }: { user: User }) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="cursor-pointer">
				<Avatar className="w-8 h-8">
					<AvatarImage src={user.avatar_url || ""} alt={user.name} />
					<AvatarFallback>{user.name[0]}</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-40" align="end">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem asChild className="cursor-pointer">
						<Link href={route("dashboard")}>Beranda</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild className="cursor-pointer border-b">
						<Link href={route("profile.edit")}>Profile</Link>
					</DropdownMenuItem>
					<DropdownMenuItem asChild className="cursor-pointer w-full">
						<Link href={route("logout")} method="post" as="button">
							Logout
						</Link>
					</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default AvatarButton;
