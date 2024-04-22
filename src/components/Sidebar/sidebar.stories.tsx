import { useState } from "react"
import type { Meta, StoryObj } from "@storybook/react"

import { Sidebar } from "./Sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "components/Sidebar",
  component: Sidebar,
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Default: Story = {
  args: {
    openWidth: 500,
    closeWidth: 200,
    direction: "left",
  },
  render: ({ ...args }) => {
    const [isOpen, setIsOpen] = useState(false)
    const onOpen = () => setIsOpen(true)
    const onClose = () => setIsOpen(false)
    return <Sidebar {...{ isOpen, onClose, onOpen }} {...args}></Sidebar>
  },
}
