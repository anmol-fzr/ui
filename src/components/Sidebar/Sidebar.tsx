import { Icon } from "@radix-ui/react-select"
import { IconMenu2, IconX } from "@tabler/icons-react"

import { Drawer, DrawerProps } from "../Drawer/Drawer"

type SidebarProps = Omit<DrawerProps, "width" | "heading"> & {
  openWidth: number
  closeWidth: number
  onOpen: () => void
  direction: "left" | "right"
}

const Sidebar = ({
  isOpen,
  onOpen,
  onClose,
  openWidth,
  closeWidth,
  ...props
}: SidebarProps) => {
  return (
    <Drawer
      isOpen
      heading=""
      icon={
        isOpen ? <IconX onClick={onClose} /> : <IconMenu2 onClick={onOpen} />
      }
      size={isOpen ? openWidth : closeWidth}
      reverse
      {...props}
      className="rounded-none"
    />
  )
}

export { Sidebar }
