import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./Alert.module.scss"

const cx = classNames.bind(styles)

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  tone?: "info" | "success" | "warning" | "error"
  title?: React.ReactNode
  description?: React.ReactNode
}

export function Alert({ tone = "info", title, description, className, children, ...props }: AlertProps = {}) {
  return (
    <div
      className={cx("alert", className, {
        [`tone-${tone}`]: tone,
      })}
      role="alert"
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
