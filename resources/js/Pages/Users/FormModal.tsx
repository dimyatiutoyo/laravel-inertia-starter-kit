import { Button } from "@/Components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm } from "@inertiajs/react";
import axios from "axios";
import { Loader } from "lucide-react";
import { useState, type FormEvent, useEffect } from "react";
import type { UseFormActionProps } from "./Index";
import { Skeleton } from "@/Components/ui/skeleton";
import type { Role, User } from "@/types";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";

function FormModal({
	id,
	action,
	open,
	setFormAction,
}: UseFormActionProps & {
	setFormAction: (props: UseFormActionProps) => void;
}) {
	const [loading, setLoading] = useState<boolean>(false);
	const [roles, setRoles] = useState<Role[]>([]);

	const url =
		action === "edit" && id != null
			? route("users.update", id)
			: route("users.store");

	const { data, setData, post, put, clearErrors, processing, errors, reset } =
		useForm<{
			id?: number | string | null;
			name: string;
			email: string;
			password?: string | null;
			role?: string;
		}>({
			id: null,
			name: "",
			email: "",
			password: "",
			role: "",
		});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const promiseUser =
			action === "edit" && id != null ? getUser(id) : Promise.resolve("user");
		const promiseRoles = open ? getRoles() : Promise.resolve("roles");

		setLoading(true);
		Promise.all([promiseUser, promiseRoles]).then((values) => {
			setLoading(false);
		});
	}, [open]);

	async function getUser(id: number | string) {
		const response = await axios.get(route("users.edit", id));
		const user = response.data.data;
		setData({
			name: user.name,
			email: user.email,
			role: user.role,
		});
		return user;
	}

	async function getRoles() {
		const response = await axios.get(route("roles.index"));
		const roles = response.data.data;
		setRoles(roles);
		return roles;
	}

	function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const method = action === "edit" ? put : post;
		method(url, {
			preserveScroll: true,
			preserveState: true,
			onSuccess: () => {
				handleClose();
			},
		});
	}

	const handleClose = () => {
		reset();
		clearErrors();
		setFormAction({
			open: false,
			action: action,
			id: null,
		});
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="capitalize">{action} User</DialogTitle>
					<DialogDescription>
						{action === "create"
							? "Isi form di bawah ini untuk menambahkan user baru."
							: "Isi form di bawah ini untuk mengubah user."}
					</DialogDescription>
				</DialogHeader>
				{loading ? (
					<FormSkeleton action={action} />
				) : (
					<form onSubmit={submit} className="space-y-4">
						<div className="space-y-1">
							<Label htmlFor="name">Nama</Label>
							<Input
								type="text"
								id="name"
								autoFocus
								value={data.name}
								onChange={(e) => setData("name", e.target.value)}
							/>
							{errors.name && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.name}
								</div>
							)}
						</div>
						<div className="space-y-1">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								value={data.email}
								onChange={(e) => setData("email", e.target.value)}
							/>
							{errors.email && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.email}
								</div>
							)}
						</div>

						{action === "create" && (
							<div className="space-y-1">
								<Label htmlFor="password">Password</Label>
								<Input
									type="password"
									id="password"
									onChange={(e) => setData("password", e.target.value)}
								/>
							</div>
						)}

						<div className="space-y-2">
							<Label htmlFor="roles">Roles</Label>
							<RadioGroup
								defaultValue={data.role}
								onValueChange={(value) => setData("role", value)}
							>
								{roles?.map((role, i) => (
									<div
										key={`role${role.name}`}
										className="flex items-center space-x-2"
									>
										<RadioGroupItem value={role.name} id={role.name} />
										<Label htmlFor={role.name}>{role.display_name}</Label>
									</div>
								))}
							</RadioGroup>
							{errors.role && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.role}
								</div>
							)}
						</div>

						<div className="pt-2 flex justify-end">
							<Button type="submit" disabled={processing}>
								{processing && <Loader className="animate-spin w-4 mr-2" />}
								Simpan
							</Button>
						</div>
					</form>
				)}
			</DialogContent>
		</Dialog>
	);
}

export default FormModal;

function FormSkeleton({ action }: { action: string }) {
	return (
		<div className="flex flex-col items-center space-y-5">
			<div className="space-y-2 w-full">
				<div className="space-y-2">
					<Skeleton className="h-4 w-2/12" />
					<Skeleton className="h-9 w-full" />
				</div>
			</div>
			<div className="space-y-2 w-full">
				<div className="space-y-2">
					<Skeleton className="h-4 w-2/12" />
					<Skeleton className="h-9 w-full" />
				</div>
			</div>
			{action === "create" && (
				<div className="space-y-2 w-full">
					<div className="space-y-2">
						<Skeleton className="h-4 w-2/12" />
						<Skeleton className="h-9 w-full" />
					</div>
				</div>
			)}
			<div className="space-y-2 w-full">
				<div className="space-y-2">
					<Skeleton className="h-4 w-2/12" />
					<Skeleton className="h-4 w-4/12" />
					<Skeleton className="h-4 w-2/12" />
					<Skeleton className="h-4 w-3/12" />
				</div>
			</div>
			<div className="flex justify-end w-full">
				<Skeleton className="h-9 w-2/12" />
			</div>
		</div>
	);
}
