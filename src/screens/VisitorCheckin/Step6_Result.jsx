import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { useRecords } from '../../context/RecordsContext'
import { translations } from '../../i18n/index'
import Button from '../../components/Button/Button'
import styles from './StepShared.module.css'

export default function Step6_Result() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const { data, reset } = useVisitorFlow()
  const { addRecord } = useRecords()
  const t = translations[lang]
  const recorded = useRef(false)

  useEffect(() => {
    if (data.entryTime && !recorded.current) {
      recorded.current = true
      addRecord(data)
    }
  }, [])

  const isRestricted = data.isRestricted

  const [timeDisplay, setTimeDisplay] = useState('')
  useEffect(() => {
    if (!data.entryTime) { setTimeDisplay('—'); return }
    const d = new Date(data.entryTime)
    const mm = String(d.getMonth() + 1).padStart(2,'0')
    const dd = String(d.getDate()).padStart(2,'0')
    const yy = d.getFullYear()
    const hh = String(d.getHours()).padStart(2,'0')
    const mi = String(d.getMinutes()).padStart(2,'0')
    const ss = String(d.getSeconds()).padStart(2,'0')
    setTimeDisplay(`${mm}/${dd}/${yy} ${hh}:${mi}:${ss}`)
  }, [data.entryTime])

  const handleNewCheckin = () => {
    reset()
    navigate('/')
  }

  if (isRestricted) {
    return (
      <main className={styles.screen}>
        <div className={styles.body}>
          <div className={styles.resultRestricted}>
            <span className={styles.resultIcon}>🚫</span>
            <p className={[styles.resultTitle, styles.restricted].join(' ')}>{t.restrictedTitle}</p>
            <p className={styles.resultSub}>{t.restrictedSub}</p>
            {(data.firstName || data.lastName) && (
              <p className={styles.resultMeta}>
                {[data.lastName, data.firstName].filter(Boolean).join(', ')}
              </p>
            )}
            <p className={styles.resultMeta}>{t.entryTime}: {timeDisplay}</p>
          </div>
          <div className={styles.nav}>
            <Button variant="danger" size="lg" onClick={() => {}}>
              {t.escalate}
            </Button>
            <Button variant="secondary" size="lg" onClick={handleNewCheckin}>
              {t.checkInAnother}
            </Button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className={styles.screen}>
      <div className={styles.body}>
        <div className={styles.resultApproved}>
          <span className={styles.resultIcon}>✅</span>
          <p className={[styles.resultTitle, styles.approved].join(' ')}>{t.approvedTitle}</p>
          <p className={styles.resultSub}>{t.approvedSub}</p>
          {(data.firstName || data.lastName) && (
            <p style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.4rem',
              fontWeight: '700',
              color: 'var(--dark)',
              margin: '0.4rem 0 0',
            }}>
              {[data.lastName, data.firstName].filter(Boolean).join(', ')}
            </p>
          )}
          {data.badgeNumber && (
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              margin: 0,
            }}>
              Badge #{data.badgeNumber}
            </p>
          )}
          <p className={styles.resultMeta}>{t.entryTime}: {timeDisplay}</p>
        </div>
        <Button variant="primary" size="lg" onClick={handleNewCheckin}>
          {t.checkInAnother}
        </Button>
      </div>
    </main>
  )
}
