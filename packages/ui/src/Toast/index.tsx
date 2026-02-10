import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./Toast.module.scss"

const cx = classNames.bind(styles)

export interface ToastProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: "info" | "success" | "warning" | "error"
  title?: React.ReactNode
  description?: React.ReactNode
}

export function Toast({ tone = "info", title, description, className, children, ...props }: ToastProps = {}) {
  return (
    <div
      className={cx("toast", className, {
        [`tone-${tone}`]: tone,
      })}
      role="status"
      aria-live="polite"
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          {title ? <div className={cx("title")}>{title}</div> : null}
          {description ? <div className={cx("description")}>{description}</div> : null}
        </>
      )}
    </div>
  )
}
