import React from 'react'
import { useLang } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import styles from './ProgressSteps.module.css'

export default function ProgressSteps({ current }) {
  const { lang } = useLang()
  const t = translations[lang]

  const steps = [
    t.stepFace,
    t.stepID,
    t.stepIdentity,
    t.stepVisit,
    t.stepConsent,
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.track}>
        {steps.map((label, i) => {
          const num    = i + 1
          const done   = num < current
          const active = num === current
          return (
            <React.Fragment key={num}>
              {/* Connector line before (skip first) */}
              {i > 0 && (
                <div className={[styles.line, done || active ? styles.lineDone : ''].join(' ')} />
              )}

              <div className={[
                styles.step,
                active ? styles.active : '',
                done   ? styles.done   : '',
              ].join(' ')}>
                <div className={styles.circle}>
                  {done
                    ? <span className={styles.check}>✓</span>
                    : <span>{num}</span>
                  }
                </div>
                <span className={styles.label}>{label}</span>
              </div>
            </React.Fragment>
          )
        })}
      </div>
      <p className={styles.counter}>
        {t.stepOf} {current} {t.of} {steps.length}
      </p>
    </div>
  )
}
