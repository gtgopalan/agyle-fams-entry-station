import React, { createContext, useContext, useState } from 'react'

const RecordsContext = createContext(null)

const MOCK_RECORDS = [
  {
    id: 'mock-001',
    firstName: 'Maria',
    lastName: 'Santos',
    idType: "Driver's License",
    idNumber: 'N01-23-456789',
    facePhoto: null,
    idPhoto: null,
    companyAffil: 'ABC Corp',
    purpose: 'Business Meeting',
    personnel: 'Jose Reyes',
    badgeNumber: 'V-001',
    ppeLoan: 'no',
    notes: '',
    entryTime: new Date(Date.now() - 45 * 60 * 1000),
    exitTime: null,
    isRestricted: false,
    status: 'active',
  },
  {
    id: 'mock-002',
    firstName: 'Pedro',
    lastName: 'Cruz',
    idType: 'Passport',
    idNumber: 'P1234567A',
    facePhoto: null,
    idPhoto: null,
    companyAffil: 'XYZ Logistics',
    purpose: 'Delivery / Pick-up',
    personnel: 'Rafael Mendoza',
    badgeNumber: 'V-002',
    ppeLoan: 'yes',
    notes: 'Delivered 3 boxes to warehouse',
    entryTime: new Date(Date.now() - 20 * 60 * 1000),
    exitTime: null,
    isRestricted: false,
    status: 'active',
  },
  {
    id: 'mock-003',
    firstName: 'Ana',
    lastName: 'Garcia',
    idType: 'SSS ID',
    idNumber: '33-1234567-8',
    facePhoto: null,
    idPhoto: null,
    companyAffil: '',
    purpose: 'Job Interview',
    personnel: 'Pedro Cruz',
    badgeNumber: 'V-003',
    ppeLoan: 'no',
    notes: '',
    entryTime: new Date(Date.now() - 120 * 60 * 1000),
    exitTime: new Date(Date.now() - 30 * 60 * 1000),
    isRestricted: false,
    status: 'checked-out',
  },
]

export function RecordsProvider({ children }) {
  const [records, setRecords] = useState(MOCK_RECORDS)

  function addRecord(visitor) {
    const newRecord = {
      id: String(Date.now()),
      firstName: visitor.firstName || '',
      lastName: visitor.lastName || '',
      idType: visitor.idType || '',
      idNumber: visitor.idNumber || '',
      facePhoto: visitor.facePhoto || null,
      idPhoto: visitor.idPhoto || null,
      companyAffil: visitor.companyAffil || '',
      purpose: visitor.purpose || '',
      personnel: visitor.personnel || '',
      badgeNumber: visitor.badgeNumber || '',
      ppeLoan: visitor.ppeLoan || 'no',
      notes: visitor.notes || '',
      entryTime: visitor.entryTime ? new Date(visitor.entryTime) : new Date(),
      exitTime: null,
      isRestricted: visitor.isRestricted || false,
      status: visitor.isRestricted ? 'restricted' : 'active',
    }
    setRecords(prev => [newRecord, ...prev])
  }

  function checkOut(id) {
    setRecords(prev =>
      prev.map(r =>
        r.id === id
          ? { ...r, exitTime: new Date(), status: 'checked-out' }
          : r
      )
    )
  }

  function updateNotes(id, notes) {
    setRecords(prev =>
      prev.map(r => (r.id === id ? { ...r, notes } : r))
    )
  }

  return (
    <RecordsContext.Provider value={{ records, addRecord, checkOut, updateNotes }}>
      {children}
    </RecordsContext.Provider>
  )
}

export function useRecords() {
  const ctx = useContext(RecordsContext)
  if (!ctx) throw new Error('useRecords must be used inside RecordsProvider')
  return ctx
}
