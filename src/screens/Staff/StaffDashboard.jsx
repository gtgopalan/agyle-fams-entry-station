import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecords } from '../../context/RecordsContext'
import styles from './StaffDashboard.module.css'

function formatTime(date) {
  if (!date) return '—'
  const d = new Date(date)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  const yy = d.getFullYear()
  const hh = String(d.getHours()).padStart(2, '0')
  const mi = String(d.getMinutes()).padStart(2, '0')
  const ss = String(d.getSeconds()).padStart(2, '0')
  return `${mm}/${dd}/${yy} ${hh}:${mi}:${ss}`
}

function getInitials(firstName, lastName) {
  const f = (firstName || '').charAt(0).toUpperCase()
  const l = (lastName || '').charAt(0).toUpperCase()
  return (f + l) || '?'
}

function VisitorCard({ record, onCheckOut, onUpdateNotes }) {
  const [editingNote, setEditingNote] = useState(false)
  const [noteValue, setNoteValue] = useState(record.notes || '')

  const isCheckedOut = record.status === 'checked-out'
  const isRestricted = record.isRestricted || record.status === 'restricted'

  function handleSaveNote() {
    onUpdateNotes(record.id, noteValue)
    setEditingNote(false)
  }

  function handleCancelNote() {
    setNoteValue(record.notes || '')
    setEditingNote(false)
  }

  return (
    <div
      className={[
        styles.card,
        isCheckedOut ? styles.cardCheckedOut : '',
        isRestricted ? styles.cardRestricted : '',
      ].join(' ')}
    >
      {isRestricted && (
        <span className={styles.restrictedBadge}>RESTRICTED</span>
      )}

      {/* Card header: photo + name */}
      <div className={styles.cardHeader}>
        <div className={styles.photoWrap}>
          {record.facePhoto ? (
            <img src={record.facePhoto} alt="Visitor" className={styles.photo} />
          ) : (
            <div className={styles.photoPlaceholder}>
              {getInitials(record.firstName, record.lastName)}
            </div>
          )}
        </div>
        <div className={styles.nameBlock}>
          <p className={styles.visitorName}>
            {[record.lastName, record.firstName].filter(Boolean).join(', ')}
          </p>
          <p className={styles.visitorSub}>
            {record.companyAffil || record.idType || '—'}
          </p>
        </div>
      </div>

      {/* Entry / Exit time */}
      <div className={styles.timeRow}>
        <span className={styles.timeLabel}>Entry:</span>
        <span className={styles.timeValue}>{formatTime(record.entryTime)}</span>
      </div>
      {isCheckedOut && record.exitTime && (
        <div className={styles.timeRow}>
          <span className={styles.timeLabel}>Exit:</span>
          <span className={styles.timeValue}>{formatTime(record.exitTime)}</span>
        </div>
      )}

      {/* Purpose & personnel */}
      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>Purpose:</span>
        <span className={styles.infoValue}>{record.purpose || '—'}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.infoLabel}>Personnel:</span>
        <span className={styles.infoValue}>{record.personnel || '—'}</span>
      </div>

      {/* Badge + PPE */}
      <div className={styles.badgeRow}>
        <span className={styles.badgeChip}>Badge {record.badgeNumber || '—'}</span>
        {record.ppeLoan === 'yes' && (
          <span className={styles.ppeBadge}>PPE Loaned</span>
        )}
      </div>

      {/* Notes */}
      <div className={styles.notesSection}>
        {!editingNote && record.notes && (
          <p className={styles.noteText}>{record.notes}</p>
        )}
        {editingNote ? (
          <div className={styles.noteEdit}>
            <textarea
              className={styles.noteTextarea}
              value={noteValue}
              onChange={e => setNoteValue(e.target.value)}
              rows={3}
              placeholder="Add a note..."
              autoFocus
            />
            <div className={styles.noteActions}>
              <button className={styles.noteSave} onClick={handleSaveNote}>Save</button>
              <button className={styles.noteCancel} onClick={handleCancelNote}>Cancel</button>
            </div>
          </div>
        ) : (
          <button
            className={styles.noteBtn}
            onClick={() => setEditingNote(true)}
          >
            {record.notes ? '✏️ Edit Note' : '+ Add Note'}
          </button>
        )}
      </div>

      {/* Actions */}
      {!isCheckedOut && (
        <div className={styles.cardActions}>
          <button
            className={styles.checkOutBtn}
            onClick={() => onCheckOut(record.id)}
          >
            Check Out
          </button>
        </div>
      )}
    </div>
  )
}

export default function StaffDashboard() {
  const navigate = useNavigate()
  const { records, checkOut, updateNotes } = useRecords()
  const [checkedOutOpen, setCheckedOutOpen] = useState(false)

  const activeRecords = records.filter(r => r.status === 'active' || r.status === 'restricted')
  const checkedOutRecords = records.filter(r => r.status === 'checked-out')

  const ppeCount = activeRecords.filter(r => r.ppeLoan === 'yes').length

  return (
    <div className={styles.layout}>
      {/* Stats bar */}
      <div className={styles.statsBar}>
        <div className={styles.statsInner}>
          <div className={styles.statGroup}>
            <div className={styles.stat}>
              <span className={styles.statNumber} style={{ color: 'var(--orange)' }}>
                {activeRecords.length}
              </span>
              <span className={styles.statLabel}>Active Visitors</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>{checkedOutRecords.length}</span>
              <span className={styles.statLabel}>Checked Out Today</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statNumber}>{ppeCount}</span>
              <span className={styles.statLabel}>PPE On Loan</span>
            </div>
          </div>
          <button className={styles.logoutBtn} onClick={() => navigate('/')}>
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className={styles.content}>

        {/* Section A: Active */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Active Visitors</h2>
            <span className={styles.countBadge}>{activeRecords.length}</span>
          </div>

          {activeRecords.length === 0 ? (
            <div className={styles.emptyState}>
              <span className={styles.emptyIcon}>👥</span>
              <p className={styles.emptyTitle}>No active visitors</p>
              <p className={styles.emptySub}>Checked-in visitors will appear here.</p>
            </div>
          ) : (
            <div className={styles.cardGrid}>
              {activeRecords.map(record => (
                <VisitorCard
                  key={record.id}
                  record={record}
                  onCheckOut={checkOut}
                  onUpdateNotes={updateNotes}
                />
              ))}
            </div>
          )}
        </section>

        {/* Section B: Checked Out */}
        <section className={styles.section}>
          <button
            className={styles.sectionToggle}
            onClick={() => setCheckedOutOpen(o => !o)}
          >
            <span className={styles.sectionTitle}>Checked Out</span>
            <span className={styles.countBadge}>{checkedOutRecords.length}</span>
            <span className={styles.toggleIcon}>{checkedOutOpen ? '▲' : '▼'}</span>
          </button>

          {checkedOutOpen && (
            checkedOutRecords.length === 0 ? (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>📋</span>
                <p className={styles.emptyTitle}>No check-outs yet today</p>
              </div>
            ) : (
              <div className={styles.cardGrid}>
                {checkedOutRecords.map(record => (
                  <VisitorCard
                    key={record.id}
                    record={record}
                    onCheckOut={checkOut}
                    onUpdateNotes={updateNotes}
                  />
                ))}
              </div>
            )
          )}
        </section>
      </div>
    </div>
  )
}
