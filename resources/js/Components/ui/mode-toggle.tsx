import { Moon, Sun } from "lucide-react";

import { Button } from "@/Components/ui/button";
import { useTheme } from "@/providers/theme-provider";
import { Transition } from "@headlessui/react";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	return (
		<div>
			<Button
				className="bg-transparent"
				size="icon"
				variant="ghost"
				onClick={() => {
					setTheme(theme === "light" ? "dark" : "light");
				}}
			>
				{theme === "light" ? <Sun className="w-5" /> : <Moon className="w-5" />}
			</Button>
		</div>
	);
}
