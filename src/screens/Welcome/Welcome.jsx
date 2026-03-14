import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import Button from '../../components/Button/Button'
import styles from './Welcome.module.css'

export default function Welcome() {
  const navigate = useNavigate()
  const { lang }  = useLang()
  const { reset } = useVisitorFlow()
  const t = translations[lang]

  const handleVisitor = () => {
    reset()
    navigate('/checkin/1')
  }

  return (
    <main className={styles.screen}>
      {/* Background accent */}
      <div className={styles.bgAccent} />

      <div className={styles.content}>
        {/* Facility greeting */}
        <div className={styles.hero}>
          <p className={styles.greeting}>{t.welcomeGreeting}</p>
          <h1 className={styles.title}>{t.welcomeTitle}</h1>
          <p className={styles.subtitle}>{t.welcomeSubtitle}</p>
        </div>

        {/* Action cards */}
        <div className={styles.cards}>
          {/* Visitor check-in card */}
          <button className={[styles.card, styles.cardPrimary].join(' ')} onClick={handleVisitor}>
            <span className={styles.cardIcon}>🪪</span>
            <span className={styles.cardLabel}>{t.welcomeVisitorBtn}</span>
            <span className={styles.cardSub}>{t.welcomeVisitorSub}</span>
          </button>

          {/* Employee attendance card (Phase 2 placeholder) */}
          <button className={[styles.card, styles.cardSecondary].join(' ')} disabled>
            <span className={styles.cardIcon}>👤</span>
            <span className={styles.cardLabel}>{t.welcomeEmployeeBtn}</span>
            <span className={styles.cardSub}>{t.welcomeEmployeeSub}</span>
            <span className={styles.cardBadge}>{t.comingSoon}</span>
          </button>
        </div>

        {/* Reception override — small link */}
        <p className={styles.receptionNote}>{t.welcomeReceptionNote}</p>

        {/* Staff access */}
        <button className={styles.staffBtn} onClick={() => navigate('/staff')}>
          🔐 Staff / Admin Access
        </button>
      </div>
    </main>
  )
}
