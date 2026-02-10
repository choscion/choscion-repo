import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./BottomSheet.module.scss"

const cx = classNames.bind(styles)

export interface BottomSheetProps extends Omit<HTMLAttributes<HTMLDivElement>, "title" | "onClose"> {
  open?: boolean
  title?: React.ReactNode
  footer?: React.ReactNode
  onClose?: () => void
}

export function BottomSheet({ open = false, title, footer, onClose, className, children, ...props }: BottomSheetProps = {}) {
  if (!open) return null

  return (
    <div className={cx("overlay")} role="dialog" aria-modal="true">
      <button className={cx("backdrop")} onClick={onClose} aria-label="Close bottom sheet" />
      <div className={cx("sheet", className)} {...props}>
        {(title || onClose) && (
          <div className={cx("header")}>
            {title ? <div className={cx("title")}>{title}</div> : null}
            {onClose ? (
              <button className={cx("close")} onClick={onClose} aria-label="Close bottom sheet">
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
