import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./Tooltip.module.scss"

const cx = classNames.bind(styles)

export interface TooltipProps extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  content: React.ReactNode
  placement?: "top" | "bottom" | "left" | "right"
}

export function Tooltip({ content, placement = "top", className, children, ...props }: TooltipProps) {
  return (
    <span className={cx("tooltip", className)} {...props}>
      <span className={cx("trigger")}>{children}</span>
      <span className={cx("bubble", `placement-${placement}`)} role="tooltip">
        {content}
      </span>
    </span>
  )
}
