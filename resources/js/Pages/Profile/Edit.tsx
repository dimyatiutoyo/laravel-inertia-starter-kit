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
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
          <div className="grid grid-rows-1 md:grid-cols-12 gap-4">
            <ul className="row-span-1 md:col-span-3 rounded-lg">
              <li className="bg-neutral-500 bg-opacity-5 hover:bg-opacity-10 rounded-lg overflow-hidden">
                <a
                  href="#"
                  className="w-full inline-block px-2 md:px-4 py-1 md:py-3 text-foreground text-xs md:text-sm"
                >
                  <KeyRound className="h-4 md:h-5 w-4 md:w-5 inline-block mr-2" />
                  Authentication
                </a>
              </li>
            </ul>
            <div className="row-span-1 md:col-span-9 flex flex-col gap-6">
              <UpdateProfileInformationForm
                mustVerifyEmail={mustVerifyEmail}
                status={status}
              />

              <UpdatePasswordForm />

              <DeleteUserForm />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
