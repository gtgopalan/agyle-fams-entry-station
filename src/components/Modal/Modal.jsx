import React, { useEffect } from 'react'
import styles from './Modal.module.css'

/**
 * Modal — full-screen overlay with scrollable content
 * Props:
 *   open     bool
 *   title    string
 *   onClose  fn
 *   children
 */
export default function Modal({ open, title, onClose, children }) {
  useEffect(() => {
    if (!open) return
    const handler = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose?.() }}>
      <div className={styles.sheet} role="dialog" aria-modal="true">
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        </div>
        <div className={styles.body}>{children}</div>
        <div className={styles.footer}>
          <button className={styles.doneBtn} onClick={onClose}>Got it</button>
        </div>
      </div>
    </div>
  )
}
