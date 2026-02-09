import type { HTMLAttributes } from "react"
import classNames from "classnames/bind"

import styles from "./List.module.scss"

const cx = classNames.bind(styles)

export interface ListProps extends HTMLAttributes<HTMLUListElement> {
  ordered?: boolean
}

export function List({ ordered = false, className, ...props }: ListProps = {}) {
  const Component = ordered ? "ol" : "ul"
  return <Component className={cx("list", className)} {...props} />
}

export interface ListItemProps extends HTMLAttributes<HTMLLIElement> {}

export function ListItem({ className, ...props }: ListItemProps = {}) {
  return <li className={cx("item", className)} {...props} />
}
