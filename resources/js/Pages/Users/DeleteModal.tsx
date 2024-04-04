import { Button } from "@/Components/ui/button";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/Components/ui/alert-dialog";

import { useForm } from "@inertiajs/react";
import { Loader } from "lucide-react";
import type { FormEvent, Dispatch, SetStateAction } from "react";

function DeleteModal({
	label = null,
	open,
	setOpen,
	id,
}: {
	label?: string | null;
	open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
	id: number | string | null;
}) {
	const { delete: destroy, data, processing } = useForm();

	const handleDestroy = (e: FormEvent) => {
		e.preventDefault();
		if (id) {
			destroy(route("users.destroy", id), {
				onSuccess: () => {
					setOpen(false);
				},
			});
		}
	};

	return (
		<AlertDialog open={open} onOpenChange={setOpen}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>
						{label
							? `Apakah Anda benar-benar yakin ingin menghapus ${label}?`
							: "Apakah Anda benar-benar yakin?"}
					</AlertDialogTitle>
					<AlertDialogDescription>
						Tindakan ini tidak dapat dibatalkan. Ini akan menghapus data
						tersebut secara permanen.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Batal</AlertDialogCancel>
					<form onSubmit={handleDestroy}>
						<Button variant="destructive" disabled={processing}>
							{processing && <Loader className="w-4 animate-spin mr-2" />}
							Ya, Hapus
						</Button>
					</form>
					{/* <AlertDialogAction>
						{processing && <Loader className="w-4 animate-spin mr-2" />}
						Ya, Hapus
					</AlertDialogAction> */}
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export default DeleteModal;
