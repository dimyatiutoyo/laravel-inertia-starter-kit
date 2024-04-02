import { PageProps, User } from "@/types";
import { KeyboardEventHandler, ReactElement, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, usePage } from "@inertiajs/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";

import { LinkItem, MetaItem } from "@/types/paginated";
import FullPagination from "@/Components/FullPagination";
import { Input } from "@/Components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/Components/ui/button";
import SearchTextInput from "@/Components/SearchTextInput";

function Index({
  auth,
  users,
}: PageProps<{ users: { data: User[]; links: LinkItem; meta: MetaItem } }>) {
  const [search, setSearch] = useState("");
  const handleSearch: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key !== "Enter") return;
    router.visit(route("users.index"), {
      data: {
        search: search,
      },
      preserveState: true,
    });
  };

  return (
    <div>
      <Head>
        <title>User</title>
      </Head>

      <Card>
        <CardHeader>
          <div className="flex justify-between w-full">
            <Button>Tambah</Button>
            <SearchTextInput
              handleSearch={handleSearch}
              search={search}
              setSearch={setSearch}
              resetLink={route("users.index")}
            />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">#</TableHead>
                <TableHead className="w-60">Nama</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.data.map((user, index) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell>{index + users.meta.from}</TableCell>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          {users.data.length > 0 && (
            <div className="flex justify-between items-center w-full mt-8">
              <div className="text-sm">
                {`Menampilkan ${users.meta.from} sampai ${users.meta.to} dari ${users.meta.total} data`}
              </div>
              <FullPagination
                className="w-fit mx-0"
                keyData="users"
                siblingCount={2}
                links={users.meta.links}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

Index.layout = (page: ReactElement<PageProps>) => {
  return (
    <AuthenticatedLayout
      user={page.props.auth.user}
      header={
        <h2 className="font-semibold text-4xl text-gray-800 dark:text-gray-200 leading-tight">
          User
        </h2>
      }
      children={page}
    />
  );
};

export default Index;
