import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../Button/Button"
import { Drawer } from "./Drawer"

const meta: Meta<typeof Drawer> = {
  title: "components/Drawer",
  component: Drawer,
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  args: {
    direction: "right",
    heading: "Default Drawer",
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)
    return (
      <>
        <Drawer isOpen={isOpen} onClose={onClose} {...args} />
        <Button onClick={onOpen}>Open Drawer</Button>
        <Button onClick={onClose}>Close Drawer</Button>
      </>
    )
  },
}
