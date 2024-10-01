import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UserPlus, Search } from "lucide-react"

import DashboardCard from '../components/DashboardCard';
import PatientCard from '../components/PatientCard';
import DoctorHeader from '@/components/DoctorHEader'

export default function DoctorDashboard() {
  const [filter, setFilter] = useState('')

  // Mock data for demonstration
  const doctorName = "Dr. Smith"
  const totalPatients = 150
  const abnormalBloodSugar = 5
  const abnormalBloodPressure = 8

  const patientsWithAbnormalParams = [
    { id: 1, name: "John Doe", age: 45, gender: "Male", condition: "Blood Sugar" },
    { id: 2, name: "Jane Smith", age: 52, gender: "Female", condition: "Blood Pressure" },
    { id: 3, name: "Bob Johnson", age: 38, gender: "Male", condition: "Both" },
  ]

  const filteredPatients = patientsWithAbnormalParams.filter(patient =>
    patient.name.toLowerCase().includes(filter.toLowerCase()) ||
    patient.age.toString().includes(filter) ||
    patient.gender.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <DoctorHeader doctorName={doctorName} />

      <DashboardCard
        totalPatients={totalPatients}
        abnormalBloodSugar={abnormalBloodSugar}
        abnormalBloodPressure={abnormalBloodPressure}
      />

      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search patients..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full absolute pl-10" />
          <Search className="h-4 w-4 text-gray-500 relative left-4 top-[10px]" />
      </div>

      <div className="space-y-4 mb-6">
        {filteredPatients.map(patient => (
          <PatientCard key={patient.id} patient={patient}/>
        ))}
      </div>

      <Button className="w-full rounded-lg" size="lg">
        <UserPlus className="mr-2 h-4 w-4" /> Add New Patient
      </Button>
    </div>
  )
}