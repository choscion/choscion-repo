import type { InputHTMLAttributes } from "react"
import classNames from "classnames/bind"

import type { Color } from "../Colors"
import styles from "./Switch.module.scss"

const cx = classNames.bind(styles)

export interface SwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: React.ReactNode
  color?: Color
  size?: "small" | "medium" | "large"
}

export function Switch({
  label,
  color = "blue500",
  size = "medium",
  className,
  disabled,
  ...props
}: SwitchProps = {}) {
  return (
    <label
      className={cx("switch", className, {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        disabled,
      })}
    >
      <input className={cx("input")} type="checkbox" disabled={disabled} {...props} />
      <span className={cx("track")} aria-hidden="true">
        <span className={cx("thumb")} />
      </span>
      {label ? <span className={cx("label")}>{label}</span> : null}
    </label>
  )
}
