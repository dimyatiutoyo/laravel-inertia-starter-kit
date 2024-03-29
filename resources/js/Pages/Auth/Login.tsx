import { useEffect, FormEventHandler } from "react";
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

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string;
  canResetPassword: boolean;
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("login"));
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
            </div>

            <div className="mt-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
              />
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
                  className="underline text-sm text-neutral-500 dark:text-neutral-500 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                >
                  Lupa passwordmu?
                </Link>
              )}

              <Button
                className="ms-4"
                disabled={processing}
              >
                Log in
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <div className="text-foreground text-sm text-right w-full">
            <span>Tidak punya akun?</span>
            <Link
              href={route("register")}
              className="underline ml-2"
            >
              Buat akun
            </Link>
          </div>
        </CardFooter>
      </Card>
    </GuestLayout>
  );
}
