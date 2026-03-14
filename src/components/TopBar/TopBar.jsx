import React, { useState, useEffect } from 'react'
import { useLang } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import styles from './TopBar.module.css'

function pad(n) { return String(n).padStart(2, '0') }

function formatDateTime() {
  const now = new Date()
  const mo  = pad(now.getMonth() + 1)
  const dd  = pad(now.getDate())
  const yr  = now.getFullYear()
  const hh  = pad(now.getHours())
  const mm  = pad(now.getMinutes())
  const ss  = pad(now.getSeconds())
  return `${mo}/${dd}/${yr}  ${hh}:${mm}:${ss}`
}

export default function TopBar() {
  const { lang, toggle } = useLang()
  const t = translations[lang]
  const [time, setTime] = useState(formatDateTime())

  useEffect(() => {
    const id = setInterval(() => setTime(formatDateTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <header className={styles.topbar}>
      {/* Logo + Name */}
      <div className={styles.brand}>
        <div className={styles.logoBox} aria-label="Logo">
          <span className={styles.logoPlaceholder}>A</span>
        </div>
        <div className={styles.brandText}>
          <span className={styles.brandName}>{t.appName}</span>
        </div>
      </div>

      {/* Clock */}
      <div className={styles.clock} aria-live="polite">
        {time}
      </div>

      {/* Language toggle */}
      <button
        className={styles.langToggle}
        onClick={toggle}
        aria-label="Toggle language"
      >
        <span className={lang === 'en' ? styles.langActive : styles.langInactive}>EN</span>
        <span className={styles.langDivider}>|</span>
        <span className={lang === 'fil' ? styles.langActive : styles.langInactive}>FIL</span>
      </button>
    </header>
  )
}
