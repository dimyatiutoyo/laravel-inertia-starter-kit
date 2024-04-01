import { type LucideIcon } from "lucide-react"

export type MenuItems = {
  name: string,
  href: string,
  icon: JSX.Element | LucideIcon,
  active_when_start_with: string,
  group: string|symbol|number,
  group_sort?: number|null
}
