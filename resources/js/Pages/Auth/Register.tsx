import { useEffect, FormEventHandler } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { EyeOff } from "lucide-react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <GuestLayout>
      <Head title="Register" />
      <Card className="max-w-sm w-full">
        <CardHeader>
          <CardTitle>Daftar akun baru</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit}>
            <div>
              <Label htmlFor="name">Nama</Label>

              <Input
                id="name"
                name="name"
                value={data.name}
                className="mt-1 block w-full"
                autoComplete="name"
                type="text"
                autoFocus
                onChange={(e) => setData("name", e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="email">Email</Label>

              <Input
                id="email"
                name="email"
                value={data.email}
                className="mt-1 block w-full"
                autoComplete="email"
                type="email"
                onChange={(e) => setData("email", e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>

              <Input
                id="password"
                name="password"
                type="password"
                value={data.password}
                className="mt-1 block w-full"
                onChange={(e) => setData("password", e.target.value)}
                required
              />
            </div>

            <div className="mt-4">
              <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
              <Input
                id="password_confirmation"
                name="password_confirmation"
                type="password"
                value={data.password_confirmation}
                className="mt-1 block w-full"
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
                required
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link
                href={route("login")}
                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
              >
                Sudah punya akun?
              </Link>

              <Button
                className="ms-4"
                disabled={processing}
              >
                Register
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </GuestLayout>
  );
}
