import { Button } from "@/Components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/Components/ui/dialog";
import { useForm } from "@inertiajs/react";
import { Loader, Trash2 } from "lucide-react";
import { type FormEvent, useEffect, useState } from "react";

function DeleteModal({ id }: { id: number | null }) {
	const [open, setOpen] = useState<boolean>(false);

	const { delete: destroy, data, processing } = useForm();

	useEffect(() => {
		if (id !== null && typeof id === "number") {
			setOpen(true);
		}
	}, [id]);

	const handleClose = () => {
		setOpen(false);
	};

	const handleDestroy = (e: FormEvent) => {
		e.preventDefault();
		console.log("destroy");
		if (id) {
			destroy(route("users.destroy", id), {
				onSuccess: () => {
					console.log("success");
					setOpen(false);
				},
			});
		}
	};

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-destructive">
						Are you absolutely sure?
					</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</DialogDescription>
					<form onSubmit={handleDestroy} className="pt-4">
						<Button variant="destructive" disabled={processing}>
							{processing && <Loader className="w-4 animate-spin mr-2" />}
							Yes, Delete
						</Button>
					</form>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default DeleteModal;
