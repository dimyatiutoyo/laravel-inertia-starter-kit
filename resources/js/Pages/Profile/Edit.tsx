import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { KeyRound } from "lucide-react";

export default function Edit({
  auth,
  mustVerifyEmail,
  status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
          Profile
        </h2>
      }
    >
      <Head title="Profile" />
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-12 gap-4">
          <ul className="col-span-3 rounded-lg">
            <li className="bg-neutral-500 bg-opacity-5 hover:bg-opacity-10 rounded-lg overflow-hidden">
              <a
                href="#"
                className="w-full inline-block px-4 py-3 text-foreground"
              >
                <KeyRound className="h-5 w-5 inline-block mr-2" />
                Authentication
              </a>
            </li>
          </ul>
          <div className="col-span-9 flex flex-col gap-6">
            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
              <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
                className="max-w-xl"
              />
            </div>

            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
              <UpdatePasswordForm className="max-w-xl" />
            </div>

            <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
              <DeleteUserForm className="max-w-xl" />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
