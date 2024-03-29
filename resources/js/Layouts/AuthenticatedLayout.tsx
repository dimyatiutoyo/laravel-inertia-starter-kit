import { useState, PropsWithChildren, ReactNode } from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import NavbarResposive from "@/Components/NavbarResponsive";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-background">
      <NavbarResposive />

      {header && (
        <header>
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            {header}
          </div>
        </header>
      )}

      <main>{children}</main>
    </div>
  );
}
