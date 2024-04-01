import { useState, PropsWithChildren, ReactNode } from "react";
import { Link } from "@inertiajs/react";
import { User } from "@/types";
import NavbarResposive, { menuItems } from "@/Components/NavbarResponsive";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/Components/ui/sheet";
import Sidebar from "@/Components/Sidebar";
import { ScrollArea } from "@/Components/ui/scroll-area";
import Footer from "@/Components/Footer.";

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
  return (
    <div className="bg-neutral-50 dark:bg-background">
      <NavbarResposive />

      <main className="flex items-start min-h-screen gap-0 md:gap-4 border-b">
        <Sidebar menuItems={menuItems} />

        <main className="flex-1 max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          {header && (
            <header>
              <div className="max-w-7xl mx-auto py-6">{header}</div>
            </header>
          )}
          {children}
        </main>
      </main>
      <Footer />
    </div>
  );
}
