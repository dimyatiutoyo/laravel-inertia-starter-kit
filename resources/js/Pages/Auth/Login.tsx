import { useEffect, type FormEventHandler, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Button } from "@/Components/ui/button";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

export default function Login({
	status,
	canResetPassword,
}: {
	status?: string;
	canResetPassword: boolean;
}) {
	const [showPassword, setShowPassword] = useState(false);
	const { data, setData, post, processing, errors, reset } = useForm({
		email: "",
		password: "",
		remember: false,
	});

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		return () => {
			reset("password");
		};
	}, []);

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		post(route("login"), {
			onError: (errors) => {
				console.log(errors);
			},
		});
	};

	return (
		<GuestLayout>
			<Head title="Log in" />

			<Card className="max-w-sm w-full">
				<CardHeader>
					<CardTitle>Login ke akunmu</CardTitle>
				</CardHeader>
				<CardContent>
					{status && (
						<div className="mb-4 font-medium text-sm text-green-600">
							{status}
						</div>
					)}

					<form onSubmit={submit}>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								type="email"
								value={data.email}
								onChange={(e) => setData("email", e.target.value)}
							/>

							{errors.email && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.email}
								</div>
							)}
						</div>

						<div className="mt-4">
							<Label htmlFor="password">Password</Label>
							<div className="relative">
								<Input
									id="password"
									name="password"
									type={showPassword ? "text" : "password"}
									value={data.password}
									onChange={(e) => setData("password", e.target.value)}
								/>
								<div className="absolute flex items-center right-0 top-0">
									<Button
										className="cursor-pointer"
										asChild
										onClick={(e) => {
											e.preventDefault();
											setShowPassword(!showPassword);
										}}
										size="icon"
										variant="ghost"
									>
										<span>
											{showPassword ? (
												<Eye className="w-5" />
											) : (
												<EyeOff className="w-5" />
											)}
										</span>
									</Button>
								</div>
								{errors.password && (
									<div className="text-red-600 text-xs mt-2 font-semibold">
										{errors.password}
									</div>
								)}
							</div>
						</div>

						<div className="block mt-4">
							<div className="flex items-center space-x-2">
								<Checkbox id="remember_me" />
								<label
									htmlFor="remember_me"
									className="text-sm text-foreground font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
								>
									Ingat saya
								</label>
							</div>
						</div>

						<div className="flex items-center justify-end mt-4">
							{canResetPassword && (
								<Link
									href={route("password.request")}
									className="underline text-sm text-neutral-600 dark:text-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
								>
									Lupa password?
								</Link>
							)}

							<Button className="ms-4" disabled={processing}>
								{processing && (
									<LoaderCircle className="w-5 mr-2 animate-spin" />
								)}
								Log in
							</Button>
						</div>
					</form>
				</CardContent>
				<CardFooter>
					<div className="text-neutral-600 dark:text-neutral-400 text-sm text-right w-full">
						<span>Belum punya akun?</span>
						<Link href={route("register")} className="underline ml-1">
							Buat akun
						</Link>
					</div>
				</CardFooter>
			</Card>
		</GuestLayout>
	);
}
