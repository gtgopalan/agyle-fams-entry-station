import React, { createContext, useContext, useState } from 'react'

const VisitorFlowContext = createContext(null)
const LangContext         = createContext(null)

// ── Language Provider ────────────────────────────────────────
export function LangProvider({ children }) {
  const [lang, setLang] = useState('en')
  const toggle = () => setLang(l => l === 'en' ? 'fil' : 'en')
  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

// ── Visitor Flow Provider ────────────────────────────────────
const emptyVisitor = {
  // Images
  facePhoto:   null,   // base64 data URL
  idPhoto:     null,

  // Identity (from OCR or manual)
  firstName:   '',
  lastName:    '',
  idType:      '',
  idNumber:    '',

  // Visit info
  companyAffil:  '',
  purpose:       '',
  personnel:     '',
  badgeNumber:   '',
  ppeLoan:       null,  // true | false | null
  notes:         '',    // reception-only

  // Consent
  consentRules:   false,
  consentPrivacy: false,

  // System
  entryTime:    null,
  isRestricted: false,
  restrictNote: '',
}

export function VisitorFlowProvider({ children }) {
  const [visitor, setVisitor] = useState({ ...emptyVisitor })

  const update = (fields) => setVisitor(v => ({ ...v, ...fields }))

  const reset = () => setVisitor({ ...emptyVisitor })

  const submit = () => {
    const entry = {
      ...visitor,
      entryTime: new Date(),
      // Mock blocklist check — replace with real Firestore query later
      isRestricted: (visitor.firstName + ' ' + visitor.lastName).toLowerCase().includes('blocked'),
    }
    setVisitor(entry)
    return entry
  }

  return (
    <VisitorFlowContext.Provider value={{ data: visitor, update, reset, submit }}>
      {children}
    </VisitorFlowContext.Provider>
  )
}

export function useVisitorFlow() {
  return useContext(VisitorFlowContext)
}
