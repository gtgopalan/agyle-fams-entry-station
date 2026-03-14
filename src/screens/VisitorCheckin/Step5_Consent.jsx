import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import { HOUSE_RULES, PRIVACY_NOTICE } from '../../mock/data'
import ProgressSteps from '../../components/ProgressSteps/ProgressSteps'
import Button from '../../components/Button/Button'
import Modal from '../../components/Modal/Modal'
import styles from './StepShared.module.css'

export default function Step5_Consent() {
  const navigate  = useNavigate()
  const { lang }  = useLang()
  const { data, update, submit } = useVisitorFlow()
  const t = translations[lang]

  const [showRules,   setShowRules]   = useState(false)
  const [showPrivacy, setShowPrivacy] = useState(false)
  const [attempted,   setAttempted]   = useState(false)

  const rulesChecked   = !!data.consentRules
  const privacyChecked = !!data.consentPrivacy
  const bothChecked    = rulesChecked && privacyChecked

  const handleConfirm = () => {
    setAttempted(true)
    if (!bothChecked) return
    submit()
    navigate('/checkin/6')
  }

  return (
    <main className={styles.screen}>
      <ProgressSteps current={5} />

      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.consentTitle}</h2>
          <p className={styles.instruct}>{t.consentInstruct}</p>
        </div>

        <div className={styles.card}>
          {/* Rules consent */}
          <label className={styles.checkboxRow}>
            <div
              className={[styles.checkboxBox, rulesChecked ? styles.checked : ''].join(' ')}
              onClick={() => update({ consentRules: !rulesChecked })}
            >
              {rulesChecked && '✓'}
            </div>
            <span className={styles.checkboxText}>
              {t.consentRule}{' '}
              <button
                type="button"
                className={styles.checkboxLink}
                onClick={(e) => { e.stopPropagation(); setShowRules(true) }}
              >
                {t.viewRules}
              </button>
            </span>
          </label>

          {/* Privacy consent */}
          <label className={styles.checkboxRow}>
            <div
              className={[styles.checkboxBox, privacyChecked ? styles.checked : ''].join(' ')}
              onClick={() => update({ consentPrivacy: !privacyChecked })}
            >
              {privacyChecked && '✓'}
            </div>
            <span className={styles.checkboxText}>
              {t.consentPrivacy}{' '}
              <button
                type="button"
                className={styles.checkboxLink}
                onClick={(e) => { e.stopPropagation(); setShowPrivacy(true) }}
              >
                {t.viewPrivacy}
              </button>
            </span>
          </label>

          {attempted && !bothChecked && (
            <p className={styles.consentError}>{t.consentRequired}</p>
          )}
        </div>

        <div className={styles.nav}>
          <Button variant="secondary" size="lg" onClick={() => navigate('/checkin/4')}>
            {t.back}
          </Button>
          <Button variant="primary" size="lg" onClick={handleConfirm}>
            {t.confirmEntry}
          </Button>
        </div>
      </div>

      {/* House Rules modal */}
      <Modal
        open={showRules}
        title={t.viewRules}
        onClose={() => setShowRules(false)}
      >
        <div dangerouslySetInnerHTML={{ __html: HOUSE_RULES }} />
      </Modal>

      {/* Privacy Policy modal */}
      <Modal
        open={showPrivacy}
        title={t.viewPrivacy}
        onClose={() => setShowPrivacy(false)}
      >
        <div dangerouslySetInnerHTML={{ __html: PRIVACY_NOTICE }} />
      </Modal>
    </main>
  )
}
