import { useState, PropsWithChildren, ReactNode } from "react";
import { Link, usePage } from "@inertiajs/react";
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
import Sidebar from "@/Components/Sidebar";
import { ScrollArea } from "@/Components/ui/scroll-area";
import Footer from "@/Components/Footer.";
import { menuItems } from "@/menu_items";

export default function Authenticated({
  user,
  header,
  children,
}: PropsWithChildren<{
  user: User;
  header?: ReactNode;
}>) {
  return (
    <div className="bg-neutral-50 dark:bg-background">
      <NavbarResposive menuItems={menuItems} />

      <div className="border-b">
        <main className="flex items-start min-h-screen gap-0 md:gap-4 max-w-7xl mx-auto">
          <Sidebar menuItems={menuItems} />

          <main className="flex-1 max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            {header && (
              <header>
                <div className="py-6">{header}</div>
              </header>
            )}
            {children}
          </main>
        </main>
      </div>
      <Footer />
    </div>
  );
}
