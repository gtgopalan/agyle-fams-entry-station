import React, { useRef, useState, useCallback } from 'react'
import Webcam from 'react-webcam'
import styles from './Camera.module.css'

/**
 * mode: 'face' | 'id'
 * onCapture(dataURL): called with base64 image
 */
export default function Camera({ mode = 'face', onCapture }) {
  const webcamRef  = useRef(null)
  const [captured, setCaptured] = useState(null)
  const [error,    setError]    = useState(null)

  const videoConstraints = {
    width:  { ideal: 1280 },
    height: { ideal: 720 },
    facingMode: 'user',
  }

  const capture = useCallback(() => {
    if (!webcamRef.current) return
    const img = webcamRef.current.getScreenshot()
    setCaptured(img)
    onCapture?.(img)
  }, [onCapture])

  const retake = () => {
    setCaptured(null)
    onCapture?.(null)
  }

  if (error) {
    return (
      <div className={styles.error}>
        <span className={styles.errorIcon}>⚠</span>
        <p>Camera unavailable.<br />Please check device permissions.</p>
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      {/* Live preview or captured result */}
      <div className={[styles.frame, mode === 'face' ? styles.frameFace : styles.frameID].join(' ')}>
        {captured ? (
          <img src={captured} alt="Captured" className={styles.preview} />
        ) : (
          <>
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              screenshotQuality={0.92}
              videoConstraints={videoConstraints}
              className={styles.video}
              onUserMediaError={() => setError(true)}
              mirrored={mode === 'face'}
            />
            {/* Face oval guide */}
            {mode === 'face' && <div className={styles.ovalGuide} aria-hidden="true" />}
            {/* ID corner guides */}
            {mode === 'id' && (
              <div className={styles.idGuide} aria-hidden="true">
                <span className={[styles.corner, styles.tl].join(' ')} />
                <span className={[styles.corner, styles.tr].join(' ')} />
                <span className={[styles.corner, styles.bl].join(' ')} />
                <span className={[styles.corner, styles.br].join(' ')} />
              </div>
            )}
          </>
        )}
      </div>

      {/* Controls */}
      <div className={styles.controls}>
        {captured ? (
          <button className={styles.retakeBtn} onClick={retake}>↺ Retake</button>
        ) : (
          <button className={styles.captureBtn} onClick={capture}>
            <span className={styles.captureRing} />
            <span className={styles.captureDot} />
          </button>
        )}
      </div>
    </div>
  )
}
