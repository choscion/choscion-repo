import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./Modal.module.scss"

const cx = classNames.bind(styles)

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  open?: boolean
  title?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
}

export function Modal({ open = false, title, footer, onClose, className, children, ...props }: ModalProps = {}) {
  if (!open) return null

  return (
    <div className={cx("overlay")} role="dialog" aria-modal="true">
      <button className={cx("backdrop")} onClick={onClose} aria-label="Close modal" />
      <div className={cx("modal", className)} {...props}>
        {(title || onClose) && (
          <div className={cx("header")}>
            {title ? <div className={cx("title")}>{title}</div> : null}
            {onClose ? (
              <button className={cx("close")} onClick={onClose} aria-label="Close modal">
                ×
              </button>
            ) : null}
          </div>
        )}
        <div className={cx("body")}>{children}</div>
        {footer ? <div className={cx("footer")}>{footer}</div> : null}
      </div>
    </div>
  )
}
