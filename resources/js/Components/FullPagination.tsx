import type { MetaLink } from "@/types/paginated";

import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
} from "@/Components/ui/pagination";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { range } from "@/lib/range";

function FullPagination({
	keyData,
	links,
	siblingCount = 1,
	className = "",
}: {
	keyData: string;
	siblingCount?: number;
	links: MetaLink[];
	className?: string;
}) {
	const activeLink = links.find((link) => link.active);
	const activePageNumber = activeLink ? Number.parseInt(activeLink.label) : 1;
	const indexShouldRender = range(
		activePageNumber - siblingCount,
		activePageNumber + (siblingCount + 1),
	);
	const trimLinks = links.slice(1, -1);
	const printLink = trimLinks.filter((link: MetaLink) =>
		indexShouldRender.includes(Number.parseInt(link.label)),
	);

	const prevLinksCount = links.filter(
		(link) => Number.parseInt(link.label) < activePageNumber,
	).length;
	const nextLinksCount = links.filter(
		(link) => Number.parseInt(link.label) > activePageNumber,
	).length;
	return (
		<Pagination className={className}>
			<PaginationContent>
				<PaginationItem>
					<Link
						preserveState
						preserveScroll
						disabled={!links[0].url}
						className={!links[0].url ? "cursor-not-allowed" : ""}
						only={[keyData]}
						href={links[0].url || "#"}
					>
						<Button disabled={!links[0].url} variant="outline">
							<ChevronLeft className="w-5" />
							Previous
						</Button>
					</Link>
				</PaginationItem>
				{prevLinksCount > siblingCount && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}
				{printLink.map((link, index) => {
					if (link.url) {
						return (
							<PaginationItem key={link.url}>
								<Button
									size="icon"
									asChild
									variant={link.active ? "default" : "outline"}
								>
									<Link
										preserveState
										preserveScroll
										only={[keyData]}
										href={link.url}
									>
										{link.label}
									</Link>
								</Button>
							</PaginationItem>
						);
					}
				})}

				{nextLinksCount > siblingCount && (
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
				)}
				<PaginationItem>
					<Link
						preserveState
						preserveScroll
						disabled={!links[links.length - 1].url}
						className={!links[links.length - 1].url ? "cursor-not-allowed" : ""}
						only={[keyData]}
						href={links[links.length - 1].url || "#"}
					>
						<Button disabled={!links[links.length - 1].url} variant="outline">
							Next <ChevronRight className="w-5" />
						</Button>
					</Link>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}

export default FullPagination;
