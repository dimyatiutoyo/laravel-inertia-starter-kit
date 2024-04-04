import { Button } from "@/Components/ui/button";
import { ModeToggle } from "@/Components/ui/mode-toggle";
import { Head, Link } from "@inertiajs/react";
import { ChevronLeft, ServerCrash } from "lucide-react";

function ErrorPage({ status }: { status: number }) {
	const title = {
		503: "Sorry! Service Unavailable 😭",
		500: "Whoops! Server Error 😵",
		404: "Sorry! Page Not Found 🚨",
		403: "Sorry! Forbidden ⛔",
	}[status];

	const description = {
		503: "We are doing some maintenance. Please check back soon.",
		500: "Something went wrong on our servers.",
		404: "The page you are looking for could not be found.",
		403: "You are forbidden from accessing this page.",
	}[status];

	return (
		<div>
			<Head>
				<title>{`${title} - ${status}`}</title>
			</Head>
			<div className="h-10 flex items-center justify-end">
				<ModeToggle />
			</div>
			<div className="flex justify-center items-center gap-4 h-[calc(100vh-2.5rem)] w-full bg-background">
				<div className="flex items-start gap-6 ml-16">
					<ServerCrash className="w-14 h-14 text-red-400 dark:text-red-500" />
					<div className="text-left">
						<h1 className="font-medium text-2xl dark:text-neutral-400">
							{title}
						</h1>
						<div className="dark:text-neutral-400">{description}</div>
						<Button
							variant="outline"
							className="mt-4 pl-2 dark:text-neutral-400"
							onClick={() => {
								history.back();
							}}
						>
							<ChevronLeft className="w-4" />
							Go back
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ErrorPage;
