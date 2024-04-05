import { Link, router, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useEffect, useState, type FormEventHandler } from "react";
import type { PageProps } from "@/types";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Loader } from "lucide-react";
// Import React FilePond
import * as FilePondBase from "filepond";
import { FilePond, FilePondProps, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Import the plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugin
FilePondBase.registerPlugin(FilePondPluginImagePreview);

// Import the plugin code
import FilePondPluginImageCrop from "filepond-plugin-image-crop";

// Register the plugin
FilePondBase.registerPlugin(FilePondPluginImageCrop);

// Import the plugin code
import FilePondPluginImageResize from "filepond-plugin-image-resize";

// Register the plugin
FilePondBase.registerPlugin(FilePondPluginImageResize);

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import type {
	ActualFileObject,
	FilePondFile,
	FilePondInitialFile,
} from "filepond";

export default function UpdateProfileInformation({
	mustVerifyEmail,
	status,
	className = "",
}: {
	mustVerifyEmail: boolean;
	status?: string;
	className?: string;
}) {
	const user = usePage<PageProps>().props.auth.user;
	const csrf_token = usePage<PageProps>().props.csrf_token as string;

	const [avatars, setAvatars] = useState<
		(string | FilePondInitialFile | Blob | ActualFileObject | FilePondFile)[]
	>([]);

	useEffect(() => {
		setTimeout(() => {
			if (user.avatar_url) {
				setAvatars([
					{
						source: user.avatar_url,
						options: {
							type: "local",
						},
					},
				]);
			}
		}, 300);
	}, [user.avatar_url]);

	const { data, setData, patch, post, errors, processing, recentlySuccessful } =
		useForm<{
			name: string;
			email: string;
			is_avatar_deleted: boolean;
			avatar_tmp?: string | null;
		}>({
			name: user.name,
			email: user.email,
			is_avatar_deleted: false,
			avatar_tmp: null,
		});

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		patch(route("profile.update"));
	};

	return (
		<>
			<Card className="dark:bg-neutral-500 dark:bg-opacity-5">
				<CardHeader>
					<CardTitle>Profile Information</CardTitle>
					<CardDescription>
						Update your account's profile information and email address.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form onSubmit={submit} className="space-y-4">
						<div className="space-y-1">
							<Label htmlFor="name">Name</Label>
							<Input
								id="name"
								value={data.name}
								className="max-w-lg w-full"
								type="text"
								onChange={(e) => setData("name", e.target.value)}
								required
								autoFocus
								autoComplete="name"
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
								id="email"
								type="email"
								className="max-w-lg w-full"
								value={data.email}
								onChange={(e) => setData("email", e.target.value)}
								required
							/>
							{errors.email && (
								<div className="text-red-600 text-xs mt-2 font-semibold">
									{errors.email}
								</div>
							)}
						</div>
						{mustVerifyEmail && user.email_verified_at === null && (
							<div>
								<p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
									Your email address is unverified.
									<Link
										href={route("verification.send")}
										method="post"
										as="button"
										className="ml-1 underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
									>
										Click here to re-send the verification email.
									</Link>
								</p>

								{status === "verification-link-sent" && (
									<div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
										A new verification link has been sent to your email address.
									</div>
								)}
							</div>
						)}

						<div className="space-y-1">
							<Label htmlFor="avatar">Avatar</Label>
							<div className="w-44">
								<FilePond
									name="avatar"
									files={avatars as FilePondInitialFile[]}
									allowImageCrop={true}
									allowImageResize={true}
									imageCropAspectRatio="1:1"
									stylePanelLayout="compact circle"
									styleLoadIndicatorPosition="center bottom"
									styleProgressIndicatorPosition="right bottom"
									styleButtonRemoveItemPosition="left bottom"
									styleButtonProcessItemPosition="right bottom"
									onupdatefiles={(fileItems) => {
										// Set current file objects to this.state
										setAvatars(fileItems.map((fileItem) => fileItem.file));
										if (fileItems.length === 0) {
											setData({
												...data,
												is_avatar_deleted: true,
											});
										}
									}}
									allowMultiple={false}
									acceptedFileTypes={["image/*"]}
									server={{
										load: (source, load, error, progress, abort, headers) => {
											const myRequest = new Request(source);
											fetch(myRequest)
												.then((res) => {
													return res.blob();
												})
												.then(load);
										},
										headers: {
											"X-CSRF-TOKEN": csrf_token,
										},
										process: {
											url: route("profile.avatar.upload"),
											method: "POST",
											onload: (response): string | number => {
												setData({
													...data,
													avatar_tmp: response,
												});

												return response;
											},
										},
										revert: {
											url: route("profile.avatar.revert"),
											method: "DELETE",
										},
									}}
								/>
							</div>
						</div>
						<div className="flex gap-2 items-center">
							<Button disabled={processing} type="submit">
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
		</>
	);
}
