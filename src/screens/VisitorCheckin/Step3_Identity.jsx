import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLang, useVisitorFlow } from '../../context/VisitorFlowContext'
import { translations } from '../../i18n/index'
import { ID_TYPES, PERSONNEL, VISIT_PURPOSES } from '../../mock/data'
import ProgressSteps from '../../components/ProgressSteps/ProgressSteps'
import FormField from '../../components/FormField/FormField'
import Button from '../../components/Button/Button'
import styles from './StepShared.module.css'

export default function Step3_Identity() {
  const navigate = useNavigate()
  const { lang } = useLang()
  const { data, update } = useVisitorFlow()
  const t = translations[lang]

  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!data.firstName?.trim()) e.firstName = t.required
    if (!data.lastName?.trim())  e.lastName  = t.required
    if (!data.idType?.trim())    e.idType    = t.required
    if (!data.idNumber?.trim())  e.idNumber  = t.required
    if (!data.purpose?.trim())   e.purpose   = t.required
    if (!data.personnel?.trim()) e.personnel = t.required
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleNext = () => {
    if (validate()) navigate('/checkin/4')
  }

  const clr = (key) => setErrors(p => ({ ...p, [key]: '' }))

  return (
    <main className={styles.screen}>
      <ProgressSteps current={3} />

      <div className={styles.body}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.identityTitle}</h2>
          <p className={styles.instruct}>{t.identityInstruct}</p>
        </div>

        {/* Photo thumbnails */}
        {(data.facePhoto || data.idPhoto) && (
          <div className={[styles.card, styles.photoRow].join(' ')}>
            {data.facePhoto && (
              <img src={data.facePhoto} alt="Face" className={styles.photoThumb} />
            )}
            {data.idPhoto && (
              <img src={data.idPhoto} alt="ID" className={styles.photoThumbID} />
            )}
          </div>
        )}

        {/* Personal details */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>{t.identityTitle}</p>

          <div className={styles.row}>
            <FormField label={t.lastName} sublabel="/ Apelyido" required error={errors.lastName}>
              <input
                type="text"
                value={data.lastName || ''}
                onChange={(e) => { update({ lastName: e.target.value }); clr('lastName') }}
                placeholder="e.g. Santos"
              />
            </FormField>

            <FormField label={t.firstName} sublabel="/ Pangalan" required error={errors.firstName}>
              <input
                type="text"
                value={data.firstName || ''}
                onChange={(e) => { update({ firstName: e.target.value }); clr('firstName') }}
                placeholder="e.g. Maria"
              />
            </FormField>
          </div>

          <div className={styles.row}>
            <FormField label={t.idType} sublabel="/ Uri ng ID" required error={errors.idType}>
              <select
                value={data.idType || ''}
                onChange={(e) => { update({ idType: e.target.value }); clr('idType') }}
              >
                <option value="">— Select ID Type —</option>
                {ID_TYPES.map((it) => (
                  <option key={it} value={it}>{it}</option>
                ))}
              </select>
            </FormField>

            <FormField label={t.idNumber} sublabel="/ Numero ng ID" required error={errors.idNumber}>
              <input
                type="text"
                value={data.idNumber || ''}
                onChange={(e) => { update({ idNumber: e.target.value }); clr('idNumber') }}
                placeholder="e.g. 1234-5678-9012"
              />
            </FormField>
          </div>
        </div>

        {/* Visit information */}
        <div className={styles.card}>
          <p className={styles.cardTitle}>{t.visitTitle}</p>

          <FormField label={t.companyAffil} sublabel="/ Kumpanya">
            <input
              type="text"
              value={data.companyAffil || ''}
              onChange={(e) => update({ companyAffil: e.target.value })}
              placeholder={t.companyPlaceholder}
            />
          </FormField>

          <div className={styles.row}>
            <FormField label={t.purpose} sublabel="/ Layunin" required error={errors.purpose}>
              <select
                value={data.purpose || ''}
                onChange={(e) => { update({ purpose: e.target.value }); clr('purpose') }}
              >
                <option value="">— {t.purpose} —</option>
                {VISIT_PURPOSES.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </FormField>

            <FormField label={t.personnel} sublabel="/ Taong Bibisitahin" required error={errors.personnel}>
              <select
                value={data.personnel || ''}
                onChange={(e) => { update({ personnel: e.target.value }); clr('personnel') }}
              >
                <option value="">— Select Personnel —</option>
                {PERSONNEL.map((p) => (
                  <option key={p.id} value={p.name}>{p.name} — {p.dept}</option>
                ))}
              </select>
            </FormField>
          </div>
        </div>

        <div className={styles.notice}>
          <span className={styles.noticeIcon}>ℹ️</span>
          <span>{t.editNote}</span>
        </div>

        <div className={styles.nav}>
          <Button variant="secondary" size="lg" onClick={() => navigate('/checkin/2')}>
            {t.back}
          </Button>
          <Button variant="primary" size="lg" onClick={handleNext}>
            {t.next}
          </Button>
        </div>
      </div>
    </main>
  )
}
