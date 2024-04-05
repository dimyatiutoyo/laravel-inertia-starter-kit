import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { type PageProps, User } from "@/types";
import { KeyRound } from "lucide-react";
import type { ReactElement, ReactNode } from "react";

function Edit({
	auth,
	mustVerifyEmail,
	status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
	return (
		<>
			<Head title="Profile" />

			<div>
				<div className="row-span-1 md:col-span-9 flex flex-col gap-6">
					<UpdateProfileInformationForm
						mustVerifyEmail={mustVerifyEmail}
						status={status}
					/>

					<UpdatePasswordForm />

					<DeleteUserForm />
				</div>
			</div>
		</>
	);
}

Edit.layout = (page: ReactElement<PageProps>) => {
	return (
		<AuthenticatedLayout
			user={page.props.auth.user}
			header={
				<h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
					Profile
				</h2>
			}
		>
			{page}
		</AuthenticatedLayout>
	);
};

export default Edit;
