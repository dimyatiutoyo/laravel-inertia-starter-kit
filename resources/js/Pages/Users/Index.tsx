import { PageProps, User } from "@/types";
import { ReactElement } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
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

function Index({
  auth,
  users,
}: PageProps<{ users: { data: User[]; links: LinkItem; meta: MetaItem } }>) {
  return (
    <div>
      <Head>
        <title>User</title>
      </Head>

      <Card className="pt-4">
        {/* <CardHeader> */}
        {/* <CardDescription>
            This is a user list component that displays a list of users. Each
            user is represented by their name, email, and profile picture. The
            list provides a brief overview of the users in a visually appealing
            way. Users can click on a user's profile picture or name to view
            more details about that user.
          </CardDescription> */}
        {/* </CardHeader> */}
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-60">Nama</TableHead>
                <TableHead>Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.data.map((user) => {
                return (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <FullPagination
            keyData="users"
            links={users.meta.links}
          />
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
