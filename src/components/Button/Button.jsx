import React from 'react'
import styles from './Button.module.css'

/**
 * variant: 'primary' | 'secondary' | 'danger' | 'ghost' | 'success'
 * size:    'lg' | 'md' | 'sm'
 */
export default function Button({
  children,
  onClick,
  variant = 'primary',
  size    = 'md',
  icon,
  disabled = false,
  fullWidth = false,
  type = 'button',
  className = '',
}) {
  return (
    <button
      type={type}
      className={[
        styles.btn,
        styles[variant],
        styles[size],
        fullWidth ? styles.full : '',
        className,
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={styles.icon} aria-hidden="true">{icon}</span>}
      <span className={styles.label}>{children}</span>
    </button>
  )
}
