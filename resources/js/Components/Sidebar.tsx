import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { MenuItems } from "@/types/menu_items";
import NavLink from "./NavLink";
import { usePage } from "@inertiajs/react";
import { groupBy } from "@/lib/groupBy";

function Sidebar({
  className = "",
  menuItems = [],
}: {
  className?: string;
  menuItems: MenuItems[];
}) {
  const { url, component } = usePage();
  const groupedMenuItems = groupBy(
    menuItems,
    (i) => i.group,
    (i) => i.group_sort ?? null
  );

  return (
    <aside
      className={cn(
        className,
        "w-0 md:w-60 lg:w-72 transition-all sticky top-16 md:block"
      )}
    >
      <ScrollArea className="h-[calc(100vh-3.5rem)] shrink-0 py-4 px-6 lg:px-8 hidden md:grid md:grid-flow-row">
        {Object.keys(groupedMenuItems).map((key: string) => {
          if (key == "_null_") {
            return groupedMenuItems[key].map((menuItem) => {
              return (
                <NavLink
                  key={menuItem.name}
                  className="w-full mx-2 my-1"
                  href={menuItem.href}
                  active={
                    url.startsWith(menuItem.active_when_start_with)
                      ? true
                      : false
                  }
                >
                  {menuItem.name}
                </NavLink>
              );
            });
          }
          return (
            <div key={"Header" + key}>
              <h2 className="mt-4 font-semibold mx-2 px-1 text-md">{key}</h2>
              {groupedMenuItems[key].map((menuItem) => {
                return (
                  <NavLink
                    key={menuItem.name}
                    className="w-full mx-2 my-1"
                    href={menuItem.href}
                    active={
                      url.startsWith(menuItem.active_when_start_with)
                        ? true
                        : false
                    }
                  >
                    {menuItem.name}
                  </NavLink>
                );
              })}
            </div>
          );
        })}
      </ScrollArea>
    </aside>
  );
}

export default Sidebar;
