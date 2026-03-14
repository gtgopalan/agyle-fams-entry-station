import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { LangProvider, VisitorFlowProvider } from './context/VisitorFlowContext'
import { RecordsProvider } from './context/RecordsContext'
import TopBar from './components/TopBar/TopBar'
import Welcome from './screens/Welcome/Welcome'
import Step1_Face from './screens/VisitorCheckin/Step1_Face'
import Step2_ID from './screens/VisitorCheckin/Step2_ID'
import Step3_Identity from './screens/VisitorCheckin/Step3_Identity'
import Step4_VisitInfo from './screens/VisitorCheckin/Step4_VisitInfo'
import Step5_Consent from './screens/VisitorCheckin/Step5_Consent'
import Step6_Result from './screens/VisitorCheckin/Step6_Result'
import StaffAccess from './screens/Staff/StaffAccess'
import StaffDashboard from './screens/Staff/StaffDashboard'

export default function App() {
  return (
    <RecordsProvider>
      <LangProvider>
        <VisitorFlowProvider>
          <TopBar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/checkin/1" element={<Step1_Face />} />
            <Route path="/checkin/2" element={<Step2_ID />} />
            <Route path="/checkin/3" element={<Step3_Identity />} />
            <Route path="/checkin/4" element={<Step4_VisitInfo />} />
            <Route path="/checkin/5" element={<Step5_Consent />} />
            <Route path="/checkin/6" element={<Step6_Result />} />
            <Route path="/staff" element={<StaffAccess />} />
            <Route path="/staff/dashboard" element={<StaffDashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </VisitorFlowProvider>
      </LangProvider>
    </RecordsProvider>
  )
}
