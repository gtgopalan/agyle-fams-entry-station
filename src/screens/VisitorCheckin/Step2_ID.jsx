import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import ProgressSteps from '../../components/ProgressSteps/ProgressSteps'
import Camera from '../../components/Camera/Camera'
import Button from '../../components/Button/Button'
import styles from './StepShared.module.css'

export default function Step2_ID() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const { data, update } = useVisitorFlow()
  const t = translations[lang]

  const handleCapture = (img) => update({ idPhoto: img })

  return (
    <main className={styles.screen}>
      <ProgressSteps current={2} />

      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.idTitle}</h2>
          <p className={styles.instruct}>{t.idInstruct}</p>
          <p className={styles.tip}>💡 {t.idTip}</p>
        </div>

        <Camera mode="id" onCapture={handleCapture} />

        <div className={styles.nav}>
          <Button variant="secondary" size="lg" onClick={() => navigate('/checkin/1')}>
            {t.back}
          </Button>
          <Button
            variant="primary"
            size="lg"
            disabled={!data.idPhoto}
            onClick={() => navigate('/checkin/3')}
          >
            {t.idNext}
          </Button>
        </div>
      </div>
    </main>
  )
}
