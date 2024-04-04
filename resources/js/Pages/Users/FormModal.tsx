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

function FormModal({
	id,
	action,
	open,
	setFormAction,
}: UseFormActionProps & {
	setFormAction: (props: UseFormActionProps) => void;
}) {
	const [loading, setLoading] = useState<boolean>(false);
	const url =
		action === "edit" && id != null
			? route("users.update", id)
			: route("users.store");
	const { data, setData, post, put, processing, errors, reset } = useForm<{
		id?: number | null;
		name: string;
		email: string;
		password?: string | null;
	}>({
		id: null,
		name: "",
		email: "",
		password: "",
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		if (action === "edit" && id != null) {
			setLoading(true);
			axios.get(route("users.edit", id)).then((response) => {
				console.log(response.data.name);
				setData({
					name: response.data.name,
					email: response.data.email,
				});
				setLoading(false);
			});
		}
	}, [action, id]);

	function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const method = action === "edit" ? put : post;
		method(url, {
			onSuccess: () => {
				handleClose();
			},
		});
	}

	const handleClose = () => {
		reset();
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
						</div>
						<div className="space-y-1">
							<Label htmlFor="email">Email</Label>
							<Input
								type="email"
								id="email"
								value={data.email}
								onChange={(e) => setData("email", e.target.value)}
							/>
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

						<div className="pt-2">
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
				<Skeleton className="h-9 w-2/12" />
			</div>
		</div>
	);
}
