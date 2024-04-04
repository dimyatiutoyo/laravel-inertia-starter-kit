import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState, type InputHTMLAttributes } from "react";
import { router } from "@inertiajs/react";
import { cn } from "@/lib/utils";

interface SearchTextInputProps extends InputHTMLAttributes<HTMLInputElement> {
	handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	search?: string;
	className?: string;
	// setSearch: (search: string) => void;
	resetLink: string;
}

function SearchTextInput(props: SearchTextInputProps) {
	const { handleSearch, search, className, resetLink, ...rest } = props;
	const [searchValue, setSearchValue] = useState(search);
	return (
		<div className={cn("relative flex items-center", className)}>
			<Input
				{...rest}
				onKeyUp={handleSearch}
				onChange={(e) => setSearchValue(e.target.value)}
				value={searchValue}
				onClick={(e) => e.currentTarget.select()}
				name="search"
				className="w-64 max-w-md pl-8 peer"
				placeholder="Cari..."
			/>
			<Search className="w-4 absolute left-2 text-neutral-500 peer-focus:text-neutral-800" />
			{search && (
				<Button
					onClick={() => {
						setSearchValue("");
						router.get(resetLink);
					}}
					variant="ghost"
					size="icon"
					className="absolute right-0"
				>
					<X className="w-4 text-neutral-500 peer-focus:text-neutral-800" />
				</Button>
			)}
		</div>
	);
}

export default SearchTextInput;
