import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./CardBox.module.scss"

const cx = classNames.bind(styles)

export interface CardBoxProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "elevated" | "outlined" | "ghost"
  padding?: "small" | "medium" | "large"
}

export function CardBox({
  variant = "elevated",
  padding = "medium",
  className,
  ...props
}: CardBoxProps = {}) {
  return (
    <div
      className={cx("card", className, {
        [`variant-${variant}`]: variant,
        [`padding-${padding}`]: padding,
      })}
      {...props}
    />
  )
}
