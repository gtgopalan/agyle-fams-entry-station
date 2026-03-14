import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import ProgressSteps from '../../components/ProgressSteps/ProgressSteps'
import FormField from '../../components/FormField/FormField'
import Button from '../../components/Button/Button'
import styles from './StepShared.module.css'
import fieldStyles from '../../components/FormField/FormField.module.css'

export default function Step4_VisitInfo() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const { data, update } = useVisitorFlow()
  const t = translations[lang]

  return (
    <main className={styles.screen}>
      <ProgressSteps current={4} />

      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.visitTitle}</h2>
          <p className={styles.instruct}>{t.receptionFieldsInstruct}</p>
        </div>

        <div className={styles.card}>
          <p className={styles.cardTitle}>Reception / Security</p>

          <FormField label={t.badgeNumber} sublabel="/ Badge No.">
            <input
              type="text"
              value={data.badgeNumber || ''}
              onChange={(e) => update({ badgeNumber: e.target.value })}
              placeholder={t.badgePlaceholder}
            />
          </FormField>

          <FormField label={t.ppeLoanedLabel} sublabel="/ Hiniramo na PPE">
            <div className={fieldStyles.toggleGroup}>
              <button
                type="button"
                className={data.ppeLoan === 'yes' ? fieldStyles.toggleActive : ''}
                onClick={() => update({ ppeLoan: 'yes' })}
              >
                {t.ppeYes}
              </button>
              <button
                type="button"
                className={data.ppeLoan === 'no' ? fieldStyles.toggleActive : ''}
                onClick={() => update({ ppeLoan: 'no' })}
              >
                {t.ppeNo}
              </button>
            </div>
          </FormField>
        </div>

        <div className={styles.nav}>
          <Button variant="secondary" size="lg" onClick={() => navigate('/checkin/3')}>
            {t.back}
          </Button>
          <Button variant="primary" size="lg" onClick={() => navigate('/checkin/5')}>
            {t.next}
          </Button>
        </div>
      </div>
    </main>
  )
}
