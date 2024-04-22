import { ReactNode } from "react"
import { IconX } from "@tabler/icons-react"
import { default as SlDrawer } from "react-modern-drawer"

import { cx } from "../../utils/cx"
import { Card } from "../Card/Card"

import "react-modern-drawer/dist/index.css"

type Direction = "left" | "right" | "top" | "bottom"
type DrawerProps = {
  heading: string
  isOpen: boolean
  onClose: () => void
  reverse?: boolean
  children: ReactNode
  size?: number
  direction?: Direction
  lockBackgroundScroll?: boolean
  overlayOpacity?: number
  overlayColor?: String
  enableOverlay?: boolean
  style?: React.CSSProperties
  zIndex?: number
  className?: string
  customIdSuffix?: string
  overlayClassName?: string
}

const dirClasses: Record<Direction, string> = {
  left: "rounded-r-2xl h-full",
  right: "rounded-l-2xl h-full",
  top: "rounded-b-2xl w-full",
  bottom: "rounded-t-2xl w-full",
}

const Drawer = ({
  heading,
  isOpen,
  onClose,
  icon,
  children,
  className,
  size = 450,
  direction = "right",
  reverse,
  ...props
}: DrawerProps) => {
  const styles = cx(dirClasses[direction], className)
  return (
    <SlDrawer
      open={isOpen}
      {...{ size, onClose, direction }}
      {...props}
      className={styles}
    >
      <Card className={styles}>
        <div
          className={`mb-4 flex items-start justify-between ${reverse && "flex-row-reverse"} `}
        >
          <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong text-2xl font-semibold  ">
            {heading}
          </h3>

          {icon ?? (
            <IconX
              onClick={onClose}
              className="aspect-square h-9 w-9 cursor-pointer rounded-md p-2 transition-all hover:bg-gray-200 hover:text-black "
            />
          )}
        </div>
        {children}
      </Card>
    </SlDrawer>
  )
}

export { Drawer }
export type { DrawerProps }
