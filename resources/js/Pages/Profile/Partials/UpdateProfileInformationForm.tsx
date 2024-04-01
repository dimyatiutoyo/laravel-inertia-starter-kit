import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { FormEventHandler } from "react";
import { PageProps } from "@/types";
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

  const { data, setData, patch, errors, processing, recentlySuccessful } =
    useForm({
      name: user.name,
      email: user.email,
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
          <form
            onSubmit={submit}
            className="space-y-4"
          >
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
            <div className="flex gap-2 items-center">
              <Button
                disabled={processing}
                type="submit"
              >
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
      {/* <section className={className}>
        <header>
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Profile Information
          </h2>

          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
            Update your account's profile information and email address.
          </p>
        </header>

        <form
          onSubmit={submit}
          className="mt-6 space-y-6"
        >
          <div>
            <InputLabel
              htmlFor="name"
              value="Name"
            />

            <TextInput
              id="name"
              className="mt-1 block w-full"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              required
              isFocused
              autoComplete="name"
            />

            <InputError
              className="mt-2"
              message={errors.name}
            />
          </div>

          <div>
            <InputLabel
              htmlFor="email"
              value="Email"
            />

            <TextInput
              id="email"
              type="email"
              className="mt-1 block w-full"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              required
              autoComplete="username"
            />

            <InputError
              className="mt-2"
              message={errors.email}
            />
          </div>

          {mustVerifyEmail && user.email_verified_at === null && (
            <div>
              <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                Your email address is unverified.
                <Link
                  href={route("verification.send")}
                  method="post"
                  as="button"
                  className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
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

          <div className="flex items-center gap-4">
            <PrimaryButton disabled={processing}>Save</PrimaryButton>

            <Transition
              show={recentlySuccessful}
              enter="transition ease-in-out"
              enterFrom="opacity-0"
              leave="transition ease-in-out"
              leaveTo="opacity-0"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
            </Transition>
          </div>
        </form>
      </section> */}
    </>
  );
}
