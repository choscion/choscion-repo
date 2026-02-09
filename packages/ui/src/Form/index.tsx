import type { FormHTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./Form.module.scss"

const cx = classNames.bind(styles)

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  layout?: "stack" | "inline"
  gap?: "small" | "medium" | "large"
}

export function Form({ layout = "stack", gap = "medium", className, ...props }: FormProps = {}) {
  return (
    <form
      className={cx("form", className, {
        [`layout-${layout}`]: layout,
        [`gap-${gap}`]: gap,
      })}
      {...props}
    />
  )
}
