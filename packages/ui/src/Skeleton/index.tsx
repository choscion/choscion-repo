import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./Skeleton.module.scss"

const cx = classNames.bind(styles)

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number | string
  radius?: number | string
  variant?: "text" | "rect" | "circle"
}

export function Skeleton({
  width,
  height,
  radius,
  variant = "text",
  className,
  style,
  ...props
}: SkeletonProps = {}) {
  return (
    <div
      className={cx("skeleton", className, {
        [`variant-${variant}`]: variant,
      })}
      style={{
        width,
        height,
        borderRadius: radius,
        ...style,
      }}
      {...props}
    />
  )
}
