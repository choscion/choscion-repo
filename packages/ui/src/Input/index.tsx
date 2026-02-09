import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react"
import { useId } from "react"
import classNames from "classnames/bind"

import styles from "./Input.module.scss"

const cx = classNames.bind(styles)

type BaseProps = {
  label?: React.ReactNode
  helperText?: React.ReactNode
  error?: boolean
  size?: "small" | "medium" | "large"
  showSearchIcon?: boolean
}

type SingleLineProps = BaseProps & Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & { multiline?: false }
type MultiLineProps = BaseProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> & { multiline: true }

export type InputProps = SingleLineProps | MultiLineProps

export function Input(props: InputProps = {}) {
  const {
    label,
    helperText,
    error = false,
    size = "medium",
    className,
    id,
    disabled,
    multiline,
    showSearchIcon,
    ...rest
  } = props
  const autoId = useId()
  const inputId = id ?? autoId

  let control: React.ReactNode

  if (multiline) {
    control = (
      <textarea
        id={inputId}
        className={cx("input")}
        disabled={disabled}
        {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    )
  } else {
    const { type = "text", ...inputProps } = rest as InputHTMLAttributes<HTMLInputElement>
    const shouldShowSearchIcon = (showSearchIcon ?? type === "search") === true
    control = (
      <div className={cx("control", { "has-icon": shouldShowSearchIcon })}>
        {shouldShowSearchIcon ? (
          <span className={cx("icon")} aria-hidden="true">
            <svg viewBox="0 0 24 24" role="presentation">
              <path d="M10.5 3a7.5 7.5 0 0 1 5.99 12.005l4.252 4.253-1.414 1.414-4.253-4.252A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" />
            </svg>
          </span>
        ) : null}
        <input
          id={inputId}
          className={cx("input", { "with-icon": shouldShowSearchIcon })}
          type={type}
          disabled={disabled}
          {...inputProps}
        />
      </div>
    )
  }

  return (
    <div
      className={cx("field", className, {
        [`size-${size}`]: size,
        error,
        disabled,
      })}
    >
      {label ? (
        <label className={cx("label")} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      {control}
      {helperText ? <div className={cx("helper")}>{helperText}</div> : null}
    </div>
  )
}
