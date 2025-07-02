import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import ExamList from './pages/ExamList'
import ExamDetail from './pages/ExamDetail'
import CreateExam from './pages/CreateExam'
import ApplicantList from './pages/ApplicantList'
import CreateApplicant from './pages/CreateApplicant'
import ExamSessions from './pages/ExamSessions'
import Reports from './pages/Reports'
import SystemInfo from './pages/SystemInfo'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/exams" element={<ExamList />} />
        <Route path="/exams/create" element={<CreateExam />} />
        <Route path="/exams/:id" element={<ExamDetail />} />
        <Route path="/applicants" element={<ApplicantList />} />
        <Route path="/applicants/create" element={<CreateApplicant />} />
        <Route path="/sessions" element={<ExamSessions />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/system" element={<SystemInfo />} />
      </Routes>
    </Layout>
  )
}

export default App