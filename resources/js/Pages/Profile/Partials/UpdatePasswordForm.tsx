import { useRef, type FormEventHandler } from "react";
import { useForm } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Loader } from "lucide-react";

export default function UpdatePasswordForm({
	className = "",
}: {
	className?: string;
}) {
	const passwordInput = useRef<HTMLInputElement>(null);
	const currentPasswordInput = useRef<HTMLInputElement>(null);

	const { data, setData, errors, put, reset, processing, recentlySuccessful } =
		useForm({
			current_password: "",
			password: "",
			password_confirmation: "",
		});

	const updatePassword: FormEventHandler = (e) => {
		e.preventDefault();

		put(route("password.update"), {
			preserveScroll: true,
			onSuccess: () => reset(),
			onError: (errors) => {
				if (errors.password) {
					reset("password", "password_confirmation");
					passwordInput.current?.focus();
				}

				if (errors.current_password) {
					reset("current_password");
					currentPasswordInput.current?.focus();
				}
			},
		});
	};

	return (
		<div className={className}>
			<Card className="dark:bg-neutral-500 dark:bg-opacity-5">
				<CardHeader>
					<CardTitle>Update Password</CardTitle>
					<CardDescription>
						Ensure your account is using a long, random password to stay secure.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={updatePassword} className="space-y-4">
						<div className="space-y-1">
							<Label htmlFor="current_password">Current Password</Label>
							<Input
								id="current_password"
								name="current_password"
								type="password"
								ref={currentPasswordInput}
								value={data.current_password}
								className="max-w-lg"
								onChange={(e) => setData("current_password", e.target.value)}
							/>
							{errors.current_password && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.current_password}
								</div>
							)}
						</div>
						<div className="space-y-1">
							<Label htmlFor="password">New Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								value={data.password}
								className="max-w-lg"
								onChange={(e) => setData("password", e.target.value)}
							/>
							{errors.password && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.password}
								</div>
							)}
						</div>
						<div className="space-y-1">
							<Label htmlFor="password_confirmation">Confirm Password</Label>
							<Input
								id="password_confirmation"
								name="password_confirmation"
								type="password"
								value={data.password_confirmation}
								className="max-w-lg"
								onChange={(e) =>
									setData("password_confirmation", e.target.value)
								}
							/>
							{errors.password_confirmation && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.password_confirmation}
								</div>
							)}
						</div>

						<div className="flex items-center gap-4">
							<Button type="submit" disabled={processing}>
								{processing ? (
									<Loader className="w-5 h-5 animate-spin mr-2" />
								) : null}
								Save
							</Button>

							<Transition
								show={recentlySuccessful}
								enter="transition ease-in-out"
								enterFrom="opacity-0"
								leave="transition ease-in-out"
								leaveTo="opacity-0"
							>
								<p className="text-sm text-gray-600 dark:text-gray-400">
									Saved.
								</p>
							</Transition>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
