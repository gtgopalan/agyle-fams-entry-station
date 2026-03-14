import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import ProgressSteps from '../../components/ProgressSteps/ProgressSteps'
import Camera from '../../components/Camera/Camera'
import Button from '../../components/Button/Button'
import styles from './StepShared.module.css'

export default function Step1_Face() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const { data, update } = useVisitorFlow()
  const t = translations[lang]

  const handleCapture = (img) => update({ facePhoto: img })

  return (
    <main className={styles.screen}>
      <ProgressSteps current={1} />

      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.faceTitle}</h2>
          <p className={styles.instruct}>{t.faceInstruct}</p>
          <p className={styles.tip}>💡 {t.faceTip}</p>
        </div>

        <Camera mode="face" onCapture={handleCapture} />

        <div className={styles.nav}>
          <Button variant="secondary" size="lg" onClick={() => navigate('/')}>
            {t.back}
          </Button>
          <Button
            variant="primary"
            size="lg"
            disabled={!data.facePhoto}
            onClick={() => navigate('/checkin/2')}
          >
            {t.faceNext}
          </Button>
        </div>
      </div>
    </main>
  )
}
