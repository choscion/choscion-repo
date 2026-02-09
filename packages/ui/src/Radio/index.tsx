import type { InputHTMLAttributes } from "react"
import classNames from "classnames/bind"

import type { Color } from "../Colors"
import styles from "./Radio.module.scss"

const cx = classNames.bind(styles)

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: React.ReactNode
  color?: Color
  size?: "small" | "medium" | "large"
}

export function Radio({ label, color = "grey900", size = "medium", className, disabled, ...props }: RadioProps = {}) {
  return (
    <label
      className={cx("radio", className, {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        disabled,
      })}
    >
      <input className={cx("input")} type="radio" disabled={disabled} {...props} />
      <span className={cx("circle")} aria-hidden="true" />
      {label ? <span className={cx("label")}>{label}</span> : null}
    </label>
  )
}
