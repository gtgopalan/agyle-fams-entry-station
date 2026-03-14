import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './StaffAccess.module.css'

const CORRECT_PIN = '1234'

export default function StaffAccess() {
  const navigate = useNavigate()
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)

  function handleDigit(digit) {
    if (pin.length >= 4) return
    const next = pin + digit
    setPin(next)
    setError(false)

    if (next.length === 4) {
      if (next === CORRECT_PIN) {
        navigate('/staff/dashboard')
      } else {
        setShake(true)
        setError(true)
        setTimeout(() => {
          setShake(false)
          setPin('')
        }, 600)
      }
    }
  }

  function handleClear() {
    setPin(prev => prev.slice(0, -1))
    setError(false)
  }

  const numpadKeys = [
    '1', '2', '3',
    '4', '5', '6',
    '7', '8', '9',
    '*', '0', '#',
  ]

  return (
    <main className={styles.screen}>
      <div className={styles.card}>
        <h1 className={styles.heading}>Staff Access</h1>
        <p className={styles.headingSub}>Akses ng Staff</p>
        <p className={styles.subtitle}>
          Enter your PIN to continue
          <span className={styles.subtitleSub}> / Ilagay ang iyong PIN</span>
        </p>

        {/* PIN dots */}
        <div className={[styles.dots, shake ? styles.shake : ''].join(' ')}>
          {[0, 1, 2, 3].map(i => (
            <span
              key={i}
              className={[styles.dot, pin.length > i ? styles.dotFilled : ''].join(' ')}
            />
          ))}
        </div>

        {error && (
          <p className={styles.errorMsg}>Incorrect PIN / Maling PIN</p>
        )}

        {/* Numpad */}
        <div className={styles.numpad}>
          {numpadKeys.map(key => {
            if (key === '*') {
              return (
                <button
                  key={key}
                  className={[styles.key, styles.keyAction].join(' ')}
                  onClick={handleClear}
                  aria-label="Clear last digit"
                >
                  ⌫
                </button>
              )
            }
            if (key === '#') {
              return (
                <button
                  key={key}
                  className={[styles.key, styles.keyDisabled].join(' ')}
                  disabled
                  aria-label="Unused"
                >
                  #
                </button>
              )
            }
            return (
              <button
                key={key}
                className={styles.key}
                onClick={() => handleDigit(key)}
              >
                {key}
              </button>
            )
          })}
        </div>

        <button className={styles.backLink} onClick={() => navigate('/')}>
          ← Back
        </button>
      </div>
    </main>
  )
}
