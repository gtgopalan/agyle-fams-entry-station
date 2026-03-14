import React from 'react'
import styles from './FormField.module.css'

/**
 * FormField — label + input/select/textarea wrapper
 * Props:
 *   label      string
 *   sublabel   string (optional bilingual sub-label)
 *   required   bool
 *   error      string
 *   children   the input element
 */
export default function FormField({ label, sublabel, required, error, children }) {
  return (
    <div className={[styles.field, error ? styles.hasError : ''].join(' ')}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
          {sublabel && <span className={styles.sublabel}>{sublabel}</span>}
        </label>
      )}
      <div className={styles.control}>{children}</div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}
