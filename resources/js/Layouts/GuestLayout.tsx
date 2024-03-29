import ApplicationLogo from "@/Components/ApplicationLogo";
import { ModeToggle } from "@/Components/ui/mode-toggle";
import { Link } from "@inertiajs/react";
import { type PropsWithChildren } from "react";

export default function Guest({ children }: PropsWithChildren): JSX.Element {
  return (
    <div className="min-h-screen bg-background">
      <div className="w-full flex justify-end p-2">
        <ModeToggle />
      </div>
      <div className="flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
        <div className="mb-8">
          <Link href="/">
            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}
