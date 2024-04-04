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
import { Loader } from "lucide-react";
import { useState, type FormEvent, type FormEventHandler } from "react";

function CreateButton() {
	const [open, setOpen] = useState(false);
	const { data, setData, post, processing, errors, reset } = useForm({
		name: "",
		email: "",
		password: "",
	});

	function submit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		post(route("users.store"), {
			onSuccess: () => {
				setOpen(false);
				reset();
			},
		});
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button>Tambah</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Tambah User</DialogTitle>
					<DialogDescription>
						Isi form di bawah ini untuk menambahkan user baru.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={submit} className="space-y-4">
					<div className="space-y-1">
						<Label htmlFor="name">Nama</Label>
						<Input
							type="text"
							id="name"
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
					<div className="space-y-1">
						<Label htmlFor="password">Password</Label>
						<Input
							type="password"
							id="password"
							value={data.password}
							onChange={(e) => setData("password", e.target.value)}
						/>
					</div>
					<div className="pt-2">
						<Button type="submit" disabled={processing}>
							{processing && <Loader className="animate-spin w-4 mr-2" />}
							Simpan
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
}

export default CreateButton;
