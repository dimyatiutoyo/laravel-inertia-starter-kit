import type { PageProps, User } from "@/types";
import { type KeyboardEventHandler, type ReactElement, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/Components/ui/table";

import type { LinkItem, MetaItem } from "@/types/paginated";
import FullPagination from "@/Components/FullPagination";
import { Input } from "@/Components/ui/input";
import { Pencil, Search, Trash2, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import SearchTextInput from "@/Components/SearchTextInput";
import CreateButton from "./CreateButton";
import FormModal from "./FormModal";
import DeleteButton from "./DeleteModal";
import DeleteModal from "./DeleteModal";
import { TooltipWrapper } from "@/Components/TooltipWrapper";

export type UseFormActionProps = {
	open: boolean;
	action: "edit" | "create";
	id?: number | string | null | undefined;
};
function Index({
	auth,
	users,
	filters,
}: PageProps<{
	users: { data: User[]; links: LinkItem; meta: MetaItem };
	filters: { search: string };
}>) {
	const [formAction, setFormAction] = useState<UseFormActionProps>({
		open: false,
		action: "create",
		id: null,
	});

	const [deleteId, setDeleteId] = useState<number | string | null>(null);
	const [openDelete, setOpenDelete] = useState<boolean>(false);
	const [labelDelete, setLabelDelete] = useState<string | null>(null);

	const handleSearch: KeyboardEventHandler<HTMLInputElement> = (event) => {
		if (event.key !== "Enter") return;
		router.visit(route("users.index"), {
			data: {
				search: event.currentTarget.value,
			},
			preserveState: true,
		});
	};

	const handleCreate = () => {
		setFormAction({
			open: true,
			action: "create",
			id: null,
		});
	};

	const handleEdit = (id: number | string) => {
		setFormAction({
			open: true,
			action: "edit",
			id: id,
		});
	};

	return (
		<div>
			<Head>
				<title>User</title>
			</Head>

			<Card>
				<CardHeader>
					<div className="flex justify-between w-full">
						<Button onClick={handleCreate}>Tambah</Button>
						<SearchTextInput
							search={filters.search || ""}
							handleSearch={handleSearch}
							resetLink={route("users.index")}
						/>
					</div>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-12">#</TableHead>
								<TableHead className="w-60">Nama</TableHead>
								<TableHead>Email</TableHead>
								<TableHead className="w-12" />
							</TableRow>
						</TableHeader>
						<TableBody>
							{users.data.map((user, index) => {
								return (
									<TableRow key={user.uuid}>
										<TableCell
											className="cursor-pointer"
											onClick={() => handleEdit(user.uuid)}
										>
											{index + users.meta.from}
										</TableCell>
										<TableCell
											className="cursor-pointer font-medium"
											onClick={() => handleEdit(user.uuid)}
										>
											{user.name}
										</TableCell>
										<TableCell
											className="cursor-pointer"
											onClick={() => handleEdit(user.uuid)}
										>
											{user.email}
										</TableCell>
										<TableCell>
											<div className="flex gap-1">
												{/* <Button
													size={"icon"}
													variant="outline"
													onClick={() => handleEdit(user.uuid)}
												>
													<Pencil className="w-4" />
												</Button> */}
												<TooltipWrapper tooltip="Hapus">
													<Button
														onClick={() => {
															setDeleteId(user.uuid);
															setLabelDelete(user.name);
															setOpenDelete(true);
														}}
														variant="outline"
														size="icon"
													>
														<Trash2 className="w-4 text-destructive" />
													</Button>
												</TooltipWrapper>
											</div>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
					{users.data.length > 0 && (
						<div className="flex justify-between items-center w-full mt-8">
							<div className="text-sm">
								{`Menampilkan ${users.meta.from} sampai ${users.meta.to} dari ${users.meta.total} data`}
							</div>
							<FullPagination
								className="w-fit mx-0"
								keyData="users"
								siblingCount={2}
								links={users.meta.links}
							/>
						</div>
					)}
				</CardContent>
			</Card>
			<FormModal
				open={formAction.open}
				id={formAction.id}
				action={formAction.action}
				setFormAction={setFormAction}
			/>
			<DeleteModal
				open={openDelete}
				label={labelDelete}
				setOpen={setOpenDelete}
				id={deleteId}
			/>
		</div>
	);
}

Index.layout = (page: ReactElement<PageProps>) => {
	return (
		<AuthenticatedLayout
			user={page.props.auth.user}
			header={
				<h2 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight">
					User
				</h2>
			}
			children={page}
		/>
	);
};

export default Index;
