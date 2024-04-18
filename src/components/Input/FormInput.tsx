import { IconInfoCircle } from "@tabler/icons-react"
import { useFormContext } from "react-hook-form"

import { cx } from "../../utils/cx"
import { Label } from "../Label/Label"
import { Tooltip } from "../Tooltip/Tooltip"
import { Input, InputProps } from "./Input"

interface Props extends InputProps {
  name: string
  tooltip?: string
  label: string
  disabled?: boolean
}

const baseClass = "w-full"

const FormInput = ({ label, name, className, tooltip, ...props }: Props) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const errorMessage = errors[name as keyof typeof errors]?.message?.toString()
  const error = Boolean(errorMessage)
  const styles = cx(baseClass, className)

  if (tooltip) {
    ;(props as any).icon = () => (
      <Tooltip content={tooltip}>
        <IconInfoCircle />
      </Tooltip>
    )
  }

  return (
    <div className={styles}>
      <Label htmlFor={name}>{label}</Label>
      <Input {...props} {...register(name)} {...{ error, errorMessage }} />
    </div>
  )
}

export { FormInput }
