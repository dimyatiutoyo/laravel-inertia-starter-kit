import { type LucideIcon } from "lucide-react"

export type MenuItems = {
  name: string,
  href: string,
  icon: JSX.Element | LucideIcon,
  current: boolean
}
