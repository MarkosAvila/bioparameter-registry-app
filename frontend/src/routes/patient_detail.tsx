"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Droplets, Activity } from 'lucide-react'
import PatientInfoCard from '../components/PatientInfoCard'


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
      { date: "2023-01-01", glucose: 95, systolic: 120, diastolic: 80 },
      { date: "2023-01-15", glucose: 105, systolic: 130, diastolic: 85 },
      { date: "2023-02-01", glucose: 100, systolic: 125, diastolic: 82 },
      { date: "2023-02-15", glucose: 110, systolic: 135, diastolic: 88 },
      { date: "2023-03-01", glucose: 98, systolic: 122, diastolic: 79 },
      { date: "2023-03-15", glucose: 115, systolic: 140, diastolic: 90 },
    ]
  }

  const calculateAverage = (measurements, key) => {
    const sum = measurements.reduce((acc, measurement) => acc + measurement[key], 0)
    return Math.round(sum / measurements.length)
  }

  const isAbnormal = (value, type) => {
    if (type === 'glucose') return value > 140 || value < 70
    if (type === 'bloodPressure') return value > 130
    return false
  }

  const [averageGlucose, setAverageGlucose] = useState(0)
  const [averageArterialPressure, setAverageArterialPressure] = useState(0)

  useEffect(() => {
    const avgGlucose = calculateAverage(patientData.measurements, 'glucose')
    setAverageGlucose(avgGlucose)

    const avgSystolic = calculateAverage(patientData.measurements, 'systolic')
    const avgDiastolic = calculateAverage(patientData.measurements, 'diastolic')
    const avgArterialPressure = Math.round((avgSystolic + 2 * avgDiastolic) / 3)
    setAverageArterialPressure(avgArterialPressure)
  }, [patientData.measurements])

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Patient Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <PatientInfoCard patientData={patientData} />

        <Card>
          <CardHeader>
            <CardTitle>Average Measurements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className={`mb-4 p-4 rounded-md ${isAbnormal(averageGlucose, 'glucose') ? 'bg-red-100' : 'bg-green-100'}`}>
              <div className="flex items-center">
                <Droplets className="mr-2" />
                <span className="font-semibold">Average Blood Glucose:</span>
              </div>
              <p className="text-2xl">{averageGlucose} mg/dL</p>
            </div>
            <div className={`p-4 rounded-md ${isAbnormal(averageArterialPressure, 'bloodPressure') ? 'bg-red-100' : 'bg-green-100'}`}>
              <div className="flex items-center">
                <Activity className="mr-2" />
                <span className="font-semibold">Average Arterial Pressure:</span>
              </div>
              <p className="text-2xl">{averageArterialPressure} mmHg</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Measurement History</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Blood Glucose (mg/dL)</TableHead>
                <TableHead>Blood Pressure (mmHg)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {patientData.measurements.map((measurement, index) => (
                <TableRow key={index}>
                  <TableCell>{measurement.date}</TableCell>
                  <TableCell>{measurement.glucose}</TableCell>
                  <TableCell>{`${measurement.systolic}/${measurement.diastolic}`}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Blood Glucose History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patientData.measurements}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="glucose" stroke="#8884d8" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blood Pressure History</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={patientData.measurements}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#8884d8" />
                <Line type="monotone" dataKey="diastolic" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}