/**
 * color, size, shape prop을 가지는 Button 컴포넌트를 만들어주세요.
 */

import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import type { Color } from "../Colors"
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  color?: Color
  size?: "small" | "medium" | "large"
  shape?: "solid" | "lined" | "ghost"
}

export function Button({ children, color = "grey900", size = "medium", shape = "solid", ...props }: ButtonProps = {}) {
  return (
    <button
      className={cx("button", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        [`shape-${shape}`]: shape,
      })}
      {...props}
    >
      {children}
    </button>
  )
}
