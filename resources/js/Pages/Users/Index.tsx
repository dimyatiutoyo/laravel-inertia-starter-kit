import { PageProps } from "@/types";
import { ReactElement } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

function Index({ auth }: PageProps) {
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>

      <div className="bg-red-500">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi autem
        voluptates maiores eligendi nobis deleniti, temporibus beatae doloremque
        atque reprehenderit, sint quod omnis adipisci dolorem debitis illo
        architecto rem illum.
      </div>
    </div>
  );
}

Index.layout = (page: ReactElement<PageProps>) => {
  return (
    <AuthenticatedLayout
      user={page.props.auth.user}
      header={
        <h2 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 leading-tight">
          User
        </h2>
      }
      children={page}
    />
  );
};

export default Index;
