"use client"

import { useState, useEffect } from 'react'
import PatientInfoCard from '@/components/PatientInfoCard'
import AverageMeasurementsCard from '@/components/AverageMeasurementsCard'
import MeasurementHistoryCard from '@/components/MeasurementHistoryCard'
import BloodGlucoseHistoryCard from '@/components/BloodGlucoseHistoryCard'
import BloodPressureHistoryCard from '@/components/BloodPressureHistoryCard'


interface Measurement {
  date: string;
  glucose: number;
  systolic: number;
  diastolic: number;
}

export default function PatientDetail() {

	// Mock data for demonstration
	const patientData = {
    id: 1,
    name: "John Doe",
    age: 45,
    sex: "Male",
    weight: 75,
    height: 180,
    measurements: [
      { date: "2023-01-01", glucose: 95, systolic: 120, diastolic: 70 },
      { date: "2023-01-15", glucose: 105, systolic: 110, diastolic: 80 },
      { date: "2023-02-01", glucose: 100, systolic: 130, diastolic: 85 },
      { date: "2023-02-15", glucose: 110, systolic: 135, diastolic: 80 },
      { date: "2023-03-01", glucose: 98, systolic: 120, diastolic: 79 },
      { date: "2023-03-15", glucose: 115, systolic: 140, diastolic: 90 },
    ]
  }

  const calculateAverage = ({ measurements, key }: { measurements: Measurement[], key: keyof Measurement }) => {
    const sum = measurements.reduce((acc, measurement) => acc + (+measurement[key]), 0)
    return Math.round(sum / measurements.length)
  }

  const [averageGlucose, setAverageGlucose] = useState(0)
  const [averageSystolic, setAverageSystolic] = useState(0)
  const [averageDiastolic, setAverageDiastolic] = useState(0)

  useEffect(() => {
    const avgGlucose = calculateAverage({measurements:patientData.measurements, key:'glucose'})
    setAverageGlucose(avgGlucose)

    const avgSystolic = calculateAverage({measurements:patientData.measurements, key:'systolic'})
    setAverageSystolic(avgSystolic)

    const avgDiastolic = calculateAverage({measurements:patientData.measurements, key:'diastolic'})
    setAverageDiastolic(avgDiastolic)
  }, [patientData.measurements])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Patient Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <PatientInfoCard patientData={patientData} />

        <AverageMeasurementsCard averageGlucose={averageGlucose} averageSystolic={averageSystolic} averageDiastolic={averageDiastolic} />
      </div>

      < MeasurementHistoryCard patientData={patientData} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BloodGlucoseHistoryCard patientData={patientData} />
        <BloodPressureHistoryCard patientData={patientData} />
      </div>
    </div>
  )
}