import { Button } from "@/Components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/Components/ui/tooltip";
import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

interface TooltipButtonProps extends PropsWithChildren {
	tooltip?: ReactNode | string;
}

export function TooltipWrapper({ tooltip, children }: TooltipButtonProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent>{tooltip}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
